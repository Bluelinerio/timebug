// @flow
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
import { linkNavigation }                      from '../actions/nav.actions'
import type {
  CreateNotificationPayload,
  OnNotificationPayload
}                                              from '../actions/notification.actions'

function* clearNotifications() {
  yield call(NotificationService.cancelAll)
}

function* scheduleNotification({
  payload
}: {
  payload: CreateNotificationPayload
}) {
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

function* onNotification({ payload }: { payload: OnNotificationPayload }) {
  const { id } = payload
  const checkins = yield select(selectors.getCheckins)
  const steps = yield select(selectors.steps)
  const checkin = checkins[`${id}`]
  const step = steps[id]
  const { frequency } = checkin
  const { checkin: { action } } = step
  const lastCheckin = moment()
  const [nextCheckin, _] = yield call(calculateNextCheckin, frequency)
  yield put(updateCheckin({ step: id, checkin: { lastCheckin, nextCheckin } }))
  // TODO: add some delay before the transition
  if (action.type === 'link')
    yield put(linkNavigation({ link: action.payload.link }))
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
