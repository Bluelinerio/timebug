// @flow
import { SET_NEXT_FORM } from '../constants/actionTypes';

interface FormState {
  model: any,
}

interface FormAction {
  type: string,
  model: null
}

const initialState: FormState = {
  model: null
};

export default function (state: FormState = initialState, action: FormAction) {
  switch (action.type) {
    case SET_NEXT_FORM:
      let { model } = action;
      return { ...state, model };
    default:
      return state;
  }
}