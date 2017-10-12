// @flow

import { call, cancelled, put, takeLatest }                   from 'redux-saga/effects';
import { delay }                                              from 'redux-saga'
import theme                                                  from 'react-native-theme';
import {
  REQUEST,
  GET_ALL_STEPS_FROM_CMS,
  GET_STEP_FROM_CMS_BY_DAY,
}                                                             from '../constants/actionTypes';
import {
  incrementRequestCount,
  decrementRequestCount
}                                                             from '../actions/network';
import { getAllStepsFromCMS, getStepFromCMSByDay, getStepsColorFromCMS }
                                                              from '../actions/steps';
import { contentfulClient }                                   from "../contentful";
import networkState                                           from '../utils/networkState';
import { IColors, IStep, IColorSchema }                       from "../interfaces";
import { CONTENTFUL_CONTENT_COLORS, CONTENTFUL_CONTENT_STEP } from "../constants/constants";
import { colors } from '../constants/CMSData';

function* getColorsFromCMS() {
  yield networkState.haveConnection();

  let response = yield contentfulClient.getEntries({
    content_type: CONTENTFUL_CONTENT_COLORS,
  });

  const colors: IColorSchema = response.items.map((i) => {
    return i.fields;
  })[ 0 ];

  return colors.schema.colors;
}

function setColorToTheme(color) {
  theme.add({
    headerColor: {
      backgroundColor: color,
    },
    wideButtonBackground: {
      backgroundColor: color,
    },
    gradientTopColor: {
      color,
    },
    congratulationsScreenTextColor: {
      color,
    },
    themeBackgroundColor: {
      backgroundColor: color,
      borderColor: color
    },
  }, 'custom');
  theme.active('custom');
}

function setColorsForCurrentStep(colors: IColors, step: IStep) {
  debugger;
  let color = null;
  if (colors.steps[ step.number ]) {
    color = colors.steps[ step.number ]
  }
  if (!color) {
    color = colors.phases[ step.type ]
  }
  return color;
}

function* getAllStepsFromCMSWorker() {
  try {
    yield put(incrementRequestCount());

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      content_type: CONTENTFUL_CONTENT_STEP,
    });

    const steps: IStep[] = response.items.map((step) => {
      return step.fields;
    });

    yield put(getAllStepsFromCMS.success(steps));

    yield put(decrementRequestCount());
  } catch (e) {
    yield put(getAllStepsFromCMS.failure(e.message));

    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }
}

function* getStepFromCMSByDayWorker(action: { day: number }) {
  try {
    yield put(incrementRequestCount());

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      'fields.number': action.day,
      content_type: CONTENTFUL_CONTENT_STEP,
    });

    const step: IStep = response.items.map((s) => s.fields)[ 0 ];

    //const colors = yield getColorsFromCMS();
    const color = setColorsForCurrentStep(colors, step);
    setColorToTheme(color);
    yield put(getStepsColorFromCMS.success(colors));
    yield put(getStepFromCMSByDay.success(step));
    
    // wait!
    // delay for theme applying
    yield call(delay, 500);

    yield put(getStepFromCMSByDay.success(step));

    yield put(decrementRequestCount());
  } catch (e) {
    yield put(getStepFromCMSByDay.failure(e.message));

    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }
}

export function* getAllStepsSaga() {
  yield takeLatest(GET_ALL_STEPS_FROM_CMS[REQUEST], getAllStepsFromCMSWorker);
}

export function* getStepByDaySaga() {
  yield takeLatest(GET_STEP_FROM_CMS_BY_DAY[REQUEST], getStepFromCMSByDayWorker);
}

