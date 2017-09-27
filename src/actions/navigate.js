// @flow
import {
  GO_TO_ASSIGNMENTS_SCREEN,
  GO_TO_CONGRATULATIONS_SCREEN,
  GO_TO_HOME_SCREEN,
  GO_TO_TEXT_SCREEN,
  GO_TO_WORKBOOK_SCREEN,
} from '../constants/actionTypes';

export function goToHomeScreen(props) {
  return {
    type: GO_TO_HOME_SCREEN,
    ...props
  }
}

export function goToTextScreen(props) {
  return {
    type: GO_TO_TEXT_SCREEN,
    ...props
  }
}

export function goToAssignmentsScreen(props) {
  return {
    type: GO_TO_ASSIGNMENTS_SCREEN,
    ...props
  }
}

export function goToWorkBookScreen(props) {
  return {
    type: GO_TO_WORKBOOK_SCREEN,
    ...props
  }
}

export function goToCongratulationsScreen(props) {
  return {
    type: GO_TO_CONGRATULATIONS_SCREEN,
    ...props
  }
}
