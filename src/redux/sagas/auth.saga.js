// @flow
import {
  throttle,
  take,
  race,
  call,
  all,
  put,
  takeLatest,
  fork,
  actionChannel,
} from 'redux-saga/effects'
import { requestSaga } from '../../Modules/redux-saga-request'
import {
  LOGIN_WITH_FB_BUTTON_PRESSED,
  FB_LOGIN_DIALOG_RESPONDED,
  LOGOUT,
  REFRESH_USER,
  REFRESH_FACEBOOK,
  REFRESH_GOOGLE,
  LOGIN_GOOGLE,
} from '../actionTypes'
import * as actions from '../actions'
import { initialNotifications } from '../actions/checkin.actions'
import {
  GET_USER,
  AUTHENTICATE_FB,
  AUTHENTICATE_GOOGLE,
  refreshUser,
} from '../actions/user.actions'
import {
  goToV2WorkbookScreen,
  goToWorkbookSkippingStepScreen,
} from '../actions/nav.actions'
import {
  authenticateWithFBToken,
  fetchUserWithId,
  isClientEndpoint,
  resetStore,
  authenticateWithGoogle,
} from '../../services/apollo'
import facebook from '../../services/facebook'
import AuthStorage from '../../services/authStorage'
import NavigationService from '2020_services/navigation'
import SentryService from '2020_services/sentry'
import GoogleService from '../../services/google'
import tron from 'reactotron-react-native'

function* wipeTokens() {
  yield all([call(AuthStorage.wipeStorage), call(facebook.logOut)])
}

function* _logout() {
  try {
    const { userId, source = 'facebook' } = yield call(
      AuthStorage.getTokenAndUserId
    )
    if (userId) {
      if (source === 'google') {
        yield all([
          call(AuthStorage.wipeStorage),
          call(resetStore),
        ])
      } else {
        yield all([call(wipeTokens), call(resetStore)])
      }
    }
  } catch (err) {
    tron.log(err)
  } finally {
    yield put(actions.setUserAnonymous())
  }
}

function* _handleUserError() {
  yield call(_logout)
  yield put(actions.setUserAnonymous())
}

function* _fetchUserWithId(userId) {
  yield put({ type: 'FETCH_USER_WITH_ID', payload: userId })
  const { payload: user } = yield call(
    requestSaga,
    GET_USER,
    () => fetchUserWithId(userId),
    { userId }
  )

  if (user.error) tron.log('There was an error with user authentication')
  else {
    yield call(SentryService.setUser, user.id, user.email)
    yield put(initialNotifications())
  }
  // if GET_USER.ERRORED it will be handled by _handleUserError
}

function* _fetchGoogleUser(
  id: string,
  email: string,
  name: string,
  photo: string
) {
  yield put({ type: 'AUTHENTICATE_GOOGLE', payload: id })

  yield fork(
    requestSaga,
    AUTHENTICATE_GOOGLE,
    async () => {
      try {
        const { token, user, endpoint } = await authenticateWithGoogle({
          name,
          id: `${id}`,
          email,
        })
        return {
          token,
          user: {
            ...user,
            photo,
          },
          endpoint,
        }
      } catch (err) {
        tron.log(err)
        throw err
      }
    },
    { userId: id }
  )

  const result = yield take([
    AUTHENTICATE_GOOGLE.ERRORED,
    AUTHENTICATE_GOOGLE.SUCCEEDED,
    AUTHENTICATE_GOOGLE.CANCELLED,
  ])

  if (result.type === AUTHENTICATE_GOOGLE.SUCCEEDED) {
    const { token, user: { id: userId }, endpoint } = result.payload

    yield call(AuthStorage.setTokenAndUserId, {
      token,
      userId,
      endpoint,
      name,
      email,
      googleId: id,
      source: 'google',
    })

    yield call(_fetchUserWithId, userId)
    return
  } else {
    yield put(actions.setUserAnonymous())
  }
}

function* _googleLogin() {
  try {
    const { id, name, email, photo } = yield call(GoogleService.login)
    if (id) {
      yield call(_fetchGoogleUser, id, email, name, photo)
    }
  } catch (err) {
    tron.log(err)
  }
}

function* _googleRefresh() {
  try {
    const { userId } = yield call(AuthStorage.getTokenAndUserId)
    if (userId) return yield call(_fetchUserWithId, userId)
    else yield put(actions.setUserAnonymous())
  } catch (err) {
    tron.log(err)
    yield put(actions.setUserAnonymous())
  }
}

function* genericRefresh() {
  const { userId, source = 'facebook' } = yield call(
    AuthStorage.getTokenAndUserId
  )
  if (userId) {
    return yield call(_fetchUserWithId, userId)
  }
  if (source === 'google') yield put({ type: REFRESH_GOOGLE })
  else yield put({ type: REFRESH_FACEBOOK }) // defaults to facebook
}

function* refreshUserSaga() {
  const { token, userId, endpoint } = yield call(AuthStorage.getTokenAndUserId)
  const fbToken: ?string = yield call(facebook.getToken)
  if (userId && token && isClientEndpoint(endpoint)) {
    return yield call(_fetchUserWithId, userId)
  }
  if (fbToken) {
    yield fork(
      requestSaga,
      AUTHENTICATE_FB,
      () => authenticateWithFBToken(fbToken),
      { fbToken }
    )
    const result = yield take([
      AUTHENTICATE_FB.ERRORED,
      AUTHENTICATE_FB.SUCCEEDED,
      AUTHENTICATE_FB.CANCELLED,
    ])
    if (result.type === AUTHENTICATE_FB.SUCCEEDED) {
      const { token, user: { id }, endpoint } = result.payload

      yield call(AuthStorage.setTokenAndUserId, {
        token,
        userId: id,
        endpoint,
        source: 'facebook',
      })

      yield call(_fetchUserWithId, id)
      return
    }
  }
  yield put(actions.setUserAnonymous())
}

function* refreshUserOrLogout() {
  const winner = yield race({
    logout: take(LOGOUT),
    refresh: call(genericRefresh),
  })
  if (winner.logout) {
    const result = yield call(_logout)
    return result
  }
}

function* _loginOrRegisterWithFacebook(payload) {
  const { step, incompleteFormsIds, phase, isV2 } = payload

  try {
    const success = yield call(facebook.openFBLogin)
    yield put({ type: FB_LOGIN_DIALOG_RESPONDED, payload: success })

    if (step) {
      if (isV2) {
        yield call(
          NavigationService.dispatch,
          goToV2WorkbookScreen({ step, phase })
        )
      } else {
        yield call(
          NavigationService.dispatch,
          goToWorkbookSkippingStepScreen({ step, incompleteFormsIds })
        )
      }
    }
  } catch (error) {
    yield put({ type: FB_LOGIN_DIALOG_RESPONDED + 'FAILD', message: error })
    yield put({ type: GET_USER.ERRORED, error })
    return error
  } finally {
    yield put({ type: REFRESH_FACEBOOK })
  }
}

function* watchForRefreshUserOrLogout() {
  const requestChan = yield actionChannel([REFRESH_USER])
  while (true) {
    const action = yield take(requestChan)
    yield fork(refreshUserOrLogout, action)
  }
}

function* watchForUserErroredSaga() {
  yield takeLatest(GET_USER.ERRORED, _handleUserError)
}

function* watchForFacebookRefreshSaga() {
  yield takeLatest(REFRESH_FACEBOOK, refreshUserSaga)
}

function* watchForGoogleRefreshSaga() {
  yield takeLatest(REFRESH_GOOGLE, _googleRefresh)
}

export function* loginFlowSaga() {
  yield fork(watchForUserErroredSaga)
  yield fork(watchForRefreshUserOrLogout)
  yield fork(watchForFacebookRefreshSaga)
  yield fork(watchForGoogleRefreshSaga)
  yield throttle(
    500,
    LOGIN_WITH_FB_BUTTON_PRESSED,
    _loginOrRegisterWithFacebook
  )
  yield throttle(500, LOGIN_GOOGLE, _googleLogin)
  yield throttle(500, LOGOUT, _logout)
  yield put(refreshUser())
}
