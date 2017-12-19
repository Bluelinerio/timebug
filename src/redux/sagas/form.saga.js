// @flow

import { AsyncStorage }                       from "react-native";
import { fork, call, put, takeLatest, select, cancelled } from 'redux-saga/effects';
import {
  GET_NEXT_FORM,
  SUCCESS,
  POPULATE_CURRENT_FORM_VALUE,
  LOGOUT
}                                             from '../actionTypes';
import { SET_USER_STATE }                     from '../actions'
import { GET_USER, updateProgress }           from '../actions/user.actions'
import {
  goToAssignmentDoneScreen,
}                                             from '../actions/nav.actions';
import {
  incrementRequestCount,
  decrementRequestCount
}                                             from '../actions/network.actions';
import { setForm, populateFormValue }         from '../actions/form.actions';
import networkState                           from '../../utils/networkState';
import formConfig                             from '../../screens/WorkBookScreen/forms';
import { goBack }                             from '../../HOC/navigation';
import { addStep }                            from '../../services/apollo'
import selectors                              from '../selectors';
import type { Progress, User }                from "../../services/apollo/models";


const STEP_CHANGE_UP = 'STEP_CHANGE_UP'
const STEP_CHANGE_DOWN = 'STEP_CHANGE_DOWN'
const FORM_CHANGE_UP = 'FORM_CHANGE_UP'
const FORM_CHANGE_DOWN = 'FORM_CHANGE_DOWN'
const NO_CHANGE = 'NO_CHANGE'

type ProgressChange = STEP_CHANGE_UP | STEP_CHANGE_DOWN | FORM_CHANGE_UP | FORM_CHANGE_DOWN | NO_CHANGE;
type FormModel = any;


const getFormModel = (progress:Progress): ?FormModel => {
  const getFormsForStep = (s: number) : ?Object => formConfig[ s ]
  const formsForStep = getFormsForStep(progress.step) 
  if (formsForStep) {
    return formsForStep[ progress.form ]
  }
  return null
}

function * getNextFormModelIfAvailableForCurrentStep() : ?{ nextFormModelForThisStep:FormModel, newProgress:Progress } {
  const user: ?User = yield select(selectors.user);
  const totalNumberOfSteps = yield select(selectors.totalNumberOfSteps);
  if(!user || !totalNumberOfSteps) {
    return null;
  }
  const { step, form} = user.progress;
  if (step < totalNumberOfSteps) {
      const nextForm = form + 1;
      const nextFormModelForThisStep = getFormModel({step, form:nextForm});
      if (nextFormModelForThisStep) {
        const newProgress = {step, form: nextForm }
        return {
          nextFormModelForThisStep,
          newProgress
        }
     }
  }
  return null;
}

function * updateFormAfterChangeInProgress() {
  const isLoggedIn = yield select(selectors.isLoggedIn);
  if (!isLoggedIn) {
    return;
  }
  const { step, form } = yield select(selectors.progress);
  if(step && form) {
    const nextFormModel = getFormModel({step, form});
    yield put(setForm(nextFormModel))
  }
}


function * getNextProgress(): { newProgress: Progress, change:ProgressChange } {
  const res = yield call(getNextFormModelIfAvailableForCurrentStep);
  if (res && res.nextFormModelForThisStep) {
    return { change: FORM_CHANGE_UP, newProgress: res.newProgress }
  } else {
    const totalNumberOfSteps = yield select(selectors.totalNumberOfSteps);
    const progress = yield select(selectors.progress);
    const { step, form } = progress;
    if (step < totalNumberOfSteps) {
      return { change: STEP_CHANGE_UP, newProgress: { step: step + 1, form} }
    } else {
      return { change: NO_CHANGE, newProgress: progress }
    }
  }
}

function * selectProgressAndSubmitValue(action: {value : any }) {
  const progress = yield select(state => state.user.progress);
  yield put(populateFormValue(action.value, progress));
  const res = yield getNextProgress();
  if (!res) {
    return;
  }

  const { newProgress, change } = res;
  switch (change) {
    case STEP_CHANGE_UP:
      yield put(goToAssignmentDoneScreen());
      const user = yield select(selectors.user);
      yield call( addStep, { userId: user.id, stepId: progress.step, data: action.value } ); 
    case STEP_CHANGE_DOWN:
    case FORM_CHANGE_UP:
    case FORM_CHANGE_DOWN:
      yield put(updateProgress.withProgress(newProgress));
      break;
    case NO_CHANGE:
    default:
      break;
  }
}

// const formReducerSaga = (action:FormChangeAcion, state:FormState)
// {
//   const {field, form, step, value } = action;
//   yield put(incrementLoadingIndicator())
//   const generator:FormReducerGenerator = yield findReducerGenerator(action);
//   const result = yield call(generator, action, state);
//   yield put(decrementLoadingIndicator())
//   if(result.error) {
      
//   }
//   yield put(updateFormState(result.newState))
// }

function * watchPopulateCurrentFormValue() {
  yield takeLatest(POPULATE_CURRENT_FORM_VALUE, selectProgressAndSubmitValue) 
}

function * watchForUpdateInUserProgress() {
  yield takeLatest([SET_USER_STATE, GET_USER.SUCCEEDED, updateProgress.UPDATE, LOGOUT], updateFormAfterChangeInProgress) 
}

export function* formLoaderSaga() {
  yield fork(watchForUpdateInUserProgress)
  yield fork(watchPopulateCurrentFormValue)
  // yield fork(watchForChangesInForm)
}

