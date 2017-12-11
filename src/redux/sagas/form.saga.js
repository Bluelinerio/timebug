// @flow

import { AsyncStorage }                       from "react-native";
import { fork, call, put, takeLatest, select, cancelled } from 'redux-saga/effects';
import {
  GET_NEXT_FORM,
  SUCCESS,
  POPULATE_CURRENT_FORM_VALUE
}                                             from '../actionTypes';
import { SET_USER_STATE }                     from '../actions'
import { GET_USER, updateProgress, LOGOUT }   from '../actions/user.actions'
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


const getFormsForStep = (stepNumber:number) : ?Object => formConfig[ stepNumber ]
const getModel = (stepNumber:number, formNumber: number): ?any => {
  const formsForStep = getFormsForStep(stepNumber) 
  if (formsForStep) {
    return formsForStep[ formNumber ]
  }
  return null
}
function * submit() {
  const { id , progress} = yield select(state => state.user);
  const formData = yield select((state) => state.form.data);
  yield call( addStep, { userId:id, stepId:progress.step, data:formData} );
}

function * update() {
  const { step, form }= yield select(state => state.user.progress);
  if(step && form) {
    const next = getModel(step, form);
    yield put(setForm(next))
  }
}

function * selectProgressAndSubmitValue(action:{value:any}) {
  const progress = yield select(state => state.user.progress);
  debugger;
  yield put(populateFormValue(action.value, progress));
}

function* _getNextForm() {
  try {
    yield put(incrementRequestCount)
    yield call(networkState.haveConnection);
    const {
      step,
      form,
    } = yield select(state => state.user.progress);
    const current = getModel(currentStep, currentForm);
    const next = getModel(currentStep, currentForm);
    const { model, data } = yield select(state => state.form)

    debugger;
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
  yield takeLatest([SET_USER_STATE, GET_USER.SUCCEEDED, updateProgress.UPDATE, LOGOUT.type], update) 
}

export function* formLoaderSaga() {
  yield fork(watchForUpdateInUserProgress)
  yield fork(watchPopulateCurrentFormValue)
  //yield takeLatest(GET_NEXT_FORM, _getNextForm)
}

