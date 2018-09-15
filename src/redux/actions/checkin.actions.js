//@flow
import { CHANGE_CHECKIN, UPDATE_CHECKIN, BUILD_NOTIFICATION_SET, CANCEL_ALL_NOTIFICATIONS } from '../actionTypes'
import { CheckinElement }                                                                   from '../reducers/checkin.reducer'

export type CheckinActionPayload = {
  step: string,
  checkin: CheckinElement
}

type CheckinChangePayload = {
  step: number,
  frequency: string,
  message: string
}

type CheckinInitialNotifications = {
  steps: any
}

export const changeCheckin = (payload: CheckinChangePayload) => ({
  type: CHANGE_CHECKIN,
  payload
})

export const updateCheckin = (payload: CheckinActionPayload) => ({
  type: UPDATE_CHECKIN,
  payload
})

export const initialNotifications = (payload: CheckinInitialNotifications) => ({
  type: BUILD_NOTIFICATION_SET,
  payload
})

export const cancelNotifications = () => ({
  type: CANCEL_ALL_NOTIFICATIONS
})