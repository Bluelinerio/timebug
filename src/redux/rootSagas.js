import { call, all }                                from 'redux-saga/effects'
import { loginFlowSaga }                            from './sagas/auth.saga'
import {
  goToHomeScreen,
  watchForsagaNavigate,
  watchForDeeplinkNavigation,
}                                                   from './sagas/navigate.saga'
import cmsSaga                                      from './sagas/cms.saga'
import { watchForSelectPutAction }                  from './selectPutAction'
import { appStateSagaWatcher }                      from './sagas/appState.saga'
import { watchSyncFormData }                        from './sagas/formData.saga'
import { watchChangesInFormsAndUpdateAchievements } from './sagas/achivements.saga'
import { watchForThrottleAction }                   from './throttle'
import { watchForCheckinsSaga }                     from './sagas/checkins.saga'
import { watchForNotificationSaga }                 from './sagas/notifications.saga'
import { watchForGoalsSaga }                        from './sagas/goals.saga'
import { watchForAwardsSaga }                       from './sagas/awards.saga'
import { watchForContactsSaga }                     from './sagas/contacts.saga'
import { watchForFormSideEffectsSaga }              from './sagas/formSideEffects.saga'
import { watchSyncToolData }                        from './sagas/toolData.saga'
import { watchForAnalytics }                        from './sagas/analyticsSaga'
import { watchForCareerGoalsSaga }                  from './sagas/careerGoals.saga'

function* appSaga() {
  yield all([
    appStateSagaWatcher(),
    watchForSelectPutAction(),
    watchForThrottleAction(),
    cmsSaga(),
    loginFlowSaga(),
    goToHomeScreen(),
    watchForsagaNavigate(),
    watchForDeeplinkNavigation(),
    watchSyncFormData(),
    watchChangesInFormsAndUpdateAchievements(),
    watchForCheckinsSaga(),
    watchForNotificationSaga(),
    watchForGoalsSaga(),
    watchForAwardsSaga(),
    watchForContactsSaga(),
    watchForFormSideEffectsSaga(),
    watchSyncToolData(),
    watchForAnalytics(),
    watchForCareerGoalsSaga(),
  ])
}
export default function* rootSaga() {
  yield call(appSaga)
}
