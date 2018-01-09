import { call, all }                          from 'redux-saga/effects';
import {
  loginFlowSaga,
}                                             from './sagas/auth.saga';
import {
  goToHomeScreen,
  watchForsagaNavigate
}                                             from './sagas/navigate.saga';
import cmsSaga                                from './sagas/cms.saga';
import { onAppLoadedSaga, watchForGetUseSaga } 
                                              from './sagas/user.saga';
import { formLoaderSaga }                     from './sagas/forms.saga';
import { watchForSelectPutAction }            from './selectPutAction';
import { watchForThrottleAction }             from './throttle';

function * appSaga() {
  yield all([
    watchForSelectPutAction(),
    watchForThrottleAction(),
    cmsSaga(),
    loginFlowSaga(),
    goToHomeScreen(),
    watchForsagaNavigate(),
    watchForGetUseSaga(),
    formLoaderSaga(),
    onAppLoadedSaga()
  ])
}
export default function* rootSaga() {
  yield call(appSaga)
}