import { call, all }                                from 'redux-saga/effects';
import {
  loginFlowSaga,
}                                             from './auth.saga';
import {
  goToHomeScreen,
  watchForsagaNavigate
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
    watchForsagaNavigate(),
    watchForGetUseSaga(),
    formLoaderSaga(),
    onAppLoadedSaga()
  ])
}
export default function* rootSaga() {
  yield call(loadStorage);
  yield call(appSaga)
}