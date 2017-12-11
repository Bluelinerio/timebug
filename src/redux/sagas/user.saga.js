// @flow

import { call, put, takeLatest, cancelled, throttle } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'

import { REQUEST, ON_APP_LOADED } from '../actionTypes'
import { incrementRequestCount, decrementRequestCount } from '../actions/network.actions'
import networkState from '../../utils/networkState'
import { fetchUserWithId } from '../../services/apollo'
import { requestSaga } from '../../Modules/redux-saga-request'
import { GET_USER } from '../actions/user.actions'

const getUserId = (): Promise<string> => AsyncStorage.getItem('@2020:userId')

function* _fetchUserWorker() {
	try {
		const userId = yield call(getUserId)
		if (userId) {
			return yield put(GET_USER.cancel());
		}

		yield call(networkState.haveConnection)
		yield put(incrementRequestCount())
		const user = requestSaga(GET_USER, () => fetchUserWithId(userId) )

		yield put(decrementRequestCount())
	} catch (e) {
		console.error(e)
		yield put(GET_USER.error(e))
		yield put(decrementRequestCount())
	} finally {
		if (yield cancelled()) yield put(GET_USER.cancel())
		yield put(decrementRequestCount())
	}
}

export function* watchForGetUseSaga() {
	throttle(200, GET_USER.STARTED, _fetchUserWorker)
}

export function* onAppLoadedSaga() {
  //yield takeLatest(ON_APP_LOADED, watchForGetUseSaga);
}
