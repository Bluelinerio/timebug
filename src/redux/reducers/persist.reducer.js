//@flow
import { STORE_LOADED } from '../actionTypes'

export type PersistAction = {
  type: STORE_LOADED
}

const LOADED = 'LOADED'
const NOT_LOADED = 'NOT_LOADED'

export type PersistState = {
  status: LOADED | NOT_LOADED
}

const initialState: PersistState = {
  status: NOT_LOADED
}

const handleChange = (state: PersistState) => {
  return {
    ...state,
    status: LOADED
  }
}

export default (state: PersistState = initialState, action: PersistAction) => {
  switch (action.type) {
    case STORE_LOADED:
      return handleChange(state, action.payload)
    default:
      return state
  }
}
