// @flow
import {
  throttle,
  take,
  race,
  call,
  all,
  put,
  takeLatest,
  fork
}                       from 'redux-saga/effects'
import { requestSaga }  from '../../Modules/redux-saga-request'
// actions:
import {
  LOGIN_WITH_FB_BUTTON_PRESSED,
  FB_LOGIN_DIALOG_RESPONDED,
  LOGOUT,
  REFRESH_USER
}                       from '../actionTypes'
import { resetStore }   from '../actions'
import {
  getUser,
  authenticateFb,
  refreshUser,
  setUserAnonymous
}                       from '../actions/user.actions'
import {
  authenticateWithFBToken,
  fetchUserWithId,
  isClientEndpoint,
  resetApolloStore
}                       from '../../services/apollo'
import facebook         from '../../services/facebook'
import AuthStorage      from '../../services/authStorage'

function* wipeTokens() {
	yield all([call(AuthStorage.wipeStorage), call(facebook.logOut)]);
}

function* _logout() {
	yield all([call(wipeTokens), call(resetApolloStore), put(setUserAnonymous())]);
}

// function* _logoutAndWipeUserData() {
// 	yield all([call(_logout), put(resetStore())]);
// }

function* _handleUserError() {
	yield call(_logout);
	yield put(setUserAnonymous());
}

function* _fetchUserWithId(userId) {
	yield put({ type: 'FETCH_USER_WITH_ID', payload: userId });
	yield call(requestSaga, getUser, () => fetchUserWithId(userId), { userId });
	// if getUser.ERRORED it will be handled by _handleUserError
}

function* refreshUserOrLogout() {
	function* refreshUser() {
		const { token, userId, endpoint } = yield call(AuthStorage.getTokenAndUserId);
		// customizatio point in case we change enpoints...
		const fbToken: ?string = yield call(facebook.getToken);
		if (userId && token && isClientEndpoint(endpoint)) {
			return yield call(_fetchUserWithId, userId);
		}
		if (fbToken) {
			yield fork(requestSaga, authenticateFb, () => authenticateWithFBToken(fbToken), { fbToken });
			const result = yield take([authenticateFb.ERRORED, authenticateFb.SUCCEEDED, authenticateFb.CANCELLED]);
			if (result.type === authenticateFb.SUCCEEDED) {
				const { token, user: { id }, endpoint } = result.payload;
				// FIXME: this call still doesn't work:
				yield call(AuthStorage.setTokenAndUserId, {
					token,
					userId: id,
					endpoint
				});
				yield call(_fetchUserWithId, id);
				return;
			}
		}
		yield put(setUserAnonymous());
	}
	const winner = yield race({
		logout: take(LOGOUT),
		refresh: call(refreshUser)
	});
	if (winner.logout) {
		const result = yield call(_logout);
		return result;
	}
}

function* _loginOrRegisterWithFacebook() {
	try {
		const success = yield call(facebook.openFBLogin);
		yield put({ type: FB_LOGIN_DIALOG_RESPONDED, payload: success });
	} catch (error) {
		yield put({ type: FB_LOGIN_DIALOG_RESPONDED + 'FAILD', message: error });
		yield put({ type: getUser.ERRORED, error });
		return error;
	} finally {
		yield put(refreshUser());
	}
}

function* watchForRefreshUserOrLogout() {
	yield takeLatest(REFRESH_USER, refreshUserOrLogout);
}
function* watchForUserErroredSaga() {
	yield takeLatest(getUser.ERRORED, _handleUserError);
}

export function* loginFlowSaga() {
	//yield put({ type: LOGOUT })
	yield fork(watchForUserErroredSaga);
	yield fork(watchForRefreshUserOrLogout);
	//yield call(_logout)
	yield put(refreshUser());
	yield throttle(500, LOGIN_WITH_FB_BUTTON_PRESSED, _loginOrRegisterWithFacebook);
	yield throttle(500, LOGOUT, _logout);
}
