// @flow
import moment          from 'moment'
import {
  SCHEDULED_NOTIFICATION,
  REMOVED_NOTIFICATION,
  CANCEL_ALL_NOTIFICATIONS,
}                      from '../actionTypes'
import { DATE_FORMAT } from '2020_constants/constants'
import type {
  ScheduleNotificationPayload,
  NotificationRemovedPayload,
}                      from '../actions/notifications.actions'

export type notificationData = {
  message: string,
  title: string,
  notificationTime: string,
  id: string,
  repeatTime: number,
  additionalProps: any,
}

export type Notification = {
  id: string,
  type: string,
  data: notificationData,
  creationDate: string,
  scheduledDate: string,
  timeStamp: number,
}

export type NotificationState = {
  notifications: Array<Notification>,
}

const initialState: NotificationState = {
  notifications: [],
}

const addNotification = (
  state: NotificationState,
  { payload }: { payload: ScheduleNotificationPayload }
) => {
  const { additionalProps, notificationTime, id } = payload
  const { type } = additionalProps
  return {
    ...state,
    notifications: [
      ...state.notifications,
      {
        id,
        type,
        creationDate: moment().format(DATE_FORMAT),
        timeStamp: Date.now(),
        scheduledDate: notificationTime,
        data: {
          ...payload,
        },
      },
    ],
  }
}

const removeNotification = (
  state: NotificationState,
  { payload }: { payload: NotificationRemovedPayload }
): NotificationState => {
  const { id } = payload
  return {
    ...state,
    notifications: state.notifications.filter(n => n.id !== id),
  }
}

function formDataReducer(state: NotificationState = initialState, action: any) {
  switch (action.type) {
  case SCHEDULED_NOTIFICATION:
    return addNotification(state, action)
  case REMOVED_NOTIFICATION:
    return removeNotification(state, action)
  case CANCEL_ALL_NOTIFICATIONS:
    return initialState
  default:
    return state
  }
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

const migrations = {
  0: state => state,
}

const persistConfig = {
  key: 'notifications',
  storage: storage,
  blacklist: [],
  version: 0,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, formDataReducer)
