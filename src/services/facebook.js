// @flow
import FBSDK from 'react-native-fbsdk'
const {
	LoginManager,
	AccessToken
} = FBSDK

export type OpenFBLoginResult = {
	fbData: string
} | {
	error: any
}
export type FacebookDataState = {
	accessToken: string,
	applicationID: string,
	declinedPermissions: Array < string > ,
	expirationTime: number,
	lastRefreshTime: number,
	permissions: Array < string > ,
	userID: string,
}

const getToken = (): Promise <?string> => AccessToken.getCurrentAccessToken().then(t => t ? t.accessToken : null)

const openFBLogin = (): Promise < OpenFBLoginResult > => LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(result => {
		if (result.isCancelled) {
			return {
				error: 'User cancelled Facebook login'
			}
		}
		return AccessToken.getCurrentAccessToken().then(fbData => ({ ...result,
			fbData
		}))
	})

const logOut = (): Promise<void> => LoginManager.logOut()

export default {
	openFBLogin,
	getToken,
	logOut
}


// export function* openFBLogin(): OpenFBLoginResult {
// 	type openFBLoginResultType = { +type: string, +token: string }
// 	const response: openFBLoginResultType = yield call(Expo.Facebook.logInWithReadPermissionsAsync, FBAPP_ID, {
// 		permissions: FB_PERMISSIONS
// 	})
// 	let error: ?any = null
// 	switch (response.type) {
// 		case 'success':
// 			const { token } = response
// 			yield call(_setFBToken, token)
// 			yield put(actions.loginFb.success('', token))
// 			return { token }
// 		case 'cancel':
// 			error = CANCELLED_ERROR
// 			yield put(actions.loginFb.failure('', error))
// 			return { error }
// 		default:
// 			error = JSON.stringify(response)
// 			yield put(actions.loginFb.failure('', error))
// 			return { error }
// 	}
// }