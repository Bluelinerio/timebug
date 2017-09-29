// @flow

import { takeLatest }       from 'redux-saga/effects';
import {
  GO_TO_ASSIGNMENTS_SCREEN,
  GO_TO_CONGRATULATIONS_SCREEN,
  GO_TO_HOME_SCREEN,
  GO_TO_TEXT_SCREEN,
  GO_TO_WORKBOOK_SCREEN,
}                           from '../constants/actionTypes';
import { navigate }         from '../HOC/navigation'
import type { IAssignment } from "../interfaces";


export function* goToHomeScreen() {
  yield takeLatest(GO_TO_HOME_SCREEN, (action: { number: number }) => navigate('HomeScreen', action));
}

export function* goToTextScreen() {
  yield takeLatest(GO_TO_TEXT_SCREEN, (action: { number: number }) => navigate('TextScreen', action));
}

export function* goToAssignmentsScreen() {
  yield takeLatest(GO_TO_ASSIGNMENTS_SCREEN, (action: { number: number, assignments: IAssignment[] }) => navigate('AssignmentsScreen', action));
}

export function* goToWorkBookScreen() {
  yield takeLatest(GO_TO_WORKBOOK_SCREEN, (action: { number: number }) => navigate('WorkBookScreen', action));
}

export function* goToCongratulationsScreen() {
  yield takeLatest(GO_TO_CONGRATULATIONS_SCREEN, (action: { number: number }) => navigate('CongratulationsScreen', action));
}
