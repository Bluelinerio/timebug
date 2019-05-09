//@flow
import {
  CHANGE_CHECKIN,
  UPDATE_CHECKIN,
  BUILD_NOTIFICATION_SET,
  REMOVE_CHECKIN,
  DELETE_CHECKIN,
  TOGGLE_CHECKIN,
  EDIT_CHECKIN,
  CHECKIN_NOTIFICATION,
  UPDATE_OR_CREATE_CHECKIN,
}                              from '../actionTypes'
import type { CheckinElement } from '../reducers/checkin.reducer'

export type CheckinActionPayload = {
  step: string,
  checkin: CheckinElement,
}

export type CheckinChangePayload = {
  step: number,
  frequency: string,
  message: string,
  toolKey: string,
  revisionId: number,
  action: any,
}

export type DeleteCheckinPayload = {
  step: string,
}

export type ToggleCheckinPayload = {
  step: string,
  checkin?: CheckinChangePayload,
}

export type CheckinNotificationPayload = {
  step: string,
  toolKey: string,
  action: string,
  frequency: string,
}

type Notification = {
  message: string,
  title: string,
  notificationTime: string,
  id: string,
  repeatTime: number,
  additionalProps: any,
}

export type EditCheckinPayload = {
  checkin: EditCheckinPayload,
  notification?: Notification,
  number: number,
}
export type NotificationUpdateOrCreatePayload = CheckinChangePayload

export const changeCheckin = (payload: CheckinChangePayload) => ({
  type: CHANGE_CHECKIN,
  payload,
})

export const updateCheckin = (payload: CheckinActionPayload) => ({
  type: UPDATE_CHECKIN,
  payload,
})

export const initialNotifications = () => ({
  type: BUILD_NOTIFICATION_SET,
})

export const removeCheckin = (payload: DeleteCheckinPayload) => ({
  type: REMOVE_CHECKIN,
  payload,
})

export const deleteCheckin = (payload: DeleteCheckinPayload) => ({
  type: DELETE_CHECKIN,
  payload,
})

export const toggleCheckin = (payload: ToggleCheckinPayload) => ({
  type: TOGGLE_CHECKIN,
  payload,
})
export const editCheckin = (payload: EditCheckinPayload) => ({
  type: EDIT_CHECKIN,
  payload,
})

export const checkinNotification = (payload: CheckinNotificationPayload) => ({
  type: CHECKIN_NOTIFICATION,
  payload,
})

export const updateOrCreateCheckin = (
  payload: NotificationUpdateOrCreatePayload
) => ({
  type: UPDATE_OR_CREATE_CHECKIN,
  payload,
})
