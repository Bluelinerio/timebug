// @flow

import FBSDK                           from 'react-native-fbsdk';
import {
  cancelled,
  put,
  takeLatest,
}                                      from 'redux-saga/effects';
import {
  LOGIN_WITH_FACEBOOK,
  REQUEST,
  GET_ABOUT_INFO_FROM_CMS,
}                                      from '../constants/actionTypes';
import { loginWithFB }                 from '../actions/FBAction';
import { getAboutInfoFromCMS }         from '../actions/login';
import {
  incrementRequestCount,
  decrementRequestCount
}                                      from '../actions/network';
import { getUserProgress }             from '../actions/user';
import { contentfulClient, CONTENTFUL_CONTENT_LOGIN }           
                                       from '../clients/contentful';
import networkState                    from '../utils/networkState';
import { reset }                       from '../HOC/navigation'
import { AsyncStorage }                from "react-native";
import { client, loginFacebook }       from '../clients/apollo'
import { ENVIRONMENT } from './../constants/config';

const { LoginManager, AccessToken } = FBSDK;

function* getAboutInfoFromCMSWorker() {
  try {
    yield put(incrementRequestCount());

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      content_type: CONTENTFUL_CONTENT_LOGIN,
    });

    const about: string = response.items.map((item) => item.fields)[ 0 ].about;

    yield put(getAboutInfoFromCMS.success(about));

    yield put(decrementRequestCount());
  } catch (e) {
    yield put(getAboutInfoFromCMS.failure(e.message));

    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }
}

function* loginWithFBWorker() {
  try {
    yield put(incrementRequestCount());
    yield networkState.haveConnection();

    if(ENVIRONMENT === "TEST"){
      const userID = '1234';

      let graphResponse = yield client.query({
        query: loginFacebook,
        variables: {
          token: fbData.accessToken,
        },
      });

      let userID = graphResponse.data.authenticate.user.id;

      yield AsyncStorage.setItem('@2020:userId', userID);

      yield put(getUserProgress.request(userID, true));
      yield put(loginWithFB.success());
      yield reset('HomeScreen');
      yield put(decrementRequestCount());
    }
    else{
      let result = yield LoginManager.logInWithReadPermissions([ 'public_profile', 'email', 'user_friends' ]);
      if (result.isCancelled) {
        alert('canceled');
        yield put(decrementRequestCount());
      } else {
        let fbData = yield AccessToken.getCurrentAccessToken();
  
        let graphResponse = yield client.mutate({
          mutation: loginFacebook,
          variables: {
            token: fbData.accessToken,
          },
        });
  
        let userID = graphResponse.data.loginFacebook.user._id;
  
        yield AsyncStorage.setItem('@2020:userId', userID);
  
        yield put(getUserProgress.request(userID, true));
        yield put(loginWithFB.success());
        yield reset('HomeScreen');
        yield put(decrementRequestCount());
      }
    }
  } catch (e) {
    console.error(e)
    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }

  // TODO uncomment to skip FB login
  // yield put(getUserProgress.request('qwe');
  // yield put(loginWithFB.success());
  // yield reset('HomeScreen');

}

export function* getAboutInfoSaga() {
  yield takeLatest(GET_ABOUT_INFO_FROM_CMS[REQUEST], getAboutInfoFromCMSWorker);
}

export function* fbLoginSaga() {
  yield takeLatest(LOGIN_WITH_FACEBOOK[REQUEST], loginWithFBWorker);
}

