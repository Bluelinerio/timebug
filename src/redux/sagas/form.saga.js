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
  goToWorkBookScreen,
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

function * getPreviousFormModelIfAvailableForCurrentStep() : ?{ nextFormModelForThisStep:FormModel, newProgress:Progress } {
  const user : ?User = yield select(selectors.user);
  const totalNumberOfSteps = yield select(selectors.totalNumberOfSteps);
  if(!user || !totalNumberOfSteps) {
    return null;
  }
  const { step, form} = user.progress;
  if(form > 1) {
    const nextForm = form - 1;
      const nextFormModelForThisStep = getFormModel({step, form:nextForm});
      if (nextFormModelForThisStep) {
        const newProgress = {step, form: nextForm }
        return {
          nextFormModelForThisStep,
          newProgress
        }
     }
  }
  return null
}


function * submit() {
  const { id , progress} = yield select(state => state.user);
  const formData = yield select((state) => state.form.data);
  yield call( addStep, { userId:id, stepId:progress.step, data:formData} );
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
  const { nextFormModelForThisStep, newProgress } = yield call(getNextFormModelIfAvailableForCurrentStep);
  if (nextFormModelForThisStep) {
    return { change: FORM_CHANGE_UP, newProgress }
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

function * getPreviousProgress(goBackInSteps : boolean = false): { newProgress: Progress, change:ProgressChange } {
  const { nextFormModelForThisStep, newProgress } = yield call(getPreviousFormModelIfAvailableForCurrentStep);
  if (nextFormModelForThisStep) {
    return { change: FORM_CHANGE_DOWN, newProgress }
  }
  const progress = yield select(selectors.progress);
  const { step, form } = progress;
  if (goBackInSteps && step > 1) {
    return { change: STEP_CHANGE_DOWN, newProgress: { step: step - 1, form }}
  }
  return { newProgress: progress, change: NO_CHANGE };
}


function * selectProgressAndSubmitValue(action: {value : any }) {
  const progress = yield select(state => state.user.progress);
  yield put(populateFormValue(action.value, progress));
  const { newProgress, change } = yield getNextProgress();
  switch (change) {
    case STEP_CHANGE_UP:
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

function* _getNextForm() {
  try {
    yield put(incrementRequestCount)
    yield call(networkState.haveConnection);
    const {
      step,
      form,
    } = yield select(state => state.user.progress);
    const current = getFormModel({step, form});
    const next = getFormModel({step, form});
    const { model, data } = yield select(state => state.form)


    if (currentStep && currentForm && formConfig[ currentStep ] && formConfig[ currentStep ][ currentForm ]) {
      let model = formConfig[ currentStep ][ currentForm ];
      yield put(setNextForm({
        model,
        value,
        isGoBack,
        currentStep,
        currentForm: currentForm - 1,
      }));
      yield put(updateProgress.withProgress({
        step: currentStep,
        form: currentForm,
      }));

      if (isGoBack) {
        goBack()
      } else if (!withoutRedirect) {
        yield put(goToWorkBookScreen())
      }

    } else {
      yield put(setNextForm({
        model: null,
        value,
        currentStep,
        currentForm: currentForm - 1,
      }));

      if (isGoBack) {
        goBack()
      } else {
        let userId = yield AsyncStorage.getItem('@2020:userId');

        let formData = yield select((state) => state.form.data);

        yield call( addStep, {userId, stepId:currentStep, data:formData} );
        yield put(goToAssignmentDoneScreen());
      }
    }

    yield put(decrementRequestCount);
  } catch (e) {
    yield put(decrementRequestCount);
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount);
  }
}

function * watchPopulateCurrentFormValue() {
  yield takeLatest(POPULATE_CURRENT_FORM_VALUE, selectProgressAndSubmitValue) 
}

function * watchForUpdateInUserProgress() {
  yield takeLatest([SET_USER_STATE, GET_USER.SUCCEEDED, updateProgress.UPDATE, LOGOUT], updateFormAfterChangeInProgress) 
}

export function* formLoaderSaga() {
  yield fork(watchForUpdateInUserProgress)
  yield fork(watchPopulateCurrentFormValue)
  //yield takeLatest(GET_NEXT_FORM, _getNextForm)
}

