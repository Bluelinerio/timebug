import { all }                               from 'redux-saga/effects';
import {
  fbLoginSaga,
  getAboutInfoSaga,
}                                            from './login.saga';
import {
  goToAssignmentsScreen,
  goToCongratulationsScreen,
  goToHomeScreen,
  goToStepScreen,
  goToWorkBookScreen,
}                                            from './navigate.saga';
import {
  getAllStepsSaga,
  getStepByDaySaga,
}                                            from './steps.saga';
import { onAppLoadedSaga, userProgressSaga } from "./user.saga";
import { formLoaderSaga }                    from "./form.saga";

export default function* rootSaga() {
  yield all([
    getAllStepsSaga(),
    getStepByDaySaga(),
    getAboutInfoSaga(),
    fbLoginSaga(),
    goToHomeScreen(),
    goToStepScreen(),
    goToAssignmentsScreen(),
    goToWorkBookScreen(),
    goToCongratulationsScreen(),
    userProgressSaga(),
    formLoaderSaga(),
    onAppLoadedSaga()
  ])
}