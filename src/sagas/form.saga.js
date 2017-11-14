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
  goToAssignmentDoneScreen,
}                                             from '../actions/navigate';
import {
  incrementRequestCount,
  decrementRequestCount
}                                             from '../actions/network';
import { setNextForm }                        from '../actions/form';
import networkState                           from '../utils/networkState';
import formConfig                             from '../screens/WorkBookScreen/forms';
import { goBack }                             from '../HOC/navigation';
import { client, addStep }                    from '../clients/apollo'

function* getNextForm(action) {
  try {
    yield put(incrementRequestCount());
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

        //TODO: Add step mutation to new graphcool mutation
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
        yield put(goToAssignmentDoneScreen());
      }
    }

    yield put(decrementRequestCount());
  } catch (e) {
    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }
}

export function* formLoaderSaga() {
  yield takeLatest(GET_NEXT_FORM, getNextForm);
}

