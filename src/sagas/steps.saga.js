// @flow

import { call, put, takeLatest }                              from 'redux-saga/effects';
import { delay }                                              from 'redux-saga'
import theme                                                  from 'react-native-theme';
import {
  FAILED,
  SUCCEEDED,
  GET_ALL_STEPS_FROM_CMS,
  GET_STEPS_FROM_CMS_BY_DAY,
  GET_USER_PROGRESS,
  PENDING_END,
  PENDING_START,
}                                                             from '../constants/actionTypes';
import { contentfulClient }                                   from "../contentful";
import networkState                                           from '../utils/networkState';
import { IColors, IStep, IColorSchema }                                     from "../interfaces";
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
  }, 'custom');
  theme.active('custom');
  // delay for theme applying
  yield call(delay, 500);
}

function* getAllStepsFromCMS() {
  try {
    yield put({ type: PENDING_START });

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      content_type: CONTENTFUL_CONTENT_STEP,
    });

    const steps: IStep[] = response.items.map((step) => {
      return step.fields;
    });

    yield put({
      type: GET_ALL_STEPS_FROM_CMS + SUCCEEDED,
      steps,
    });

    yield put({ type: PENDING_END });
  } catch (e) {
    yield put({
      type: GET_ALL_STEPS_FROM_CMS + FAILED,
      message: e.message,
    });

    yield put({ type: PENDING_END });
  }
}

function* getStepsFromCMSByDay(action: { day: number }) {
  try {
    yield put({ type: PENDING_START });

    yield networkState.haveConnection();

    let response = yield contentfulClient.getEntries({
      'fields.number': action.day,
      content_type: CONTENTFUL_CONTENT_STEP,
    });

    const step: IStep = response.items.map((s) => s.fields)[ 0 ];

    let colors = yield getColorsFromCMS();
    yield setColorsForCurrentStep(colors, step);

    if (action.day > 1) {
      yield put({
        type: GET_USER_PROGRESS + SUCCEEDED,
        progress: {
          step: 'step_' + action.day,
          formStep: 1,
        },
      });
    }

    yield put({
      type: GET_STEPS_FROM_CMS_BY_DAY + SUCCEEDED,
      step,
    });

    yield put({ type: PENDING_END });
  } catch (e) {
    yield put({
      type: GET_STEPS_FROM_CMS_BY_DAY + FAILED,
      message: e.message,
    });

    yield put({ type: PENDING_END });
  }
}

export function* getAllStepsSaga() {
  yield takeLatest(GET_ALL_STEPS_FROM_CMS, getAllStepsFromCMS);
}

export function* getStepByDaySaga() {
  yield takeLatest(GET_STEPS_FROM_CMS_BY_DAY, getStepsFromCMSByDay);
}

