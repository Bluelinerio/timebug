// @flow
import { SET_NEXT_FORM } from '../constants/actionTypes';

interface FormState {
  model: any,
  data: {
    [key: string]: any
  }
}

interface FormAction {
  type: string,
  model: null,
  value: any,
  iaGoBack: boolean,
  currentStep: string,
  currentForm: number
}

const initialState: FormState = {
  model: null,
  data: {},
  currentStep: null,
  currentForm: null,
  isGoBack: false,
};

export default function (state: FormState = initialState, action: FormAction) {
  switch (action.type) {
    case SET_NEXT_FORM:
      let {
            model,
            isGoBack,
            value,
            currentStep,
            currentForm
          } = action;
      if (!isGoBack) {
        return {
          ...state,
          model,
          data: {
            ...state.data,
            [currentStep]: {
              [currentForm]: value
            }
          }
        };
      }
        return {
          ...state,
          model,
        };
    default:
      return state;
  }
}