import { call, all }                          from 'redux-saga/effects';
import {
  loginFlowSaga,
}                                             from './sagas/auth.saga';
import {
  goToHomeScreen,
  watchForsagaNavigate
}                                             from './sagas/navigate.saga';
import cmsSaga                                from './sagas/cms.saga';
import { watchForSelectPutAction }            from './selectPutAction';
import { appStateSagaWatcher }                from './sagas/appState.saga'
import { watchSyncFormData }                  from './sagas/formData.saga'
import {
  watchChangesInFormsAndUpdateAchievements
}                                             from './sagas/achivements.saga'
import { watchForThrottleAction }             from './throttle';
function * appSaga() {
  yield all([
    appStateSagaWatcher(),
    watchForSelectPutAction(),
    watchForThrottleAction(),
    cmsSaga(),
    loginFlowSaga(),
    goToHomeScreen(),
    watchForsagaNavigate(),
    watchSyncFormData(),
    watchChangesInFormsAndUpdateAchievements(),
  ])
}
export default function* rootSaga() {
  yield call(appSaga)
}