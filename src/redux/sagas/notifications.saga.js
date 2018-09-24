// @flow
import {
  takeLatest,
  fork,
  call,
  select,
  put,
  actionChannel,
  take
}                               from 'redux-saga/effects'
import { delay }                from 'redux-saga'
import selectors                from '../selectors'
import moment                   from 'moment'
import {
  CANCEL_ALL_NOTIFICATIONS,
  ON_NOTIFICATION,
  CREATE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  STORE_LOADED
}                               from '../actionTypes'
import NotificationService      from '../../services/notifications'
import { calculateNextCheckin } from '../../services/checkins'
import { updateCheckin }        from '../actions/checkin.actions'
import { linkNavigation }       from '../actions/nav.actions'
import type {
  CreateNotificationPayload,
  OnNotificationPayload,
  RemoveNotificationPayload
}                               from '../actions/notification.actions'

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
  const hasStoreLoaded = yield select(selectors.hasStoreLoaded)
  if (!hasStoreLoaded) yield take(STORE_LOADED)
  const checkins = yield select(selectors.getCheckins)
  const checkin = checkins[`${id}`]
  const { frequency, action } = checkin
  const lastCheckin = moment()
  const [nextCheckin, _] = yield call(calculateNextCheckin, frequency)
  yield put(updateCheckin({ step: id, checkin: { lastCheckin, nextCheckin } }))
  yield delay(1)
  if (action.type === 'link')
    yield put(linkNavigation({ link: action.payload.link }))
}

function* removeNotification({
  payload
}: {
  payload: RemoveNotificationPayload
}) {
  const { step } = payload
  yield call(NotificationService.cancelNotification, `${step}`)
}

function* watchForNotificationScheduling() {
  const channel = yield actionChannel([
    CREATE_NOTIFICATION,
    UPDATE_NOTIFICATION
  ])
  while (true) {
    const action: { payload: CreateNotificationPayload } = yield take(channel)
    yield call(scheduleNotification, action)
  }
}

function* watchForNotificationDeletion() {
  const channel = yield actionChannel(REMOVE_NOTIFICATION)
  while (true) {
    const action: { payload: RemoveNotificationPayload } = yield take(channel)
    yield call(removeNotification, action)
  }
}

function* watchForNotificationHelpers() {
  yield takeLatest(CANCEL_ALL_NOTIFICATIONS, clearNotifications)
  yield takeLatest(ON_NOTIFICATION, onNotification)
  yield fork(watchForNotificationDeletion)
  yield fork(watchForNotificationScheduling)
}

export function* watchForNotificationSaga() {
  yield fork(watchForNotificationHelpers)
}
