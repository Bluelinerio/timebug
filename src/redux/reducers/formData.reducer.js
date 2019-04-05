// @flow
import {
  SUBMIT_FORM_VALUE,
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE,
  RESET_FORMS,
  SET_LOADING_FORMDATA,
  RESTORE_FORM_DATA,
} from '../actionTypes'
import type { RestoreFormDataPayload } from '../actions/formData.actions'
import { diffObjs } from '../utils/diffObjs'

export type FormDataState = {
  data: {
    [key: string]: any,
  },
  requestCount: number,
  loadingFormData: boolean,
}

type PopulateFormAction = {
  type: SUBMIT_FORM_VALUE,
  payload: {
    stepId: string,
    value: any,
  },
}

type FormAction = PopulateFormAction

const initialState: FormDataState = {
  data: {},
  requestCount: 0,
  loadingFormData: false,
}

const populate = (
  action: PopulateFormAction,
  state: FormDataState
): FormDataState => {
  const { stepId, value } = action.payload
  const data = state.data || {}

  const oldValue = data[stepId] ? data[stepId].value : {}

  const { difference, onlyOnRight, onlyOnLeft } = diffObjs(oldValue, value)

  if (!difference && !onlyOnRight && !onlyOnLeft) return state

  return {
    ...state,
    data: {
      ...data,
      _meta: {
        timeStamp: Date.now(),
      },
      [stepId]: {
        ...(data[stepId] || null),
        value,
        timeStamp: Date.now(),
      },
    },
  }
}

const increment = (state: FormDataState): FormDataState => ({
  ...state,
  requestCount: state.requestCount + 1,
})

const decrement = (state: FormDataState): FormDataState => ({
  ...state,
  requestCount: state.requestCount - 1,
})

const restore = (state: FormDataState, payload: RestoreFormDataPayload) => {
  const { forms } = payload
  const { data } = state

  const newData = Object.keys(forms).reduce((tmpState, key) => {
    const form = forms[key]
    const formInState = data[key] || {}
    return {
      ...tmpState,
      [key]: {
        ...form,
        ...formInState,
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

const setLoadingFormData = (
  state: FormDataState,
  payload: boolean
): FormDataState => ({
  ...state,
  loadingFormData: payload !== false,
})

function formDataReducer(
  state: FormDataState = initialState,
  action: FormAction
) {
  switch (action.type) {
  case SUBMIT_FORM_VALUE:
    return populate(action, state)
  case INCREMENT_FORM_DATA_QUEUE:
    return increment(state)
  case DECREMENT_FORM_DATA_QUEUE:
    return decrement(state)
  case RESET_FORMS:
    return initialState
  case RESTORE_FORM_DATA:
    return restore(state, action.payload)
  case SET_LOADING_FORMDATA:
    return setLoadingFormData(state, action.payload)
  default:
    return state
  }
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

const migrations = {
  0: state => state,
  1: state => state,
  2: state => ({
    ...state,
    data: {},
  }),
  3: state => {
    const filterKeysExceptSteps = (obj: any) => {
      const keys = Array(30)
        .fill()
        .map((num, index) => index + 1)
      return Object.keys(obj)
        .filter(key => keys.find(k => k === key))
        .reduce((newObject, key) => {
          const o = obj[key]
          return {
            ...newObject,
            [key]: {
              ...o,
            },
          }
        }, {})
    }
    const stepData = filterKeysExceptSteps(state.data)
    const fixedStepData = Object.keys(stepData).reduce((newObject, key) => {
      const stepData = stepData[key]
      const { value } = stepData
      const newValue = value.map(val => ({
        ...val,
        _meta: {
          ...(val._meta || {}),
          version: 1,
        },
      }))
      return {
        ...newObject,
        [key]: {
          ...stepData,
          value: newValue,
        },
      }
    })
    return {
      ...state,
      data: {
        ...state.data,
        ...fixedStepData,
      },
    }
  },
}

const persistConfig = {
  key: 'formData',
  storage: storage,
  blacklist: ['requestCount', 'loadingFormData'],
  version: 3,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, formDataReducer)
