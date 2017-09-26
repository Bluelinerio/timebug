import { all } from 'redux-saga/effects';

import {
  getAllStepsSaga,
  getStepByDaySaga
} from './steps.saga';

import {
  fbLoginSaga, getAboutInfoSaga
} from './login.saga';

import {
  goToHomeScreen,
  goToTextScreen,
  goToAssignmentsScreen,
  goToFormScreen,
  goToCongratulationsScreen
} from './navigate.saga';

export default function* rootSaga() {
  yield all([
    getAllStepsSaga(),
    getStepByDaySaga(),
		getAboutInfoSaga(),
    fbLoginSaga(),
    goToHomeScreen(),
    goToTextScreen(),
    goToAssignmentsScreen(),
    goToFormScreen(),
    goToCongratulationsScreen()
  ])
}