import { all }                               from 'redux-saga/effects';
import {
  loginFlowSaga,
}                                            from './auth.saga';
import {
  goToAssignmentLeadInScreen,
  goToAssignmentDoneScreen,
  goToHomeScreen,
  goToStepScreen,
  goToWorkBookScreen,
  goToAssignmentFlow
}                                            from './navigate.saga';
import {
  getAllStepsSaga,
}                                            from './steps.saga';
import { onAppLoadedSaga, watchForGetUseSaga } from "./user.saga";
import { formLoaderSaga }                    from "./form.saga";

export default function* rootSaga() {
  yield all([
    getAllStepsSaga(),
    loginFlowSaga(),
    goToHomeScreen(),
    goToStepScreen(),
    goToAssignmentFlow(),
    goToAssignmentLeadInScreen(),
    goToWorkBookScreen(),
    goToAssignmentDoneScreen(),
    watchForGetUseSaga(),
    formLoaderSaga(),
    onAppLoadedSaga()
  ])
}