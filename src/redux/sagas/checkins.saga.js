import { takeLatest, fork, call, put } from 'redux-saga/effects'
import { updateCheckin }               from '../actions/checkin.actions'
import {
  CHANGE_CHECKIN,
  BUILD_NOTIFICATION_SET,
  CANCEL_ALL_NOTIFICATIONS
}                                      from '../actionTypes'
import NotificationService             from '../../services/notifications'
import { calculateNextCheckin }        from '../../services/checkins'

function* setUpNotificationAndUpdateCheckin({ payload }) {
  const { step, frequency, message } = payload
  const [nextCheckin, repeatTime] = yield call(calculateNextCheckin, frequency)
  const id = yield call(
    NotificationService.scheduleNotification,
    message,
    'Lifevision',
    nextCheckin,
    `${step}`,
    repeatTime
  )
  yield put(updateCheckin({ step, checkin: { frequency, nextCheckin, id } }))
}

function* clearNotifications() {
  yield call(NotificationService.cancelAll)
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

function* watchForNotificationHelpers() {
  yield takeLatest(CANCEL_ALL_NOTIFICATIONS, clearNotifications)
}

export function* watchForCheckinsSaga() {
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForNotificationHelpers)
  yield fork(watchForInitialNotifications)
}
