// @flow
import moment from 'moment'
import uuid from 'uuid/v4'
import {
  SUBMIT_AWARD_VALUE,
  RESET_AWARD_VALUE,
  INCREMENT_TOOL_DATA_QUEUE,
  DECREMENT_TOOL_DATA_QUEUE,
  RESTORE_TOOL_DATA,
  CLEAR_TOOL_DATA,
  LOGOUT,
} from '../actionTypes'
import type {
  SumbitAwardValueAction,
  RestoreFormDataPayload,
  ClearToolDataPayload,
} from '../actions/award.actions'

/**
 * Types
 */

export type AwardData = {
  [toolKey: string]: {
    value: any,
    model: any,
    timeStamp: string,
    id: string,
  },
}

/**
 * Each key in the award state will be the corresponding stepId
 */
export type AwardState = {
  data: AwardData,
  requestCount: number,
}

/**
 * Setting up initial state
 */
const initialAwardDataState = {}

const initialState: AwardState = {
  data: initialAwardDataState,
  requestCount: 0,
}

const populate = (
  action: SumbitAwardValueAction,
  state: AwardState
): AwardState => {
  const { element: { key, value, tool } } = action.payload
  const data = state.data || {}
  const keyData = data[key] || {}
  return {
    ...state,
    data: {
      ...data,
      [key]: {
        ...keyData,
        value,
        tool: keyData.tool ? keyData.tool : tool || null,
        id: keyData.id || uuid(),
        timestamp: moment()
          .toDate()
          .getTime(),
      },
    },
  }
}

const restore = (
  { payload }: { payload: RestoreFormDataPayload },
  state: AwardState
) => {
  const { tools } = payload
  const { data } = state

  const newData = Object.keys(tools).reduce((tmpState, key) => {
    const toolData = tools[key]
    const toolInState = data[key] || {}
    return {
      ...tmpState,
      [key]: {
        ...toolData,
        ...toolInState,
      },
    }
  }, {})

  return {
    ...state,
    data: {
      ...newData,
      ...data,
    },
  }
}

const clear = (
  { payload }: { payload: ClearToolDataPayload },
  state: AwardState
) => {
  const { key } = payload
  const data = state.data || {}

  const newData = Object.keys(data)
    .filter(k => k !== key)
    .reduce((d, k) => {
      return {
        ...d,
        [k]: data[k],
      }
    }, {})
  return {
    ...state,
    data: newData,
  }
}

function toolDataReducer(
  state: AwardState = initialState,
  action: SumbitAwardValueAction
) {
  switch (action.type) {
  case SUBMIT_AWARD_VALUE:
    return populate(action, state)
  case RESET_AWARD_VALUE:
    return initialState
  case RESTORE_TOOL_DATA:
    return restore(action, state)
  case CLEAR_TOOL_DATA:
    return clear(action, state)
  case LOGOUT:
    return initialState
  case INCREMENT_TOOL_DATA_QUEUE:
    return {
      ...state,
      requestCount: state.requestCount + 1,
    }
  case DECREMENT_TOOL_DATA_QUEUE:
    return {
      ...state,
      requestCount: state.requestCount - 1,
    }
  default:
    return state
  }
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

export const v4_migration = state => {
  const { data } = state
  const stepNumbers = Array(30)
    .fill()
    .map((v, i) => `${i + 1}`)
  const newData = stepNumbers.reduce((replacementData, stepNum) => {
    const toolsForStepData = data[stepNum] || {}
    return {
      ...replacementData,
      ...toolsForStepData,
    }
  }, {})
  return {
    ...state,
    data: newData,
  }
}

const migrations = {
  0: state => state,
  1: state => state,
  2: () => initialState,
  3: () => initialState,
  4: v4_migration,
  5: state => ({
    ...state,
    requestCount: 0,
  }),
}

const persistConfig = {
  key: 'awards',
  storage: storage,
  blacklist: ['requestCount'],
  version: 4,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, toolDataReducer)
