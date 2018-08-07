// @flow
import R from 'ramda'
import { SUBMIT_AWARD_VALUE, RESET_AWARD_VALUE } from '../actionTypes'
import { SumbitAwardValueAction } from '../actions/award.actions'
import { diffObjs } from '../utils/diffObjs'
import initialModels from '../../static/awards'
/**
 * The upper level keys are the index of the 'formData' element in formData,
 * the inner level keys are the keys in SimpleModelData
 */
export type AwardData = {
  [formIndex: string]: {
    [key: string]: {
      type: any,
      value: any
    }
  }
}

type ModelElementType = 'label' | 'checkbox'

/**
 * The key inside fields refers to the column or element that has a checkbox
 */

export type Model = {
  type: ModelElementType,
  options?: {
    header?: string,
    label?: string
  }
}

export type SimpleModelData = {
  [key: string]: Model
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
    [key: string]: SimpleModelData
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

const invalidAction = obj =>
  !obj.stepId ||
  !obj.element ||
  !obj.element.key ||
  !obj.element.formIndex ||
  !obj.element.type ||
  obj.element.value === undefined 

const populate = (
  action: SumbitAwardValueAction,
  state: AwardState
): AwardState => {
  if (invalidAction(action.payload)) return state
  const { stepId, element: { key, value, formIndex, type } } = action.payload
  const data = state.data || {}

  return {
    ...state,
    data: {
      ...data,
      [stepId]: {
        ...(data[stepId] || null),
        [formIndex]: {
          ...(data[formIndex] || null),
          [key]: {
            type,
            value
          }
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
