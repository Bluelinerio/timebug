//@flow
import { CHANGE_CHECKIN } from '../actionTypes'
import { CheckinActionPayload } from '../actions/checkin.actions'

type CheckinElement = {
    frequency: string
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
    const { step, frequency } = payload
    return {
        ...state,
        [step]: {
            frequency
        }
    }
}

export default (state: CheckinState = initialState, action: CheckinAction) => {
  switch (action.type) {
    case CHANGE_CHECKIN:
      return handleChange(state, action.payload)
    default:
      return state
  }
}
