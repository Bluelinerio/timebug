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
import { getAllStepsFromCMS, getStepFromCMSByDay }            from '../actions/steps';
import { contentfulClient }                                   from "../contentful";
import networkState                                           from '../utils/networkState';
import { IColors, IStep, IColorSchema }                       from "../interfaces";
import { CONTENTFUL_CONTENT_COLORS, CONTENTFUL_CONTENT_STEP } from "../constants/constants";


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

function* setColorsForCurrentStep(colors: IColors, step: IStep) {
  let color = null;
  if (colors.days[ step.number ]) {
    color = colors.days[ step.number ]
  }
  if (!color) {
    color = colors.types[ step.type ]
  }
  if (!color) return null;


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
  // delay for theme applying
  yield call(delay, 500);
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

    let colors = yield getColorsFromCMS();
    yield setColorsForCurrentStep(colors, step);

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

