import { takeLatest, fork, call, put } from 'redux-saga/effects'
import { updateCheckin }               from '../actions/checkin.actions'
import {
  CHANGE_CHECKIN,
  BUILD_NOTIFICATION_SET
}                                      from '../actionTypes'
import { calculateNextCheckin }        from '../../services/checkins'
import { createNotification }          from '../actions/notifications.actions'

function* setUpNotificationAndUpdateCheckin({ payload }) {
  const { step, frequency, message } = payload
  const [nextCheckin, repeatTime] = yield call(calculateNextCheckin, frequency)
  const id = `${step}`
  yield put(createNotification({ message, id, nextCheckin, repeatTime }))
  yield put(updateCheckin({ step, checkin: { frequency, nextCheckin, id } }))
}

function* _setInitialNotifications({ payload }) {
  const { steps } = payload
  // TODO
}

function* watchForInitialNotifications() {
  yield takeLatest(BUILD_NOTIFICATION_SET, _setInitialNotifications)
}

function* watchForCheckinsUpdate() {
  yield takeLatest(CHANGE_CHECKIN, setUpNotificationAndUpdateCheckin)
}

export function* watchForCheckinsSaga() {
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForInitialNotifications)
}
