import { call, all }                                from 'redux-saga/effects';
import {
  loginFlowSaga,
}                                             from './auth.saga';
import {
  goToAssignmentLeadInScreen,
  goToAssignmentDoneScreen,
  goToHomeScreen,
  goToStepScreen,
  goToWorkBookScreen,
  goToAssignmentFlow
}                                             from './navigate.saga';
import cmsSaga                                from './cms.saga';
import { onAppLoadedSaga, watchForGetUseSaga } 
                                              from "./user.saga";
import { formLoaderSaga }                     from "./form.saga";
import loadStorage                            from '../sagas/storage.saga'

function * appSaga() {
  yield all([
    cmsSaga(),
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
export default function* rootSaga() {
  yield call(loadStorage);
  yield call(appSaga)
}