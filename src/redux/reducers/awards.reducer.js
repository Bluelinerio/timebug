// @flow
import { SUBMIT_AWARD_VALUE, RESET_AWARD_VALUE } from '../actionTypes'
import { SumbitAwardValueAction } from '../actions/award.actions'
import { diffObjs } from '../utils/diffObjs'
import R from 'ramda'

/**
 * Each key in this structure, will be the key inside the corresponding FormData
 */
export type AwardData = {
  [form: string]: [
    {
      type: any,
      key: string,
      content: [
        {
          value: any
        }
      ]
    }
  ]
}

/**
 * Types
 */
/**
 * Each key in the award state will be the corresponding stepId
 */
export type AwardState = {
  data: {
    [key: string]: AwardData
  }
}

/**
 * Setting up initial state
 */
const initialAwardDataState = {}

const initialState: AwardState = {
  data: initialAwardDataState
}

const filterWithKeys = (pred, obj) =>
  R.pipe(R.toPairs, R.filter(R.apply(pred)), R.fromPairs)(obj)

const populate = (
  action: SumbitAwardValueAction,
  state: AwardState
): AwardState => {
  const { key, value, type } = action.payload
  const data = state.data || {}

  // There is a property id in values that is constantly undefined, yet saved, triggering syncronizations
  const filteredValue = Object.keys(value)
    .filter(key => !(key === 'id' && value[key] === undefined))
    .map(key => value[key])

  // filter old value from timestamp, or anything else we might add...
  const oldValue = filterWithKeys(
    key => Object.keys(filteredValue).includes(key),
    R.view(R.lensPath([stepId, formId]), data)
  )

  const { difference, onlyOnRight } = diffObjs(oldValue, filteredValue)

  if (!difference && !onlyOnRight) return state

  return {
    ...state,
    data: {
      timeStamp: Date.now(),
      ...data,
      [stepId]: {
        ...(data[stepId] || null),
        timeStamp: Date.now(),
        [formId]: {
          timeStamp: Date.now(),
          ...filteredValue,
          type
        }
      }
    }
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

const mapDataWithStepIndicesToDataWithStepIds = state => {
  if (!state.data || Object.keys(state.data).length === 0) {
    return initialAwardDataState
  }

  const { data } = state
  return Object.keys(data).reduce(
    (sum, stepIndex) => ({
      ...sum,
      [(stepIndex + 1).toString()]: data[stepIndex]
    }),
    {}
  )
}

const migrations = {
  0: state => ({
    ...state,
    data: mapDataWithStepIndicesToDataWithStepIds(state.data)
  }),
  1: state => state
}

const persistConfig = {
  key: 'awardData',
  storage: storage,
  blacklist: [],
  version: 1,
  migrate: createMigrate(migrations, { debug: true })
}

export default persistReducer(persistConfig, formDataReducer)
