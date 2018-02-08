// @flow
import { throttle, select, take, race, call, all, cancelled, put, takeLatest, fork } from 'redux-saga/effects'

import { 
	LOGIN_WITH_FB_BUTTON_PRESSED,
	FB_LOGIN_DIALOG_RESPONDED,
	LOGOUT,
	REFRESH_USER
} from '../actionTypes'
import { incrementRequestCount, decrementRequestCount } 
	from '../actions/network.actions'
import * as actions from '../actions'
import { 
	GET_USER,
	AUTHENTICATE_FB,
	refreshUser
} from '../actions/user.actions'
import selectors from '../selectors'
import type { Auth, AuthUser, User, UserState, ErrorResponse } from '../../services/apollo/models'
import { authenticateWithFBToken,fetchUserWithId , resetStore } from '../../services/apollo'
import facebook from '../../services/facebook'
import type { OpenFBLoginResult } from '../../services/facebook'
import AuthStorage from '../../services/authStorage'
import { requestSaga } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'
import { CANCELLED_ERROR } from './globals'
import type { ErrorActionType } from './globals'

type LogoutResult = boolean

function* _logout(): LogoutResult {
	yield all([
		call(AuthStorage.wipeStorage),
		call(facebook.logOut),
		call(resetStore),
	])
	return true
}

function* _handleUserError() {
	const result = yield call(_logout) 
	yield put(actions.setUserAnonymous())
}

function * _fetchUserWithId(userId) {
	yield({ type: 'FETCH_USER_WITH_ID', payload: userId });
	yield call(requestSaga, GET_USER, () => fetchUserWithId(userId), {userId} )
	// if GET_USER.ERRORED it will be handled by _handleUserError
}

function* refreshUserOrLogout() {
	function * refreshUser() {
		const { token, userId, endpoint } = yield call(AuthStorage.getTokenAndUserId)
		const fbToken: ?string = yield call(facebook.getToken)
		debugger;
		if (userId && token) {
			return yield call(_fetchUserWithId, userId)
		} else if (fbToken) {
			yield fork(requestSaga, AUTHENTICATE_FB, () => authenticateWithFBToken(fbToken), { fbToken } )
			const result = yield take([
					AUTHENTICATE_FB.ERRORED,
					AUTHENTICATE_FB.SUCCEEDED,
					AUTHENTICATE_FB.CANCELLED
			])
			if (result.type === AUTHENTICATE_FB.SUCCEEDED) {
				const {token, user:{ id }, endpoint }= result.payload
				yield call(AuthStorage.setTokenAndUserId, {token, userId: id, endpoint})
				return yield call(_fetchUserWithId, id)
			}
		}
		yield put(actions.setUserAnonymous())
	}
	const winner = yield race({
		logout: take(LOGOUT),
		refresh: call(refreshUser)
	})
	if (winner.logout) {
		const result = yield call(_logout)
		return result
	}
}

function* _loginOrRegisterWithFacebook() {
	try {
		const success = yield call(facebook.openFBLogin)
		yield put({type: FB_LOGIN_DIALOG_RESPONDED, payload: success })
	} catch(error) {
		yield put({type:FB_LOGIN_DIALOG_RESPONDED + 'FAILD', message: error})
		yield put({type: GET_USER.ERRORED, error})
		return error
	} finally {
		yield put(refreshUser())
	}
}

function * watchForRefreshUserOrLogout() {
	yield takeLatest(REFRESH_USER, refreshUserOrLogout)
}
function* watchForUserErroredSaga() {
	yield takeLatest(GET_USER.ERRORED,_handleUserError)
}

export function* loginFlowSaga() {
	//yield put({ type: LOGOUT })
	yield fork(watchForUserErroredSaga)
	yield fork(watchForRefreshUserOrLogout)
	yield put(refreshUser())
	yield throttle(500, LOGIN_WITH_FB_BUTTON_PRESSED, _loginOrRegisterWithFacebook)
	yield throttle(500, LOGOUT, _logout)
}
