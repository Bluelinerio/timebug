// @flow
import R                                         from 'ramda'
import { SUBMIT_AWARD_VALUE, RESET_AWARD_VALUE } from '../actionTypes'
import { SumbitAwardValueAction }                from '../actions/award.actions'
import { diffObjs }                              from '../utils/diffObjs'
import initialModels                             from '../../static/awards'

/**
 * The upper level keys are the index of the 'formData' element in formData,
 * the inner level keys are the keys in SimpleModelData
 */
export type AwardData = {
  [key: string]: {
    [key: string]: {
      type: any,
      value: any
    }
  }
}

type ModelType = 'list'
type ModelElementType = 'label' | 'checkbox'

/**
 * The key inside fields refers to the column or element that has a checkbox
 */

export type ModelsData = {
  type: ModelType,
  fields: {
    [key: string]: {
      type: ModelElementType,
      form: string,
      key: string,
      options?: {
        header?: string,
        label?: string
      }
    }
  }
}

export type SimpleModelData = {
  [key: string]: {
    type: ModelElementType,
    options?: {
      header?: string,
      label?: string
    }
  }
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
  },
  models: {
    [key: string]: ModelsData
  }
}

export type AwardModelsData = {}

/**
 * Setting up initial state
 */
const initialAwardDataState = {}

const initialModelsState = initialModels

const initialState: AwardState = {
  data: initialAwardDataState,
  models: initialModelsState
}

const filterWithKeys = (pred, obj) =>
  R.pipe(R.toPairs, R.filter(R.apply(pred)), R.fromPairs)(obj)

const populate = (
  action: SumbitAwardValueAction,
  state: AwardState
): AwardState => {
  const { stepId, element: { key, value, type } } = action.payload
  const data = state.data || {}

  // There is a property id in values that is constantly undefined, yet saved, triggering syncronizations
  const filteredValue = Object.keys(value)
    .filter(key => !(key === 'id' && value[key] === undefined))
    .map(key => value[key])

  // filter old value from timestamp, or anything else we might add...
  const oldValue = filterWithKeys(
    key => Object.keys(filteredValue).includes(key),
    R.view(R.lensPath([stepId, key]), data)
  )

  const { difference, onlyOnRight } = diffObjs(oldValue, filteredValue)

  if (!difference && !onlyOnRight) return state

  return {
    ...state,
    data: {
      ...data,
      [stepId]: {
        ...(data[stepId] || null),
        [key]: {
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
    data: mapDataWithStepIndicesToDataWithStepIds(state.data),
    models: initialModels
  }),
  1: state => state
}

const persistConfig = {
  key: 'awards',
  storage: storage,
  blacklist: [],
  version: 1,
  migrate: createMigrate(migrations, { debug: true })
}

export default persistReducer(persistConfig, formDataReducer)
