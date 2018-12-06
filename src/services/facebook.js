// @flow
import FBSDK from 'react-native-fbsdk';
const { LoginManager, AccessToken } = FBSDK;

export type OpenFBLoginResult =
  | {
      fbData: string,
    }
  | {
      error: any,
    };
export type FacebookDataState = {
  accessToken: string,
  applicationID: string,
  declinedPermissions: Array<string>,
  expirationTime: number,
  lastRefreshTime: number,
  permissions: Array<string>,
  userID: string,
};

const getToken = (): Promise<?string> =>
  AccessToken.getCurrentAccessToken().then(t => (t ? t.accessToken : null));

const openFBLogin = (): Promise<OpenFBLoginResult> =>
  LoginManager.logInWithReadPermissions([
    'public_profile',
    'email',
    'user_friends',
  ]).then(result => {
    if (result.isCancelled) {
      return {
        error: 'User cancelled Facebook login',
      };
    }
    return AccessToken.getCurrentAccessToken().then(fbData => ({
      ...result,
      fbData,
    }));
  });

const logOut = (): Promise<void> => LoginManager.logOut();

/**
 * Dummies
 */
class GraphRequest {}

const GraphRequestManager = () => ({
  addRequest: () => ({
    start: () => null,
  }),
});

const fetchUserImage = (facebookId: string) => {
  return new Promise((resolve, reject) => {
    const path = `/${facebookId}/picture`;
    // Create a graph request asking for user information with a callback to handle the response.

    const infoRequest = new GraphRequest(
      path,
      null,
      (error: ?Object, result: ?Object) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  });
};

export default {
  openFBLogin,
  getToken,
  logOut,
  fetchUserImage,
};

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
