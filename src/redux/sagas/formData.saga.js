// @flow
import {
  actionChannel,
  call,
  fork,
  put,
  putResolve,
  take,
  select,
  takeLatest,
  race
} from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { createForm, updateForm, resetUserSteps } from '../../services/apollo'
import type { UpdateormArgs } from '../../services/apollo/models'

import { SYNC_FORM_DATA, RESET_FORMS_REQUEST, RESET_FORMS, START_LOADING_FORMDATA, STOP_LOADING_FORMDATA } from '../actionTypes'
import { GET_USER, updateUser, resetUserSteps as resetAction } from '../actions/user.actions'
import {
  incrementFormDataQueue,
  decrementFormDataQueue,
  unsetLoadingFormData,
  setLoadingFormData,
  stopLoadingFormData,
  startLoadingFormData
} from '../actions/formData.actions'
import selectors from '../selectors'
import { diffObjs } from '../utils/diffObjs'

export const UPDATE_AND_CREATE_FORMS = 'UPDATE_AND_CREATE_FORMS'

// export const LOG = 'LOG';
//const log = payload => yield put({ type: LOG,  payload });
const log = payload => console.log(payload)

const range = (start, end) =>
  Array(end - start)
    .fill()
    .map((v, i) => i + start)

const stepIds = range(1, 31).map((v, i) => v.toString())

const removeAllKeyButStepIds = (obj: {}) =>
  Object.keys(obj)
    .filter(k => stepIds.includes(k))
    .reduce(
      (sum, k) => ({
        ...sum,
        [k]: obj[k]
      }),
      {}
    )

function* mySelectors(props) {
  const keys = Object.keys(props)
  let result = {}
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    const selector = props[key]
    result[key] = yield select(selector)
  }
  return result
}

function* reviewCurrentUserFormsAndFormDataCompareAndUpfateToState() {
  //const userId = yield select(selectors.userId)
  yield put(startLoadingFormData())
  
  log({
    info: 'Started reviewing differences between form data and user forms'
  })

  const { userId, completedFormsData, formData, formWithStepId } = yield call(
    mySelectors,
    {
      userId: selectors.userId,
      completedFormsData: selectors.completedFormsData,
      formWithStepId: selectors.formWithStepId,
      formData: selectors.formData
    }
  )

  if (!userId) {
    const error =
      'userId is expected while reviewing differences between form data and user forms'
    if (__DEV__) {
      throw error
    } else {
      log({
        info:
          'Completed reviewing differences between form data and user forms',
        error
      })
    }
  }

  const { difference, onlyOnLeft } = diffObjs(
    removeAllKeyButStepIds(formData),
    removeAllKeyButStepIds(completedFormsData)
  )
  
  if (!difference && !onlyOnLeft) {
    yield put(stopLoadingFormData())
    log({
      info:
        'Completed reviewing differences between form data and user forms. No sync is needed'
    })
    return
  }

  const updates =
    difference &&
    Object.keys(difference).reduce((payload, key) => {
      const stepId = parseInt(key)
      const id = formWithStepId(stepId).id
      const data = difference[key].leftValue
      return [
        ...payload,
        {
          id,
          data,
          userId
        }
      ]
    }, [])

  const creates =
    onlyOnLeft &&
    Object.keys(onlyOnLeft).reduce((payload, key) => {
      const stepId = parseInt(key)
      const data = onlyOnLeft[key]

      return [
        ...payload,
        {
          data,
          stepId,
          userId
        }
      ]
    }, [])
    
  const formDataRequestCount = yield select(
    state => state.formData.requestCount
  )

  log({
    info:
      'Commencing with sync request after reviewing differences between form data and user forms',
    creates,
    updates
  })

  yield put(stopLoadingFormData())
    
  yield put({
    type: UPDATE_AND_CREATE_FORMS,
    payload: {
      creates,
      updates
    }
  })
}

function* _handleReset(){
  const userId = yield select(selectors.userId)
  try {
    const data = yield call(resetUserSteps, userId)
    yield putResolve({
      type: RESET_FORMS
    })
    yield putResolve(resetAction())
  } catch (error) {
    if (__DEV__)
      throw error
  }
}

function* watchForLoadingForm() {
  while(true){
    yield take(START_LOADING_FORMDATA)
    yield put(setLoadingFormData())
    yield race([
      take(STOP_LOADING_FORMDATA),
      delay(5000) 
    ])
    yield put(unsetLoadingFormData())
  }
}

function* watchForResetSteps(){
  yield takeLatest(RESET_FORMS_REQUEST, _handleReset)
}

function* watchForUpdateOrCreate() {
  while(true) {
    const { payload } = yield take(UPDATE_AND_CREATE_FORMS)
    if (payload && (payload.updates || payload.creates)) {
      yield fork(syncRequests, payload)
    }
  }
}

export function* watchSyncFormData() {
  // here the assumptions is that the formData reducer will always Hydrate before the GET_USER action return, becuase we never
  const requestChan = yield actionChannel([GET_USER.SUCCEEDED, SYNC_FORM_DATA])
  yield fork(watchForResetSteps)
  yield fork(watchForUpdateOrCreate)
  yield fork(watchForLoadingForm)
  while (true) {
    yield take(requestChan)
    yield fork(reviewCurrentUserFormsAndFormDataCompareAndUpfateToState)
  }
}

function* syncRequests(payload) {
  const { updates, creates } = payload

  const userId = yield select(selectors.userId)
  if (!userId) return

  yield putResolve(incrementFormDataQueue())
  // run serially, ideally we want to be able to compose those requests, and send them in one go...

  yield delay(1)


  let _user = null
  if (updates && updates.length) {
    for (let index = 0; index < updates.length; index++) {
      const update = updates[index]
      if (__DEV__) {
        testUpdate(update)
      }

      try {
        const { user } = yield call(updateForm, {
          ...update
        })
        log({
          info: `Completed synching on update between form data and user forms`,
          update,
          new: user.forms.find(f => f.id === update.id)
        })
        _user = user
      } catch (error) {
        _user = null
        log({
          info: `Form Synch: Failed on update between form data and user forms`,
          error,
          update
        })
      }
    }
  }
  if (creates && creates.length) {
    for (let index = 0; index < creates.length; index++) {
      const create = creates[index]
      if (__DEV__) {
        testCreate(create)
      }
      try {
        const { user } = yield call(createForm, {
          ...create
        })
        _user = user
      } catch (error) {
        _user = null
        log({
          info: `Form Synch: Failed on create between form data and user forms`,
          error,
          create
        })
      }
    }
  }

  if (_user) {
    yield putResolve(updateUser(_user))
  }

  yield putResolve(decrementFormDataQueue())
  const formDataRequestCount = yield select(
    state => state.formData.requestCount
  )

  if (formDataRequestCount !== 0) {
    const error = `Completed synching differences between form data and user forms with formDataRequestCount: ${formDataRequestCount}`
    if (__DEV__) {
      throw error
    } else {
      log({
        info: 'Completed synching differences between form data and user forms.'
      })
    }
  } else {
    log({
      info: 'Completed synching differences between form data and user forms.'
    })
  }
}

const testCreate = create => {
  if (!create.stepId || create.stepId < 0 || create.stepId > 30) {
    throw `missing or incorrect stepId in create:${JSON.stringify(create)}`
  }
  if (!create.data) {
    throw `missing data in create:${JSON.stringify(create)}`
  }
}

const testUpdate = (update: UpdateormArgs) => {
  if (!update.id) {
    throw `missing id in update:${JSON.stringify(update)}`
  }
  if (!update.data) {
    throw `missing data in update:${JSON.stringify(update)}`
  }
}
