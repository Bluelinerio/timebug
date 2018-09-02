//@flow
import { CHANGE_CHECKIN } from '../actionTypes'

export type CheckinActionPayload = {
  step: string,
  frequency: string
}

export const changeCheckin = (payload: CheckinActionPayload) => ({
  type: CHANGE_CHECKIN,
  payload
})
