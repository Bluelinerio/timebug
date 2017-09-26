// @flow

import {put, takeLatest} from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import FBSDK from 'react-native-fbsdk';

import {
  FAILED,
  SUCCEEDED,
  GET_ABOUT_INFO_FROM_CMS,
  FACEBOOK_LOGIN,
  PENDING_START,
  PENDING_END
} from '../constants/actionTypes';
import {CONTENTFUL_CONTENT_LOGIN} from "../constants/constants";

import {contentfulClient} from "../contentful";
import networkState from '../utils/networkState';
import {reset} from '../HOC/navigation'

const {LoginManager, AccessToken} = FBSDK;


function* getAboutInfoFromCMS() {
  try {
    yield put({type: PENDING_START});

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      content_type: CONTENTFUL_CONTENT_LOGIN
    });

    const about: ILogin = response.items.map((item) => item.fields)[0].about;

    yield put({type: GET_ABOUT_INFO_FROM_CMS + SUCCEEDED, about});

    yield put({type: PENDING_END});
  } catch (e) {
    yield put({type: GET_ABOUT_INFO_FROM_CMS + FAILED, message: e.message});

    yield put({type: PENDING_END});
  }
}

function* loginWithFB() {
  try {
    yield put({type: PENDING_START});
    yield networkState.haveConnection();

    let result = yield LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']);
    if (result.isCancelled) {
      alert('canceled')
    } else {
      let data = yield AccessToken.getCurrentAccessToken();
      console.log(data);

      //send data to BE

      yield put({type: FACEBOOK_LOGIN + SUCCEEDED});
      yield reset('HomeScreen');

      yield put({type: PENDING_END});
    }
  } catch (e) {
    console.log(e);
    yield put({type: PENDING_END});

  }
}

export function* getAboutInfoSaga() {
  yield takeLatest(GET_ABOUT_INFO_FROM_CMS, getAboutInfoFromCMS);
}

export function* fbLoginSaga() {
  yield takeLatest(FACEBOOK_LOGIN, loginWithFB);
}

