import { select, takeLatest, fork, call } from 'redux-saga/effects'
import selectors from '2020_redux/selectors'
import { GET_USER } from '../actions/user.actions'
import {
  LOGOUT,
} from '../actionTypes'
import amplitudeService from '2020_services/amplitude'
import MoengageService from '2020_services/moengage'

import tron from 'reactotron-react-native'

function* _handleUserLogged() {
  const user = yield select(selectors.user)
  if (user) {
    tron.log('LOOKIE')
    const { id, email, name } = user
    yield call(amplitudeService.addDefaultParam, 'user', user)
    yield call(amplitudeService.logEvent, 'USER_LOGIN', { id, email, name })
    yield call(MoengageService.setUser, id, email, name)
    yield call(MoengageService.logEvent, 'USER_LOGIN', { id, email, name })
  }
}

function* _handleUserLogout() {
  yield call(amplitudeService.logEvent, 'USER_LOGOUT')
  yield call(amplitudeService.removeParam, 'user')
  yield call(MoengageService.unsetUser)
  yield call(MoengageService.logEvent, 'USER_LOGOUT')
}

function* watchForUserLogged() {
  yield takeLatest(GET_USER.SUCCEEDED, _handleUserLogged)
}

function* watchForUserLogout() {
  yield takeLatest(LOGOUT, _handleUserLogout)
}

export function* watchForAnalytics() {
  yield fork(watchForUserLogged)
  yield fork(watchForUserLogout)
}
