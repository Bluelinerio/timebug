import {
    takeLatest,
    fork,
    call,
    put
} from 'redux-saga/effects'
import { updateCheckin } from '../actions/checkin.actions'
import { CHANGE_CHECKIN, BUILD_NOTIFICATION_SET }       from '../actionTypes'
import NotificationService from '../../services/notifications'
import { calculateNextCheckin } from '../../services/checkins'

import tron from 'reactotron-react-native'

function* setUpNotificationAndUpdateCheckin({ payload }) {
    const { step, frequency, message } = payload
    tron.log("NotificationUpdate")
    tron.log(payload)
    const nextCheckin = yield call (calculateNextCheckin, "30s")
    const id = yield call(NotificationService.scheduleNotification, message, "Lifevision", nextCheckin)
    yield put(updateCheckin({ step, checking: { frequency, nextCheckin, id }}))
}

function* _setInitialNotifications({ payload }) {
    const { steps } = payload
    tron.log("Initial notifications")
    tron.log(steps)
}

function* watchForInitialNotifications() {
    yield takeLatest(BUILD_NOTIFICATION_SET, _setInitialNotifications)
}

function* watchForCheckinsUpdate() {
    yield takeLatest(CHANGE_CHECKIN, setUpNotificationAndUpdateCheckin)
}

export function* watchForCheckinsSaga() {
    yield fork(watchForCheckinsUpdate)
    yield fork(watchForInitialNotifications)
}