// @flow
import {
  CANCEL_ALL_NOTIFICATIONS,
  ON_NOTIFICATION,
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../actionTypes'

type OnNotificationPayload = {
  step: number,
}

type CreateNotificationPayload = {
  message: string,
  nextCheckin: string,
  id: string,
  repeatTime: number,
  additionalProps: any,
}

type RemoveNotificationPayload = {
  checkin: {
    id: string,
  },
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
