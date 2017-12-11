// @flow
import { throttle, select, take, race, call, cancelled, put, takeLatest } from 'redux-saga/effects'
import { incrementRequestCount, decrementRequestCount } from '../actions/network.actions'
import * as actions from '../actions'
import { LOGOUT, GET_USER } from '../actions/user.actions'
import { AUTHENTICATE_FB } from '../actions/';
import selectors from '../selectors'
import type { Auth, AuthUser, User, UserState, ErrorResponse } from '../../services/apollo/models'
import { authenticateWithFBToken, fetchUserWithId } from '../../services/apollo'
import facebook from '../../services/facebook'
import type { OpenFBLoginResult } from '../../services/facebook'
import AuthStorage from '../../services/authStorage'
import { request, createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'
import { CANCELLED_ERROR } from './globals'
import type { ErrorActionType } from './globals'

//import { reset } from '../../HOC/navigation'
// yield reset('HomeScreen')

type TokenResultType = { token: string }
type LogoutResult = boolean
const GOT_NULL_USER_ERROR = { error: 'got null user' }

type RequestSagaResultType<P,M> = | { error: any, meta:M } | {payload:P, meta:M } | {cancel:any, meta:M };

export function* requestSaga<P, M>(func: () => Promise<P>, meta?: M): RequestSagaResultType {
	try {
		// Attempt to call the promise.
		var payload: P | Promise<P> = yield call(func)
		return ({payload, meta})
	} catch (error) {
		return ({error, meta })
	} finally {
		if (yield cancelled()) {
			return ({cancel: {}, meta})
		}
	}
}

function * _authenticateWithFBToken(fbToken: string) {
	const authenticateFbPromise = () => authenticateWithFBToken(fbToken)
	const result = yield call(requestSaga, authenticateFbPromise);
	const auth = (result.payload: Auth);
	if (auth) {
		yield call(AuthStorage.setTokenAndUserId,auth.token, auth.user.id);
		return auth;
	}
	return result;
}

function* _fetchUser(userId: string): { user: User } | ErrorResponse {
	const getUserPromise = () => fetchUserWithId(userId)
	return yield request(GET_USER, getUserPromise);
}


type SuccessfulUserRefresh = { user: User, token: string }
type RefreshUserResult = SuccessfulUserRefresh | { error: any } | {}

function* refreshUser(): RefreshUserResult {
	const { token, userId } = yield call(AuthStorage.getTokenAndUserId)
	const user: ?User = yield select(selectors.user);
	if (user && token) {
		return { user, token }
	}
	if (userId && token) {
		const response: User | ErrorResponse = yield call(_fetchUser, userId)
		if (response.error && response.cancel) {
			return response
		}
		const result = yield call(refreshUser)
		return result
	}
	const fbToken: ?string = yield call(facebook.getToken)
	if (fbToken) {
		const authenticateWithFBTokenResult: any = yield call(_authenticateWithFBToken, fbToken)
		if (authenticateWithFBTokenResult.error || authenticateWithFBTokenResult.cancel) {
			return authenticateWithFBTokenResult
		} else {
			return yield call(refreshUser);
		}
	}
	yield put(actions.setUserAnonymous());
	return {}
}

function* _logout(): LogoutResult {
	yield all([call(AuthStorage.wipeStorage)])
	return true
}

function* refreshUserOrLogout(): RefreshUserResult | LogoutResult {
	const winner = yield race({
		logout: take(LOGOUT.type),
		refresh: call(refreshUser)
	})
	if (winner.logout) {
		const result = yield call(_logout)
		return result
	}
	return winner.refresh
}

function* _loginOrRegisterWithFacebook(): RefreshUserResult | LogoutResult {
	const result = yield call(refreshUserOrLogout)
	if (!result.user) {
		// if it is NOT SuccessfulUserRefresh try loggin in with fb
		const fbTokenOrError: OpenFBLoginResult = yield call(facebook.openFBLogin)
		if (fbTokenOrError.error) {
			return fbTokenOrError
		}

		const refreshedUserOrLogout = yield call(refreshUserOrLogout)
		if (refreshedUserOrLogout.logout || refreshedUserOrLogout.error) {
			return refreshedUserOrLogout
		}
	}
}

export function* loginFlowSaga() {
	// yield call(AuthStorage.wipeStorage);
	const result: { user?: User } = yield call(refreshUserOrLogout)
	if (!result.user) {
		yield throttle(500, actions.LOGIN_WITH_FB_BUTTON_PRESSED.type, _loginOrRegisterWithFacebook)
	} else {
		yield throttle(500, LOGOUT.type, _logout)
	}
}
