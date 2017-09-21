// @flow

import { put, takeLatest } from 'redux-saga/effects';
import {
	FAILED,
	SUCCEEDED,
	GET_ABOUT_INFO_FROM_CMS
} from '../constants/actionTypes';
import { contentfulClient } from "../contentful";
import networkState from '../utils/networkState';
import { ILogin } from "../interfaces";
import {
	CONTENTFUL_CONTENT_LOGIN
} from "../constants/constants";


function* getAboutInfoFromCMS(){
	try {
		yield networkState.haveConnection();
		
		let response = yield contentfulClient.getEntries({
			content_type: CONTENTFUL_CONTENT_LOGIN
		});
		
		const about: ILogin = response.items.map((item) => item.fields)[0];
		
		yield put({type: GET_ABOUT_INFO_FROM_CMS + SUCCEEDED, about});
	} catch (e) {
		yield put({type: GET_ABOUT_INFO_FROM_CMS + FAILED, message: e.message});
	}
}

export function* getAboutInfoSaga() {
	yield takeLatest(GET_ABOUT_INFO_FROM_CMS, getAboutInfoFromCMS);
}
