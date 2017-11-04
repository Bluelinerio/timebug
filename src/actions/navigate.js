// @flow
import { action }               from '../utils/actions';
import {
  GO_TO_ASSIGNMENT_LEAD_IN_SCREEN,
  GO_TO_CONGRATULATIONS_SCREEN,
  GO_TO_HOME_SCREEN,
  GO_TO_STEP_SCREEN,
  GO_TO_WORKBOOK_SCREEN,
}                               from '../constants/actionTypes';

export const doneWithCongratsScreen     = () => action(GO_TO_HOME_SCREEN, { reset: true, direction: "back" });
export const goToHomeScreen             = props => action(GO_TO_HOME_SCREEN, props);
export const goToStepScreen             = props => action(GO_TO_STEP_SCREEN, props);
export const goToWorkBookScreen         = props => action(GO_TO_WORKBOOK_SCREEN, props);
export const goToAssignmentLeadInScreen = props => action(GO_TO_ASSIGNMENT_LEAD_IN_SCREEN, props);
export const goToCongratulationsScreen  = props => action(GO_TO_CONGRATULATIONS_SCREEN, props);
