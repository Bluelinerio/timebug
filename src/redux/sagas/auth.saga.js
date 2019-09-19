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
} from '../actionTypes'
import * as actions from '../actions'
import { initialNotifications } from '../actions/checkin.actions'
import { GET_USER, AUTHENTICATE_FB, refreshUser } from '../actions/user.actions'
import {
  goToV2WorkbookScreen,
  goToWorkbookSkippingStepScreen,
} from '../actions/nav.actions'
import {
  authenticateWithFBToken,
  fetchUserWithId,
  isClientEndpoint,
  resetStore,
} from '../../services/apollo'
import facebook from '../../services/facebook'
import AuthStorage from '../../services/authStorage'
import NavigationService from '2020_services/navigation'
import SentryService from '2020_services/sentry'
import tron from 'reactotron-react-native'

function* wipeTokens() {
  yield all([call(AuthStorage.wipeStorage), call(facebook.logOut)])
}

function* _logout() {
  yield all([
    call(wipeTokens),
    call(resetStore),
    put(actions.setUserAnonymous()),
  ])
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
    refresh: call(refreshUserSaga),
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
    yield put(refreshUser())
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

export function* loginFlowSaga() {
  yield fork(watchForUserErroredSaga)
  yield fork(watchForRefreshUserOrLogout)
  yield throttle(
    500,
    LOGIN_WITH_FB_BUTTON_PRESSED,
    _loginOrRegisterWithFacebook
  )
  yield throttle(500, LOGOUT, _logout)
  yield put(refreshUser())
}
