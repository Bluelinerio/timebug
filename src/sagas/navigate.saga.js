// @flow

import { takeLatest } from 'redux-saga/effects';
import {
	GO_TO_ASSIGNMENTS_SCREEN,
	GO_TO_CONGRATULATIONS_SCREEN,
	GO_TO_HOME_SCREEN,
	GO_TO_STEP_SCREEN,
	GO_TO_WORKBOOK_SCREEN
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

export function* goToAssignmentsScreen() {
	yield takeLatest(GO_TO_ASSIGNMENTS_SCREEN, (action: { number: number, assignments: IAssignment[] }) =>
		navigation.navigate('AssignmentsScreen', action)
	);
}

export function* goToWorkBookScreen() {
	yield takeLatest(GO_TO_WORKBOOK_SCREEN, (action: { number: number }) =>
		navigation.navigate('WorkBookScreen', action)
	);
}

export function* goToCongratulationsScreen() {
	yield takeLatest(GO_TO_CONGRATULATIONS_SCREEN, (action: { number: number }) =>
		navigation.navigate('CongratulationsScreen', action)
	);
}
