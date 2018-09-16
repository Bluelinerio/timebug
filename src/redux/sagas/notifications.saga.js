import { takeLatest, fork, call, select, put } from 'redux-saga/effects'
import selectors                               from '../selectors'
import moment                                  from 'moment'
import {
  CANCEL_ALL_NOTIFICATIONS,
  ON_NOTIFICATION,
  CREATE_NOTIFICATION,
  UPDATE_NOTIFICATION
}                                              from '../actionTypes'
import NotificationService                     from '../../services/notifications'
import { calculateNextCheckin }                from '../../services/checkins'
import { updateCheckin }                       from '../actions/checkin.actions'

function* clearNotifications() {
  yield call(NotificationService.cancelAll)
}

function* scheduleNotification({ payload }) {
  const { message, nextCheckin, id, repeatTime } = payload
  yield call(
    NotificationService.scheduleNotification,
    message,
    'Lifevision',
    nextCheckin,
    `${id}`,
    repeatTime
  )
}

function* onNotification({ payload }) {
  const { id } = payload
  const checkins = yield select(selectors.getCheckins)
  const checkin = checkins[`${id}`]
  const { frequency } = checkin
  const lastCheckin = moment()
  const [nextCheckin, _] = yield call(calculateNextCheckin, frequency)
  yield put(updateCheckin({ step: id, checkin: { lastCheckin, nextCheckin } }))
}

function* watchForNotificationHelpers() {
  yield takeLatest(CANCEL_ALL_NOTIFICATIONS, clearNotifications)
  yield takeLatest(ON_NOTIFICATION, onNotification)
  yield takeLatest(
    [CREATE_NOTIFICATION, UPDATE_NOTIFICATION],
    scheduleNotification
  )
}

export function* watchForNotificationSaga() {
  yield fork(watchForNotificationHelpers)
}
