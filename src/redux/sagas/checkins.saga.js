import {
  takeLatest,
  take,
  fork,
  actionChannel,
  call,
  put,
  select
}                                                 from 'redux-saga/effects'
import { updateCheckin }                          from '../actions/checkin.actions'
import { CHANGE_CHECKIN, BUILD_NOTIFICATION_SET } from '../actionTypes'
import { calculateNextCheckin }                   from '../../services/checkins'
import { createNotification }                     from '../actions/notifications.actions'
import selectors                                  from '../selectors'

import tron from 'reactotron-react-native'

function* setUpNotificationAndUpdateCheckin({ payload }) {
  const { step, frequency, message } = payload
  const [nextCheckin, repeatTime] = yield call(calculateNextCheckin, frequency)
  const id = `${step}`
  yield put(createNotification({ message, id, nextCheckin, repeatTime }))
  yield put(updateCheckin({ step, checkin: { frequency, nextCheckin, id } }))
}

function* _setInitialNotifications() {
  tron.log('Initial notifications')
  const steps = yield select(selectors.steps)
  const user = yield select(selectors.user)
  tron.log(steps)
  if (user) {
    tron.log('There is a user')
    
  }
  else tron.log('No user')
}

function* watchForInitialNotifications() {
  const channel = yield actionChannel(BUILD_NOTIFICATION_SET)
  while (true) {
    const action = yield take(channel)
    yield call(_setInitialNotifications)
  }
}

function* watchForCheckinsUpdate() {
  yield takeLatest(CHANGE_CHECKIN, setUpNotificationAndUpdateCheckin)
}

export function* watchForCheckinsSaga() {
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForInitialNotifications)
}
