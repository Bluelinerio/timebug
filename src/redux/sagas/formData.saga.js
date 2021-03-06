// @flow
import {
  throttle,
  actionChannel,
  fork,
  call,
  cancelled,
  put,
  putResolve,
  take,
  takeLatest,
  select
} from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { createForm, updateForm } from '../../services/apollo';
import type {
  CreateFormArgs,
  UpdateormArgs,
  Form
} from '../../services/apollo/models';
import { request } from '../../Modules/redux-saga-request';

import { SYNC_FORM_DATA } from '../actionTypes';
import { GET_USER, updateUser } from '../actions/user.actions';
import {
  incrementFormDataQueue,
  decrementFormDataQueue
} from '../actions/formData.actions';
import { client } from '../../services/apollo';
import selectors from '../selectors';
import { diffObjs } from '../utils/diffObjs';

export const UPDATE_AND_CREATE_FORMS = 'UPDATE_AND_CREATE_FORMS';
// export const LOG = 'LOG';
//const log = payload => yield put({ type: LOG,  payload });
const log = payload => console.log(payload);

function* mySelectors(props) {
  const keys = Object.keys(props);
  let result = {};
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const selector = props[key];
    result[key] = yield select(selector);
  }
  return result;
}

const formDataFromForm = (forms: [Form]) =>
  forms.reduce(
    (forms, form) => ({
      ...forms,
      [form.stepId]: form.data
    }),
    {}
  );

function* reviewCurrentUserFormsAndFormDataCompareAndUpfateToState() {
  //const userId = yield select(selectors.userId)
  log({
    info: 'Started reviewing differences between form data and user forms'
  });

  const { userId, completedFormsData, formData, formWithStepId } = yield call(
    mySelectors,
    {
      userId: selectors.userId,
      completedFormsData: selectors.completedFormsData,
      formWithStepId: selectors.formWithStepId,
      formData: selectors.formData
    }
  );

  if (!userId) {
    const error =
      'userId is expected while reviewing differences between form data and user forms';
    if (__DEV__) {
      throw error;
    } else {
      log({
        info:
          'Compelted reviewing differences between form data and user forms',
        error
      });
    }
  }

  const { difference, onlyOnLeft } = diffObjs(formData, completedFormsData);
  if (!difference && !onlyOnLeft) {
    log({
      info:
        'Compelted reviewing differences between form data and user forms. No sync is needed'
    });
    return;
  }

  const updates =
    difference &&
    Object.keys(difference).reduce((payload, key) => {
      const stepId = parseInt(key);
      const id = formWithStepId(stepId).id;
      const data = difference[key].leftValue;
      return [
        ...payload,
        {
          id,
          data,
          userId
        }
      ];
    }, []);

  const creates =
    onlyOnLeft &&
    Object.keys(onlyOnLeft).reduce((payload, key) => {
      const stepId = parseInt(key);
      const data = onlyOnLeft[key];
      return [
        ...payload,
        {
          data,
          stepId,
          userId
        }
      ];
    }, []);

  log({
    info:
      'Commencing with sync request after reviewing differences between form data and user forms',
    creates,
    updates
  });

  yield put({
    type: UPDATE_AND_CREATE_FORMS,
    payload: {
      creates,
      updates
    }
  });
}

export function* watchSyncFormData() {
  // here the assumptions is that the formData reducer will always Hydrate before the GET_USER action return, becuase we never
  const requestChan = yield actionChannel([GET_USER.SUCCEEDED, SYNC_FORM_DATA]);
  while (true) {
    yield take(requestChan);
    const payload = yield call(
      reviewCurrentUserFormsAndFormDataCompareAndUpfateToState
    );
    if (payload && (payload.updates || payload.creates)) {
      yield put({
        type: UPDATE_AND_CREATE_FORMS,
        payload
      });
      call(syncRequests, paylload);
    }
  }
}

function* syncRequests(payload) {
  const { updates, creates } = payload;

  yield delay(1);

  const userId = yield select(selectors.userId);
  if (!userId) return;

  // run serially, ideally we want to be able to compose those requests, and send them in one go...
  yield putResolve(incrementFormDataQueue());

  let _user = null;
  if (updates && updates.length) {
    for (let index = 0; index < updates.length; index++) {
      const update = updates[index];
      if (__DEV__) {
        testUpdate(update);
      }
      const { user } = yield call(updateForm, { ...update, userId });
      _user = user;
    }
  }
  if (creates && creates.length) {
    for (let index = 0; index < creates.length; index++) {
      const create = creates[index];
      if (__DEV__) {
        testCreate(create);
      }
      const { user } = yield call(createForm, { ...create, userId });
      _user = user;
    }
  }

  if (_user) {
    yield putResolve(updateUser(_user));
  }

  yield putResolve(decrementFormDataQueue());

  const formDataRequestCount = yield select(
    state => state.formData.requestCount
  );

  if (formDataRequestCount !== 0) {
    const error = `Compelted synching differences between form data and user forms with formDataRequestCount: ${formDataRequestCount}`;
    if (__DEV__) {
      throw error;
    } else {
      log({
        info: 'Compelted synching differences between form data and user forms.'
      });
    }
  } else {
    log({
      info: 'Compelted synching differences between form data and user forms.'
    });
  }
}

const testCreate = create => {
  if (!create.stepId || create.stepId < 0 || create.stepId > 30) {
    throw `missing or incorrect stepId in create:${create}`;
  }
  if (!create.data) {
    throw `missing data in create:${create}`;
  }
};

const testUpdate = (update: UpdateormArgs) => {
  if (!update.id) {
    throw `missing id in update:${update}`;
  }
  if (!update.data) {
    throw `missing data in update:${update}`;
  }
};
