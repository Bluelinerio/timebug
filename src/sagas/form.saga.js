// @flow

import { AsyncStorage }                       from "react-native";
import { put, takeLatest, select, cancelled } from 'redux-saga/effects';
import {
  GET_NEXT_FORM,
  SET_NEXT_FORM,
  PENDING_END,
  PENDING_START,
  GO_TO_CONGRATULATIONS_SCREEN,
  GO_TO_WORKBOOK_SCREEN, SUCCEEDED,
  GET_USER_PROGRESS,
}                                             from '../constants/actionTypes';
import networkState                           from '../utils/networkState';
import formConfig                             from '../screens/WorkBookScreen/components/forms';
import { goBack }                             from '../HOC/navigation';
import { addStep }                            from "../mutations/user";
import { client }                             from "../mutations/config";

function* getNextForm(action) {
  try {
    yield put({ type: PENDING_START });
    yield networkState.haveConnection();

    let {
          currentStep,
          currentForm,
          withoutRedirect,
          isGoBack,
          value,
        } = action;

    if (isGoBack) {
      currentForm--;
    } else {
      currentForm++;
    }

    if (currentStep && currentForm && formConfig[ currentStep ] && formConfig[ currentStep ][ currentForm ]) {
      let model = formConfig[ currentStep ][ currentForm ];
      yield put({
        type: SET_NEXT_FORM,
        model,
        value,
        isGoBack,
        currentStep,
        currentForm: currentForm - 1,
      });
      yield put({
        type: GET_USER_PROGRESS + SUCCEEDED,
        progress: {
          step: currentStep,
          formStep: currentForm,
        },
      });

      if (isGoBack) {
        goBack()
      } else if (!withoutRedirect) yield put({ type: GO_TO_WORKBOOK_SCREEN });

    } else {
      yield put({
        type: SET_NEXT_FORM,
        model: null,
        value,
        currentStep,
        currentForm: currentForm - 1,
      });

      if (isGoBack) {
        goBack()
      } else {
        let userID = yield AsyncStorage.getItem('@2020:userId');

        let formData = yield select((state) => state.form.data);

        yield client.mutate({
          mutation: addStep,
          variables: {
            userId: userID,
            step: {
              stepId: currentStep,
              data: formData,
            },

          },
        });
        yield put({ type: GO_TO_CONGRATULATIONS_SCREEN });
      }
    }

    yield put({ type: PENDING_END });
  } catch (e) {
    yield put({ type: PENDING_END });
  } finally {
    if (yield cancelled())
      yield put({ type: PENDING_END });
  }
}

export function* formLoaderSaga() {
  yield takeLatest(GET_NEXT_FORM, getNextForm);
}

