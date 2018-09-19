//@flow
import { CHANGE_CHECKIN, UPDATE_CHECKIN, CANCEL_ALL_NOTIFICATIONS } from '../actionTypes'
import { CheckinActionPayload } from '../actions/checkin.actions'

export type CheckinElement = {
  frequency: string,
  lastCheckin: string,
  nextCheckin: string,
  id: string
}

type CheckinState = {
  checkins: {
    [x: string]: CheckinElement,
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

const checkinReducer = (
  state: CheckinState = initialState,
  action: CheckinAction
) => {
  switch (action.type) {
    case UPDATE_CHECKIN:
      return handleChange(state, action.payload)
    case CANCEL_ALL_NOTIFICATIONS: 
      return initialState
    default:
      return state
  }
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

const migrations = {
  0: state => state
}

const persistConfig = {
  key: 'checkins',
  storage: storage,
  blacklist: [],
  version: 1,
  migrate: createMigrate(migrations, { debug: true })
}

export default persistReducer(persistConfig, checkinReducer)
