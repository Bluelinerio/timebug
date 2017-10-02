// @flow

import FBSDK                        from 'react-native-fbsdk';
import {
  cancelled,
  put,
  takeLatest,
}                                   from 'redux-saga/effects';
import {
  FACEBOOK_LOGIN,
  FAILED,
  SUCCEEDED,
  GET_ABOUT_INFO_FROM_CMS,
  GET_USER_PROGRESS,
  PENDING_END,
  PENDING_START,
}                                   from '../constants/actionTypes';
import { CONTENTFUL_CONTENT_LOGIN } from "../constants/constants";
import { contentfulClient }         from "../contentful";
import networkState                 from '../utils/networkState';
import { reset }                    from '../HOC/navigation'
import { AsyncStorage }             from "react-native";
import { loginFacebook }            from "../mutations/user";
import { client }                   from '../mutations/config'

const { LoginManager, AccessToken } = FBSDK;

function* getAboutInfoFromCMS() {
  try {
    yield put({ type: PENDING_START });

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      content_type: CONTENTFUL_CONTENT_LOGIN,
    });

    const about: string = response.items.map((item) => item.fields)[ 0 ].about;

    yield put({
      type: GET_ABOUT_INFO_FROM_CMS + SUCCEEDED,
      about,
    });

    yield put({ type: PENDING_END });
  } catch (e) {
    yield put({
      type: GET_ABOUT_INFO_FROM_CMS + FAILED,
      message: e.message,
    });

    yield put({ type: PENDING_END });
  } finally {
    if (yield cancelled())
      yield put({ type: PENDING_END });
  }
}

function* loginWithFB() {
  try {
    yield put({ type: PENDING_START });
    yield networkState.haveConnection();

    let result = yield LoginManager.logInWithReadPermissions([ 'public_profile', 'email', 'user_friends' ]);
    if (result.isCancelled) {
      alert('canceled');
      yield put({ type: PENDING_END });
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

      yield put({
        type: GET_USER_PROGRESS,
        userID,
        loadSteps: true,
      });
      yield put({ type: FACEBOOK_LOGIN + SUCCEEDED });
      yield reset('HomeScreen');

      yield put({ type: PENDING_END });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: PENDING_END });
  } finally {
    if (yield cancelled())
      yield put({ type: PENDING_END });
  }

  // TODO uncomment to skip FB login
  // yield put({
  //   type: GET_USER_PROGRESS,
  //   userID: 'qwe',
  // });
  // yield put({type: FACEBOOK_LOGIN + SUCCEEDED});
  // yield reset('HomeScreen');

}

export function* getAboutInfoSaga() {
  yield takeLatest(GET_ABOUT_INFO_FROM_CMS, getAboutInfoFromCMS);
}

export function* fbLoginSaga() {
  yield takeLatest(FACEBOOK_LOGIN, loginWithFB);
}

