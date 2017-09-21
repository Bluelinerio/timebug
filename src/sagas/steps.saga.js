// @flow

import { put, takeLatest } from 'redux-saga/effects';
import {
  FAILED,
  SUCCEEDED,
  GET_ALL_STEPS_FROM_CMS,
  GET_STEPS_FROM_CMS_BY_DAY
} from '../constants/actionTypes';
import {contentfulClient} from "../contentful";
import networkState from '../utils/networkState';
import {IStep} from "../interfaces";
import {CONTENTFUL_CONTENT_STEP} from "../constants/constants";

function* getAllStepsFromCMS(){
  try {
    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      content_type: CONTENTFUL_CONTENT_STEP
    });

    const steps: IStep[] = response.items.map((step) => {
      return step.fields;
    });

    yield put({type: GET_ALL_STEPS_FROM_CMS + SUCCEEDED, steps});
  } catch (e) {
    yield put({type: GET_ALL_STEPS_FROM_CMS + FAILED, message: e.message});
  }
}

function* getStepsFromCMSByDay(action: any) {
  try {
    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      'fields.number': action.day,
      content_type: CONTENTFUL_CONTENT_STEP
    });

    const step: IStep = response.items.map((s) => s.fields)[0];

    yield put({type: GET_STEPS_FROM_CMS_BY_DAY + SUCCEEDED, step});
  } catch (e) {
    yield put({type: GET_STEPS_FROM_CMS_BY_DAY + FAILED, message: e.message});
  }
}

export function* getAllStepsSaga() {
  yield takeLatest(GET_ALL_STEPS_FROM_CMS, getAllStepsFromCMS);
}

export function* getStepByDaySaga() {
  yield takeLatest(GET_STEPS_FROM_CMS_BY_DAY, getStepsFromCMSByDay);
}


