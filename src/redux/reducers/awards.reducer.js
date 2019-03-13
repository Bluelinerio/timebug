// @flow
import moment                                    from 'moment'
import uuid                                      from 'uuid/v4'
import { SUBMIT_AWARD_VALUE, RESET_AWARD_VALUE } from '../actionTypes'
import type { SumbitAwardValueAction }           from '../actions/award.actions'

/**
 * Types
 */

export type AwardData = {
  [toolKey: string]: {
    value: any,
    model: any,
    timeStamp: any,
  },
}

/**
 * Each key in the award state will be the corresponding stepId
 */
export type AwardState = {
  data: {
    [key: string]: AwardData,
  },
}

/**
 * Setting up initial state
 */
const initialAwardDataState = {}

const initialState: AwardState = {
  data: initialAwardDataState,
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

function toolDataReducer(
  state: AwardState = initialState,
  action: SumbitAwardValueAction
) {
  switch (action.type) {
  case SUBMIT_AWARD_VALUE:
    return populate(action, state)
  case RESET_AWARD_VALUE:
    return initialState
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
}

const persistConfig = {
  key: 'awards',
  storage: storage,
  blacklist: [],
  version: 4,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, toolDataReducer)
