//@flow
import {
  CHANGE_CHECKIN,
  UPDATE_CHECKIN,
  CANCEL_ALL_NOTIFICATIONS,
  DELETE_CHECKIN,
  LOGOUT,
} from '../actionTypes'
import {
  CheckinActionPayload,
  DeleteCheckinPayload,
} from '../actions/checkin.actions'

export type CheckinElement = {
  frequency: string,
  lastCheckin: string,
  nextCheckin: string,
  text: string,
  title: string,
  message: string,
  action: any,
  id: string,
  notificationSchedule: {
    default?: string, // Military hour HH:MM saying when to display the notification,
    enabled?: boolean // Switch to enable hour level scheduling of notifications
  },
  revisionId: number,
}

type CheckinState = {
  checkins: {
    [x: string]: CheckinElement,
  },
}

type CheckinAction = {
  type: CHANGE_CHECKIN,
  payload: CheckinActionPayload,
}

const initialState: CheckinState = {
  checkins: {},
}

const handleChange = (state: CheckinState, payload: CheckinActionPayload) => {
  const { step, checkin } = payload
  const checkinState = state.checkins || {}
  const checkinsForStep = checkinState[step] || {}
  const checkinForTool = checkinsForStep[checkin.toolKey] || {}
  return {
    ...state,
    checkins: {
      ...checkinState,
      [step]: {
        ...checkinsForStep,
        [checkin.toolKey]: {
          ...checkinForTool,
          ...checkin,
        },
      },
    },
  }
}

const handleDelete = (state: CheckinState, payload: DeleteCheckinPayload) => {
  const { step, tool } = payload
  const { checkins } = state
  const newCheckins = Object.keys(checkins).reduce((stateObj, key) => {
    if (`${key}` === `${step}`) {
      const checkinsForStep = checkins[key]
      const newCheckinsForStep = Object.keys(checkinsForStep).reduce(
        (stepCheckins, keyForTool) => {
          if (`${keyForTool}` === `${tool}`) return stepCheckins
          return {
            ...stepCheckins,
            [keyForTool]: checkins[key][keyForTool],
          }
        },
        {}
      )
      return {
        ...stateObj,
        [key]: newCheckinsForStep,
      }
    }
    return {
      ...stateObj,
      [key]: checkins[key],
    }
  }, {})
  return {
    ...state,
    checkins: newCheckins,
  }
}

const checkinReducer = (
  state: CheckinState = initialState,
  action: CheckinAction
) => {
  switch (action.type) {
  case UPDATE_CHECKIN:
    return handleChange(state, action.payload)
  case DELETE_CHECKIN:
    return handleDelete(state, action.payload)
  case CANCEL_ALL_NOTIFICATIONS:
    return initialState
  case LOGOUT:
    return initialState
  default:
    return state
  }
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

const migrations = {
  0: state => state,
  1: state => ({
    ...state,
    checkins: {},
  }),
  2: state => state,
  3: state => ({
    ...state,
    checkins: {},
  }),
  4: state => ({
    ...state,
    checkins: {},
  }),
}

const persistConfig = {
  key: 'checkins',
  storage: storage,
  blacklist: [],
  version: 4,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, checkinReducer)
