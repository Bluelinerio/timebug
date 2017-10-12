// @flow
import { GET_ALL_STEPS_FROM_CMS, GET_STEP_FROM_CMS_BY_DAY, GET_STEP_COLORS, SUCCESS, } 
                                                            from '../constants/actionTypes';
import { IStep }                                            from "../interfaces/IStep";
import { IColors }                                          from "../interfaces/IColors";
import { colors }                                           from '../constants/CMSData';


interface StepsState {
  allSteps: IStep[],
  currentStep: IStep,
}

interface StepsAction {
  type: string,
  steps: ?IStep[],
  colors: ?IColors
}

const initialState: StepsState = {
  allSteps: [],
  currentStep: {},
  colors
};

export default function (state: StepsState = initialState, action: StepsAction) {
  switch (action.type) {
    case GET_ALL_STEPS_FROM_CMS[SUCCESS]:
      return {
        ...state,
        allSteps: action.steps,
      };
    case GET_STEP_COLORS[SUCCESS]: 
      return {
        ...state,
        colors: action.colors
      }
    case GET_STEP_FROM_CMS_BY_DAY[SUCCESS]:
      return {
        ...state,
        currentStep: action.step,
      };
    default:
      return state;
  }
}