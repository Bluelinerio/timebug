// @flow
import { 
  SUBMIT_FORM_VALUE,
  PERSISTE_FORM_VALUE,
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
        ...value
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

export default function (state: FormDataState = initialState, action: FormAction) {
  switch (action.type) {
    case SUBMIT_FORM_VALUE:
      return populate(action, state);
    case INCREMENT_FORM_DATA_QUEUE:
      return increment(state)
    case DECREMENT_FORM_DATA_QUEUE:
      return increment(state)
    default:
      return state;
  }
}
