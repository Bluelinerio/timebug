// @flow

import { AsyncStorage }                       from "react-native";
import { put, takeLatest, select, cancelled } from 'redux-saga/effects';
import {
  GET_NEXT_FORM,
  SUCCESS,
}                                             from '../constants/actionTypes';
import { getUserProgress }                    from '../actions/user';
import {
  goToWorkBookScreen,
  goToCongratulationsScreen,
}                                             from '../actions/navigate';
import { startRequest, finishRequest }        from '../actions/network';
import { setNextForm }                        from '../actions/form';
import networkState                           from '../utils/networkState';
import formConfig                             from '../screens/WorkBookScreen/components/forms';
import { goBack }                             from '../HOC/navigation';
import { addStep }                            from "../mutations/user";
import { client }                             from "../mutations/config";

function* getNextForm(action) {
  try {
    yield put(startRequest());
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
      yield put(setNextForm({
        model,
        value,
        isGoBack,
        currentStep,
        currentForm: currentForm - 1,
      }));
      const progress = {
        step: currentStep,
        formStep: currentForm,
      };
      yield put(getUserProgress.success(progress));

      if (isGoBack) {
        goBack()
      } else if (!withoutRedirect) yield put(goToWorkBookScreen());

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
        yield put(goToCongratulationsScreen());
      }
    }

    yield put(finishRequest());
  } catch (e) {
    yield put(finishRequest());
  } finally {
    if (yield cancelled())
      yield put(finishRequest());
  }
}

export function* formLoaderSaga() {
  yield takeLatest(GET_NEXT_FORM, getNextForm);
}

