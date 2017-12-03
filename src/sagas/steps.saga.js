// @flow

import { call, cancelled, put, takeLatest, select}            from 'redux-saga/effects';
import { delay }                                              from 'redux-saga'
import theme                                                  from 'react-native-theme';
import {
  REQUEST,
  GET_ALL_STEPS_FROM_CMS,
  GET_STEP_FROM_CMS_BY_STEP,
}                                                             from '../constants/actionTypes';
import {
  incrementRequestCount,
  decrementRequestCount
}                                                             from '../actions/network';
import { getAllStepsFromCMS, getStepFromCMSByStep, getStepsColorFromCMS }
                                                              from '../actions/steps';
import { contentfulClient, CONTENTFUL_CONTENT_COLORS, CONTENTFUL_CONTENT_STEP }
                                                              from "../clients/contentful";
import networkState                                           from '../utils/networkState';
import { IColors, IStep, IColorSchema }                       from "../interfaces";
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
    assignmentDoneScreenTextColor: {
      color,
    },
    themeBackgroundColor: {
      backgroundColor: color,
      borderColor: color
    },
  }, color);
  theme.active(color);
}

function setColorsForCurrentStep(colors: IColors, step: IStep) {
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

function* getStepFromCMSByStepWorker(action: { number: number }) {
  const maxStep = yield select(state => {
    return state.steps.allSteps.length;
  });
  if (action.number > maxStep) {
    yield put(getStepFromCMSByStep.failure("last step reached"));
  }
  else{
    try {
      yield put(incrementRequestCount());
  
      yield networkState.haveConnection();
  
      let response = yield contentfulClient.getEntries({
        'fields.number': action.number,
        content_type: CONTENTFUL_CONTENT_STEP,
      });
  
      const step: IStep = response.items.map((s) => s.fields)[ 0 ];
  
      //const colors = yield getColorsFromCMS();
      const color = setColorsForCurrentStep(colors, step);
      setColorToTheme(color);
      yield put(getStepsColorFromCMS.success(colors));
      yield put(getStepFromCMSByStep.success(step));
      // wait!
      // delay for theme applying
      yield call(delay, 500);
  
      yield put(getStepFromCMSByStep.success(step));
  
      yield put(decrementRequestCount());
    } catch (e) {
      yield put(getStepFromCMSByStep.failure(e.message));
      yield put(decrementRequestCount());
    } finally {
      if (yield cancelled())
        yield put(decrementRequestCount());
    }
  }
}

export function* getAllStepsSaga() {
  yield takeLatest(GET_ALL_STEPS_FROM_CMS[REQUEST], getAllStepsFromCMSWorker);
}

export function* getStepByDaySaga() {
  yield takeLatest(GET_STEP_FROM_CMS_BY_STEP[REQUEST], getStepFromCMSByStepWorker);
}

