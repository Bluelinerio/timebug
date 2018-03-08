// @flow
import {
  SUBMIT_FORM_VALUE,
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE
} from '../actionTypes';

export type FormDataState = {
  data: {
    [key: string]: any
  },
  requestCount: number
};

type PopulateFormAction = {
  type: SUBMIT_FORM_VALUE.type,
  payload: {
    stepId: string,
    formId: string,
    value: any
  }
};

type FormAction = PopulateFormAction;

const initialSDataState = {};
const initialState: FormDataState = {
  data: initialSDataState,
  requestCount: 0
};

const populate = (
  action: PopulateFormAction,
  state: FormDataState
): FormDataState => {
  const { stepId, formId, value } = action.payload;
  const data = state.data || {};
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
          ...value
        }
      }
    }
  };
};

const increment = (state: FormDataState): FormDataState => ({
  ...state,
  requestCount: state.requestCount + 1
});

const decrement = (state: FormDataState): FormDataState => ({
  ...state,
  requestCount: state.requestCount - 1
});

function formDataReducer(
  state: FormDataState = initialState,
  action: FormAction
) {
  switch (action.type) {
    case SUBMIT_FORM_VALUE:
      return populate(action, state);
    case INCREMENT_FORM_DATA_QUEUE:
      return increment(state);
    case DECREMENT_FORM_DATA_QUEUE:
      return decrement(state);
    default:
      return state;
  }
}

import storage from 'redux-persist/lib/storage';
import { persistReducer, createMigrate } from 'redux-persist';

const mapDataWithStepIndicesToDataWithStepIds = state => {
  if (!state.data || Object.keys(state.data).length === 0) {
    return initialSDataState;
  }

  const data = state.data;
  return Object.keys(data).reduce(
    (sum, stepIndex) => ({
      ...sum,
      [(stepIndex + 1).toString()]: data[stepIndex]
    }),
    {}
  );
};

const migrations = {
  0: state => ({
    ...state,
    data: mapDataWithStepIndicesToDataWithStepIds(state.data)
  }),
  1: state => state
};

const persistConfig = {
  key: 'formData',
  storage: storage,
  blacklist: ['requestCount'],
  version: 1,
  migrate: createMigrate(migrations, { debug: true })
};

export default persistReducer(persistConfig, formDataReducer);
