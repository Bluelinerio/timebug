//@flow
import { CHANGE_CHECKIN, UPDATE_CHECKIN } from '../actionTypes'
import { CheckinActionPayload }           from '../actions/checkin.actions'

export type CheckinElement = {
  frequency: string,
  lastCheckin: string,
  nextCheckin: string,
  id: string
}

type CheckinState = {
  checkins: {
    [x: string]: CheckinElement
  }
}

type CheckinAction = {
  type: CHANGE_CHECKIN,
  payload: CheckinActionPayload
}

const initialState: CheckinState = {
  checkins: {}
}

const handleChange = (state: CheckinState, payload: CheckinActionPayload) => {
  const { step, checkin } = payload
  return {
    ...state,
    checkins: {
      ...state.checkins,
      [step]: {
        ...state.checkins[step],
        ...checkin
      }
    }
  }
}

export default (state: CheckinState = initialState, action: CheckinAction) => {
  switch (action.type) {
    case UPDATE_CHECKIN:
      return handleChange(state, action.payload)
    default:
      return state
  }
}
