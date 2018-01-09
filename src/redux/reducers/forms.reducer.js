// @flow
import { 
  SET_FORM, 
  UPDATE_FORM,
  DECREMENT_FORM_QUEUE,
  INCREMENT_FORM_QUEUE
} 
  from '../actionTypes';
import type { Progress } from '../../services/apollo/models';

export type FormModelsState = {
  models: {
    [key: string]: any
  },
  enQueued: number
}

type SetFormAction = {
  type: SET_FORM,
  models: {
    [key: string]: any
  }
}

type FormAction = SetFormAction;

const initialState: FormModelsState = {
  models: {},
  enQueued: 0
};

const setForm = (action: SetFormAction, state: FormModelsState): FormModelsState => ({...state, models: action.models})
const updateForm = (action: SetFormAction, state: FormModelsState): FormModelsState => ({...state, models: {...state.models, ...action.models }})

const increment = (state:FormModelsState):FormModelsState => ({
  ...state,
  enQueued: state.enQueued + 1
})

const decrement = (state:FormModelsState):FormModelsState => ({
  ...state,
  enQueued: state.enQueued - 1
})

export default function (state: FormModelsState = initialState, action: FormAction) {
  switch (action.type) {
    //case SET_FORM:
    //disabled for now:
    //return setForm(action, state);
    // case UPDATE_FORM:
    //   debugger;
    //   return updateForm(action, state);
    case INCREMENT_FORM_QUEUE:
      return increment(state)
    case DECREMENT_FORM_QUEUE:
      return increment(state)
    default:
      return state;
  }
}