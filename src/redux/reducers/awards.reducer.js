// @flow
import { SUBMIT_AWARD_VALUE, RESET_AWARD_VALUE } from '../actionTypes'
import type { SumbitAwardValueAction }           from '../actions/award.actions'
import moment                                    from 'moment'
import uuid                                      from 'uuid/v4'

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
  const { stepId, element: { key, value, tool } } = action.payload
  const data = state.data || {}
  const stepData = data[stepId] || {}
  const keyData = stepData[key] || {}
  return {
    ...state,
    data: {
      ...data,
      [stepId]: {
        ...stepData,
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
    },
  }
}

function formDataReducer(
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

const migrations = {
  0: state => state,
  1: state => state,
  2: () => initialState,
  3: () => initialState,
}

const persistConfig = {
  key: 'awards',
  storage: storage,
  blacklist: [],
  version: 3,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, formDataReducer)
