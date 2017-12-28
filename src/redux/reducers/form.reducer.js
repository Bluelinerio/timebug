// @flow
import { POPULATE_FORM_VALUE, SET_FORM, UPDATE_FORM } from '../actionTypes';
import type { Progress } from '../../services/apollo/models';

type FormState = {
  model?: any,
  data?: {
    [key: string]: any
  }
}

type PopulateFormValueAction = {
  type: POPULATE_FORM_VALUE.type,
  progress: Progress,
  value: any
}

type SetFormAction = {
  type: SET_FORM,
  model: any
}

type FormAction = PopulateFormValueAction | SetFormAction;

const initialState: FormState = {
  model: null,
  data: {},
};

const populate = (action: PopulateFormValueAction, state:FormState):FormState => {
  const { progress, value } = action
  const { step, form } = action.progress
  const data = state.data || {}
  return {
    ...state,
    data: {
      ...data,
      [ step ]: {
        ...data[ step ],
        [ form ]: value
      }
    }
  }
}
const setForm = (action: SetFormAction, state: FormState):FormState => ({...state, model:action.model})
const updateForm = (action: SetFormAction, state: FormState):FormState => ({...state, model: {...state.model, ...action.model }})

export default function (state: FormState = initialState, action: FormAction) {
  switch (action.type) {
    case POPULATE_FORM_VALUE:
      return populate(action, state);
    case SET_FORM:
      return setForm(action, state);
    case UPDATE_FORM:
      return updateForm(action, state);
    default:
      return state;
  }
}
