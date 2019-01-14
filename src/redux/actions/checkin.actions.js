//@flow
import {
  CHANGE_CHECKIN,
  UPDATE_CHECKIN,
  BUILD_NOTIFICATION_SET,
  REMOVE_CHECKIN,
  DELETE_CHECKIN,
  TOGGLE_CHECKIN,
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
}

export type DeleteCheckinPayload = {
  step: string,
}

export type ToggleCheckinPayload = {
  step: string,
  checkin?: CheckinChangePayload,
}

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
