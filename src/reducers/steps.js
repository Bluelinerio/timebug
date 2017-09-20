// @flow
import {
  GET_ALL_STEPS_FROM_CMS,
  GET_STEPS_FROM_CMS_BY_DAY, SUCCEEDED
} from '../constants/actionTypes';
import {IStep} from "../interfaces/IStep";

interface StepsState {
  allSteps: IStep[],
  currentStep: IStep,
}

interface StepsAction {
  type: string,
  steps: ?IStep[],
  step: ?IStep
}

const initialState: StepsState = {
  allSteps: [],
  currentStep: {}
};

export default function (state: StepsState = initialState, action: StepsAction) {
  switch (action.type) {
    case GET_ALL_STEPS_FROM_CMS + SUCCEEDED:
      return {...state, allSteps: action.steps};
    case GET_STEPS_FROM_CMS_BY_DAY + SUCCEEDED:
      return {...state, currentStep: action.step};
    default:
      return state;
  }
}