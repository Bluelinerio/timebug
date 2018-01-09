// // @flow

// import { AsyncStorage }                       from "react-native";
// import { take, fork, call, put, takeLatest, select, cancelled } from 'redux-saga/effects';
// import {
//   GET_NEXT_FORM,
//   SUCCESS,
//   LOGOUT,
//   PERSISTE_FORM_VALUE,
//   SUBMIT_FORM_VALUE,
// }                                             from '../actionTypes';
// import { SET_USER_STATE }                     from '../actions'
// import { GET_USER }                           from '../actions/user.actions'
// import {
//   goToAssignmentDoneScreen,
// }                                             from '../actions/nav.actions';
// import {
//   setForm,
//   updateForm,
//   incrementFormQueue,
//   decrementFormQueue
// }                                             from '../actions/forms.actions';
// import {
//   incrementFormDataQueue,
//   decrementFormDataQueue,
// }                                             from '../actions/formData.actions';
// import networkState                           from '../../utils/networkState';
// import formConfig                             from '../../screens/WorkBookScreen/forms';
// import { goBack }                             from '../../HOC/navigation';
// import { addStep }                            from '../../services/apollo'
// import selectors                              from '../selectors';
// import type { Progress, User }                from "../../services/apollo/models";
// import allFormBusinessLogic                   from '../../screens/WorkBookScreen/forms/businessLogic';

// const STEP_CHANGE_UP = 'STEP_CHANGE_UP'
// const STEP_CHANGE_DOWN = 'STEP_CHANGE_DOWN'
// const FORM_CHANGE_UP = 'FORM_CHANGE_UP'
// const FORM_CHANGE_DOWN = 'FORM_CHANGE_DOWN'
// const NO_CHANGE = 'NO_CHANGE'

// type ProgressChange = STEP_CHANGE_UP | STEP_CHANGE_DOWN | FORM_CHANGE_UP | FORM_CHANGE_DOWN | NO_CHANGE;
// type FormModel = any;

// const numberOfSteps = formConfig.length;
// if(numberOfSteps !== 30) {
//   throw 'expected form models to have 30 items';
// }
// const getFormModel = (step: number, form: number): ?FormModel => {
//   const getFormsForStep = (s: number) : ?any => formConfig[ s ]
//   const formsForStep = getFormsForStep(step) 
//   if (formsForStep) {
//     return formsForStep[ form ]
//   }
//   return null
// }

// type NextFormModelResult = { nextFormModel: FormModel, step: number, form:number }

// function * getNextFormModelIfAvailable(step: number, form: number) : ?NextFormModelResult {
//   if (step < numberOfSteps) {
//       const nextFormModel = getFormModel({ step, form: form + 1 });
//       if (nextFormModel) {
//         return {
//           nextFormModel,
//           step,
//           form: form + 1
//         }
//      }
//   }
//   return null;
// }

// function * updateFormAfterChangeInProgress() {
//   const isLoggedIn = yield select(selectors.isLoggedIn);
//   if (!isLoggedIn) {
//     return;
//   }
//   const { step, form } = yield select(selectors.progress);
//   if(step && form) {
//     const nextFormModel = getFormModel({step, form});
//     yield put(setForm(nextFormModel))
//   }
// }


// function * getNextProgress(progress: Progress ) : { type: ProgressChange, newProgress: Progress } {
//   const { step, form } = progress;
//   const res = yield call(getNextFormModelIfAvailable, step, form);
//   if (res && res.nextFormModel) {
//     return { type: FORM_CHANGE_UP, newProgress: res.newProgress }
//   } else {
//     if (step < numberOfSteps) {
//       return { type: STEP_CHANGE_UP, newProgress: { step: step + 1, form: 1 } }
//     } else {
//       return { type: NO_CHANGE, newProgress: progress }
//     }
//   }
// }

// function * selectProgressAndSubmitValue( action: { payload: { progress: Progress } }) {

//   const { step , form } = progress;

//   if (step < numberOfSteps) {
//     const nextFormModel = getFormModel({ step, form: form + 1 });
//     if (nextFormModel) {
//       return {
//         nextFormModel,
//         step,
//         form: form + 1
//       }
//     }

//   const res = yield call(getNextProgress, progress)
//   debugger;
//   if (!res) {
//     return;
//   }

//   const { newProgress, change } = res;
//   switch (change) {
//     case STEP_CHANGE_UP:
//       yield put(updateProgress.withProgress(newProgress));
//       yield put(goToAssignmentDoneScreen(newProgress));
//       const user = yield select(selectors.user);
//       yield call( addStep, { userId: user.id, stepId: progress.step, data: action.value || {} } );
//       break;
//     case STEP_CHANGE_DOWN:
//     case FORM_CHANGE_UP:
//     case FORM_CHANGE_DOWN:
//       yield put(updateProgress.withProgress(newProgress));
//       break;
//     case NO_CHANGE:
//     default:
//       break;
//   }
// }

// function * findReducerGenerator(action) {
//   let generator = null;
//   let businessLogic = allFormBusinessLogic;

//   for (let i = 0; i < action.path.length + 2; i++) {
//     if(!businessLogic) {
//       break;
//     } else if (i === 0) {
//       businessLogic = businessLogic[action.step];
//     } else if (i === 1) {
//       businessLogic = businessLogic[action.form];
//     } else {
//       const field = action.path[i - 2];
//       if (i - 2 < action.path.length - 1 && typeof businessLogic[field] === 'object') {
//         businessLogic = businessLogic[field];
//       } else if (i - 2 === action.path.length - 1 && typeof businessLogic[field] === 'function') {
//         generator = businessLogic[field];
//       } else {
//         break;
//       }
//     }
//   }

//   return generator;
// }

// function * formReducerSaga(action) {
//   yield put(incrementFormQueue());
//   // Remove list indexes from path, can be modified in the future if business logic needs the index
//   const path = action.path.filter(field => typeof field !== 'number');
//   const generator = yield findReducerGenerator({...action, path});
//   if (generator) {
//     const result = yield call(generator, action, );
//     yield put(updateForm(result.model));
//   }

//   yield put(decrementFormQueue());
// }

// function * watchSubmitCurrentFormValue() {
//   yield takeLatest(SUBMIT_FORM_VALUE, selectProgressAndSubmitValue) 
// }

// function * watchForUpdateInUserProgress() {
//   yield takeLatest([SET_USER_STATE, GET_USER.SUCCEEDED, LOGOUT], updateFormAfterChangeInProgress) 
// }

// function * watchForChangesInForm() {
//   yield takeLatest(PERSISTE_FORM_VALUE, formReducerSaga) 
// }

export function* formLoaderSaga() {
  // yield fork(watchForUpdateInUserProgress)
  // yield fork(watchSubmitCurrentFormValue)
  // yield fork(watchForChangesInForm)
}

