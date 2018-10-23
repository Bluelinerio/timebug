// @flow
import {
  SUBMIT_AWARD_VALUE,
  RESET_AWARD_VALUE,
  SUBMIT_AWARD_VALUE_EXTENDED
}                    from '../actionTypes'
import type {
  SumbitAwardValueAction,
  ExtendedSubmitAwardAnswerAction
}                    from '../actions/award.actions'
import initialModels from '../../static/awards'
import moment        from 'moment'
import uuid          from 'uuid/v4'

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

/**
 * In this iteration, the keys are the top level keys as defined in the static form
 * To handle lists, a special struct LIST will be issued
 * This struct will contain a special definition of a struct to render
 */
export type ExtendedAwardData = {
  [awardKey: string]: {
    extended: true,
    [fieldKey: string]: {
      value: any | Array<any>,
      type: any,
      key: string,
      timestamp?: number,
      meta: any
    }
  }
}

type ModelElementType = 'label' | 'checkbox'

export type Model = {
  type: ModelElementType,
  fields?: {
    [x: string]: Model
  },
  key?: string,
  column?: boolean,
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
    [key: string]: AwardData | ExtendedAwardData
  },
  models: {
    [key: string]: SimpleModelData
  }
}

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
          ...((data[stepId] && data[stepId][formIndex]) || null),
          [key]: {
            type,
            value
          }
        }
      }
    }
  }
}

const extendedPopulate = (
  action: ExtendedSubmitAwardAnswerAction,
  state: AwardState
): AwardState => {
  const {
    stepId,
    element: { awardKey, value, fieldKey, type, meta }
  } = action.payload
  const data = state.data || {}
  const stepData = data[stepId] || {}
  const awardData = stepData[awardKey] || {}
  const fieldData = awardData[fieldKey] || {}
  return {
    ...state,
    data: {
      ...data,
      [stepId]: {
        ...stepData,
        [awardKey]: {
          ...awardData,
          [fieldKey]: {
            id: fieldData.id || uuid(),
            type,
            value,
            meta,
            timestamp: moment()
              .toDate()
              .getTime()
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
  case SUBMIT_AWARD_VALUE_EXTENDED:
    return extendedPopulate(action, state)
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
