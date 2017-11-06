// @flow
import { action }               from '../utils/actions';
import {
  GO_TO_ASSIGNMENT_LEAD_IN_SCREEN,
  GO_TO_ASSIGNMENT_DONE_SCREEN,
  GO_TO_HOME_SCREEN,
  GO_TO_STEP_SCREEN,
  GO_TO_WORKBOOK_SCREEN,
  GO_TO_ASSIGNMENT_FLOW
}                               from '../constants/actionTypes';

export const doneWithCongratsScreen     = () => action(GO_TO_HOME_SCREEN, { reset: true, direction: "back" });
export const goToHomeScreen             = props => action(GO_TO_HOME_SCREEN, props);
export const goToStepScreen             = props => action(GO_TO_STEP_SCREEN, props);
export const goToWorkBookScreen         = props => action(GO_TO_WORKBOOK_SCREEN, props);
export const goToAssignmentLeadInScreen = props => action(GO_TO_ASSIGNMENT_LEAD_IN_SCREEN, props);
export const goToAssignmentDoneScreen   = props => action(GO_TO_ASSIGNMENT_DONE_SCREEN, props);
export const goToAssignmentFlow         = props => action(GO_TO_ASSIGNMENT_FLOW, props);
