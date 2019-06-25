// @flow
import {
  takeLatest,
  fork,
  call,
  select,
  actionChannel,
  take,
  put,
} from 'redux-saga/effects'
import selectors from '../selectors'
import {
  CANCEL_ALL_NOTIFICATIONS,
  ON_NOTIFICATION,
  CREATE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  STORE_LOADED,
  TRIGGER_NOTIFICATION,
  LOGOUT,
} from '../actionTypes'
import NotificationService, {
  notificationTypes,
} from '../../services/notifications'
import {
  notificationScheduled,
  notificationRemoved,
  removeNotification as removeNotificationAction,
} from '../actions/notifications.actions'
import type {
  CreateNotificationPayload,
  OnNotificationPayload,
  RemoveNotificationPayload,
} from '../actions/notifications.actions'
import { checkinNotification } from '../actions/checkin.actions'
import { goalNotification } from '../actions/goals.actions'

function* clearNotifications() {
  yield call(NotificationService.cancelAll)
}

function* scheduleNotification({
  payload,
}: {
  payload: CreateNotificationPayload,
}) {
  const {
    message,
    notificationTime,
    id: actualId,
    repeatTime,
    additionalProps,
  } = payload
  const title = 'Lifevision'
  const id = `${actualId}`
  yield call(
    NotificationService.scheduleNotification,
    message,
    title,
    notificationTime,
    id,
    repeatTime,
    additionalProps
  )
  yield put(
    notificationScheduled({
      message,
      notificationTime,
      id,
      repeatTime,
      additionalProps,
      title,
    })
  )
}

function* triggerNotification({ payload }: any) {
  const { notificationId } = payload
  const notifications = yield select(selectors.notifications)
  const notification = notifications.find(n => n.id === notificationId)
  const { data } = notification
  const { message, additionalProps } = data
  const title = 'Lifevision'
  yield call(
    NotificationService.showNotification,
    message,
    title,
    additionalProps
  )
}

function* onNotification({ payload }: { payload: OnNotificationPayload }) {
  const { type, data } = payload
  const hasStoreLoaded = yield select(selectors.hasStoreLoaded)
  if (!hasStoreLoaded) yield take(STORE_LOADED)
  switch (type) {
  case notificationTypes.CHECKIN_NOTIFICATION:
    yield put(checkinNotification(data))
    break
  case notificationTypes.GOAL_NOTIFICATION:
    yield put(goalNotification(data))
    break
  default:
    break
  }
}

function* removeNotification({
  payload,
}: {
  payload: RemoveNotificationPayload,
}) {
  const { id: actualId } = payload
  const id = `${actualId}`
  yield call(NotificationService.cancelNotification, id)
  yield put(notificationRemoved({ id }))
}

function* watchForNotificationScheduling() {
  const channel = yield actionChannel([
    CREATE_NOTIFICATION,
    UPDATE_NOTIFICATION,
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
    yield fork(removeNotification, action)
  }
}

function* _handleLogout() {
  try{
    const notifications = yield select(selectors.notifications)
    for(const notification of notifications) {
      const { id } = notification
      yield put(removeNotificationAction({ id }))
    }
  } catch(err) {
    // fail silently
  }
}
function* watchForLogout() {
  yield takeLatest(LOGOUT, _handleLogout)
}

function* watchForNotificationHelpers() {
  yield takeLatest(CANCEL_ALL_NOTIFICATIONS, clearNotifications)
  yield takeLatest(ON_NOTIFICATION, onNotification)
  yield takeLatest(TRIGGER_NOTIFICATION, triggerNotification)
  yield fork(watchForLogout)
  yield fork(watchForNotificationDeletion)
  yield fork(watchForNotificationScheduling)
}

export function* watchForNotificationSaga() {
  yield fork(watchForNotificationHelpers)
}
