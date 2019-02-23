// @flow
import {
  CANCEL_ALL_NOTIFICATIONS,
  ON_NOTIFICATION,
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SCHEDULED_NOTIFICATION,
  REMOVED_NOTIFICATION,
} from '../actionTypes'

type OnNotificationPayload = {
  type: string,
  data: any,
}

type CreateNotificationPayload = {
  message: string,
  notificationTime: string,
  id: string,
  repeatTime: number,
  additionalProps: any,
}

type RemoveNotificationPayload = {
  id: string,
}

type ScheduleNotificationPayload = {
  message: string,
  title: string,
  notificationTime: string,
  id: string,
  repeatTime: number,
  additionalProps: any,
}

type NotificationRemovedPayload = {
  id: string,
}

export const cancelNotifications = () => ({
  type: CANCEL_ALL_NOTIFICATIONS,
})

export const notificationReceived = (payload: OnNotificationPayload) => ({
  type: ON_NOTIFICATION,
  payload,
})

export const createNotification = (payload: CreateNotificationPayload) => ({
  type: CREATE_NOTIFICATION,
  payload,
})

export const removeNotification = (payload: RemoveNotificationPayload) => ({
  type: REMOVE_NOTIFICATION,
  payload,
})

export const notificationScheduled = (payload: ScheduleNotificationPayload) => ({
  type: SCHEDULED_NOTIFICATION,
  payload,
})

export const notificationRemoved = (payload: NotificationRemovedPayload) => ({
  type: REMOVED_NOTIFICATION,
  payload,
})