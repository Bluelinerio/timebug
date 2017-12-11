// @flow

import { AsyncStorage }                       from "react-native";
import { call, put, takeLatest, select, cancelled } from 'redux-saga/effects';
import {
  GET_NEXT_FORM,
  SUCCESS,
}                                             from '../actionTypes';
import { updateProgress }                     from '../actions/user.actions'
import {
  goToWorkBookScreen,
  goToAssignmentDoneScreen,
}                                             from '../actions/nav.actions';
import {
  incrementRequestCount,
  decrementRequestCount
}                                             from '../actions/network.actions';
import { setNextForm }                        from '../actions/form.actions';
import networkState                           from '../../utils/networkState';
import formConfig                             from '../../screens/WorkBookScreen/forms';
import { goBack }                             from '../../HOC/navigation';
import { addStep }                            from '../../services/apollo'

function* getNextForm(action) {
  try {
    yield put(incrementRequestCount());
    yield call(networkState.haveConnection);

    const {
          currentStep,
          currentForm,
          withoutRedirect,
          isGoBack,
          value,
        } = yield select(state => state.form);

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
      yield put(updateProgress.withProgress({
        step: currentStep,
        formStep: currentForm,
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

