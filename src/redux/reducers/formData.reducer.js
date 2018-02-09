// @flow
import { 
  SUBMIT_FORM_VALUE,
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE,
} 
  from '../actionTypes';
import type { Progress } from '../../services/apollo/models';

export type FormDataState = {
  data: {
    [key: string]: any
  },
  requestCount: number
}

type PopulateFormAction = {
  type: SUBMIT_FORM_VALUE.type,
  payload: {
    progress: Progress,
    value: any,
  }
}

type FormAction = PopulateFormAction;

const initialState: FormDataState = {
  data: {},
  requestCount: 0
};

const populate = (action: PopulateFormAction, state:FormDataState):FormDataState => {
  const { progress: { step, form}, value } = action.payload
  const data = state.data || {}
  return {
    ...state,
    data: {
      ...data,
      [ step ]: {
        ...(data[ step ] || null),
        [ form ] : {
          ...value
        }
      }
    }
  }
}

const increment = (state:FormDataState):FormDataState => ({
  ...state,
  requestCount: state.requestCount + 1
})

const decrement = (state:FormDataState):FormDataState => ({
  ...state,
  requestCount: state.requestCount - 1
})

function formDataReducer(state: FormDataState = initialState, action: FormAction) {
  switch (action.type) {
    case SUBMIT_FORM_VALUE:
      return populate(action, state);
    case INCREMENT_FORM_DATA_QUEUE:
      return increment(state)
    case DECREMENT_FORM_DATA_QUEUE:
      return decrement(state)
    default:
      return state;
  }
}

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key:'formData',
	storage: storage,
  blacklist: ['requestCount'],
};

export default persistReducer(persistConfig, formDataReducer);
