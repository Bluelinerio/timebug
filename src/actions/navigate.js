// @flow
import { action }               from '../utils/actions';
import {
  GO_TO_ASSIGNMENTS_SCREEN,
  GO_TO_CONGRATULATIONS_SCREEN,
  GO_TO_HOME_SCREEN,
  GO_TO_TEXT_SCREEN,
  GO_TO_WORKBOOK_SCREEN,
}                               from '../constants/actionTypes';

export const goToHomeScreen            = props => action(GO_TO_HOME_SCREEN, props);
export const goToTextScreen            = props => action(GO_TO_TEXT_SCREEN, props);
export const goToWorkBookScreen        = props => action(GO_TO_WORKBOOK_SCREEN, props);
export const goToAssignmentsScreen     = props => action(GO_TO_ASSIGNMENTS_SCREEN, props);
export const goToCongratulationsScreen = props => action(GO_TO_CONGRATULATIONS_SCREEN, props);
