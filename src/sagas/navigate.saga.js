// @flow

import { takeLatest } from 'redux-saga/effects';
import {
	GO_TO_ASSIGNMENT_LEAD_IN_SCREEN,
	GO_TO_ASSIGNMENT_DONE_SCREEN,
	GO_TO_HOME_SCREEN,
	GO_TO_STEP_SCREEN,
	GO_TO_WORKBOOK_SCREEN,
	GO_TO_ASSIGNMENT_FLOW
} from '../constants/actionTypes';
import * as navigation from '../HOC/navigation';
import type, { IAssignment } from '../interfaces';

const _goToHomeScreen = (action: { reset: boolean, number: number }) => {
	if (action.reset) {
		navigation.reset('HomeScreen', action);
	} else {
		navigation.navigate('HomeScreen', action);
	}
};

export function* goToHomeScreen() {
	yield takeLatest(GO_TO_HOME_SCREEN, _goToHomeScreen);
}

export function* goToStepScreen() {
	yield takeLatest(GO_TO_STEP_SCREEN, (action: { number: number }) => navigation.navigate('StepScreen', action));
}

export function* goToAssignmentFlow(){
	yield takeLatest(GO_TO_ASSIGNMENT_FLOW, (action: { number: number }) => navigation.navigateToStack('AssignmentFlow', action, 'StepScreen'))
}

export function* goToAssignmentLeadInScreen() {
	yield takeLatest(GO_TO_ASSIGNMENT_LEAD_IN_SCREEN, (action: { number: number, assignments: IAssignment[] }) =>
		navigation.navigate('AssignmentLeadInScreen', action)
	);
}

export function* goToWorkBookScreen() {
	yield takeLatest(GO_TO_WORKBOOK_SCREEN, (action: { number: number }) =>
		navigation.navigate('WorkBookScreen', action)
	);
}

export function* goToAssignmentDoneScreen() {
	yield takeLatest(GO_TO_ASSIGNMENT_DONE_SCREEN, (action: { number: number }) =>
		navigation.navigate('AssignmentDoneScreen', action)
	);
}
