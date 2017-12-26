# Overview

This markdown file is directly related to issue 115, and the implementation of login/logout mechanics, affects Issues 120 and 104

First, you should review [issue 115](https://gitlab.com/timebug/2020-react-native/issues/115)

The main body of the solution is contained in auth.saga.js

```js
//RefreshUserOrLogout
        if (userId && token) {
			
			const response: User | ErrorResponse = yield call(_fetchUser, userId)
			if (response.error || response.cancel) {
				return response
			}
			const result = yield call(refreshUser)
			return result
		}
```

This call catches any error returned by the graphcool api, either user not found, token expired (untested), request timeout etc... And returns the response enabling FB_LOGIN button and logout button (See [issue 104](https://gitlab.com/timebug/2020-react-native/issues/104))

_fetchUser then dispatches GET_USER_ERRORED, which is then handled by this code

```js
function* _handleUserError(){
	const result = yield call(_logout) 
	yield put(actions.setUserAnonymous());
}


function* userErroredSaga() {
	yield takeLatest(GET_USER.ERRORED,_handleUserError)
}
```

Simple enough, it calls logout which wipes Async storage, resets store, and logs out of FB, and also sets the user as an anonymous user, which removes the "UNDETERMINED" state, and is the default flow of the app once it has been initialized for the first time ever

Now the login button is enabled, and you can log in normally, here is where it goes awry depending on the platform

On the issue I documented related RN issues to the errors indicated:

## Android
You succesfully log in, and it tries to save data to async storage, only to have the promise never resolve, eventually you are forced to either hit the button again or restart... It does go through to the next screen, it did save a user and a token, but promise did not resolve, behavior is undefined

## IOS
You succesfully log in, and it tries to save data to async storage, once it's read again on the next call to refresh user though, IOS complains the values are null... Restarting the app, does go through to the next screen, it did save a user and a token, but it was null once read.