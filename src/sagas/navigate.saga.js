// @flow

import {put, takeLatest} from 'redux-saga/effects';

import {
  GO_TO_HOME_SCREEN,
  GO_TO_TEXT_SCREEN,
  GO_TO_ASSIGNMENTS_SCREEN,
  GO_TO_FORM_SCREEN,
  GO_TO_CONGRATULATIONS_SCREEN
} from '../constants/actionTypes';
import {reset, navigate} from '../HOC/navigation'

import type {IAssignment} from "../interfaces";


export function* goToHomeScreen(){
  yield takeLatest(GO_TO_HOME_SCREEN, (action: {number: number}) => navigate('HomeScreen', action));
}

export function* goToTextScreen(){
  yield takeLatest(GO_TO_TEXT_SCREEN, (action: {number: number}) => navigate('TextScreen', action));
}

export function* goToAssignmentsScreen(){
  yield takeLatest(GO_TO_ASSIGNMENTS_SCREEN, (action: {number: number, assignments: IAssignment[]}) => navigate('AssignmentsScreen', action));
}

export function* goToFormScreen(){
  yield takeLatest(GO_TO_FORM_SCREEN, (action: {number: number}) => navigate('HomeScreen', action));
}

export function* goToCongratulationsScreen(){
  yield takeLatest(GO_TO_CONGRATULATIONS_SCREEN, (action: {number: number}) => navigate('CongratulationsScreen', action));
}
