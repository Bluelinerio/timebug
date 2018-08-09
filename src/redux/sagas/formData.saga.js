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

import { createForm, updateForm, resetUserSteps, deleteForm } from '../../services/apollo'
import type { UpdateormArgs } from '../../services/apollo/models'

import {
  SYNC_FORM_DATA,
  RESET_FORMS_REQUEST,
  RESET_FORMS,
  START_LOADING_FORMDATA,
  STOP_LOADING_FORMDATA
} from '../actionTypes'

import { GET_USER, updateUser, resetUserSteps as resetAction } from '../actions/user.actions'
import {
  incrementFormDataQueue,
  decrementFormDataQueue,
  setLoadingFormData,
  setNotLoadingFormData,
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

const findRepeatedForms = (formData) => {
  return formData
    .sort((a, b) => a.stepId - b.stepId)
    .reduce((prev, f, index, arr) => {
      if(arr.length > index + 1 && arr[index + 1].stepId === f.stepId
            || prev.find(form => form.stepId === f.stepId))
        return [ ...prev, f]
      return prev
    }, [])
    .sort((a, b) => a.stepId - b.stepId)  
    .sort((a, b) => {
      if(a.stepId === b.stepId)
        return Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
      else
        return 0
    })
    .reduce((forms, form, index, arr) => {
      const prev = index > 0 ? arr[index - 1] : null
      if(prev && prev.stepId === form.stepId)
        return [...forms, form]
      return forms
    }, [])
}

function* removeRepeatedForms(user) {
  const { forms } = user
  const repeatedForms = yield call(findRepeatedForms, forms)
  const finalForms = forms
    .filter(f => repeatedForms.find(form => form.id === f.id) ? false: true)
  for(let form of repeatedForms) {
    yield fork(deleteForm, {
      ...form
    })
  }
  return {
    ...user,
    forms: finalForms
  }
}

function* reviewCurrentUserFormsAndFormDataCompareAndUpdateToState() {
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

  const forms = yield select (selectors.completedForms)
  const deletable = yield call(findRepeatedForms, forms)

  const { difference, onlyOnLeft } = diffObjs(
    removeAllKeyButStepIds(formData),
    removeAllKeyButStepIds(completedFormsData)
  )
  
  if (!difference && !onlyOnLeft && deletable.length === 0) {
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

  const deletes = deletable.filter(d => d.id)

  log({
    info:
      'Commencing with sync request after reviewing differences between form data and user forms',
    creates,
    updates,
    deletes
  })

  yield put(stopLoadingFormData())

  yield put({
    type: UPDATE_AND_CREATE_FORMS,
    payload: {
      creates,
      updates,
      deletes
    }
  })
}

function* _handleReset(){
  const userId = yield select(selectors.userId)
  try {
    const data = yield call(resetUserSteps, userId)
    log({
      data
    })
    yield putResolve({
      type: RESET_FORMS
    })
    yield putResolve(resetAction())
  } catch (error) {
    if (__DEV__)
      throw error
  }
}

function* timeout(duration = 5000) {
  yield call(delay, duration)
  throw new Error("Timeout")
}

function* watchForStopFormData() {
  yield take(STOP_LOADING_FORMDATA)
}

function* raceLoadingForm() {
    try{
        yield put(setLoadingFormData())
        const result = yield race({
          request: call(watchForStopFormData),
          timeout: call(timeout, 8000)
        })
        log({
          result
        })
    }
    catch(error) {
      log({
        error
      })
    }
    finally {
      yield put(setNotLoadingFormData())      
    }
}

function* watchForLoadingForm() {
  const startChan = yield actionChannel(START_LOADING_FORMDATA)
  yield takeLatest(startChan, raceLoadingForm)
}

function* watchForResetSteps(){
  yield takeLatest(RESET_FORMS_REQUEST, _handleReset)
}

function* watchForUpdateOrCreate() {
  while(true) {
    const { payload } = yield take(UPDATE_AND_CREATE_FORMS)
    if (payload && (payload.updates || payload.creates)) {
      yield fork(syncRequests, payload)
      yield delay(5000)
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
    yield fork(reviewCurrentUserFormsAndFormDataCompareAndUpdateToState)
  }
}

function* syncRequests(payload) {
  const { updates, creates, deletes } = payload

  const userId = yield select(selectors.userId)
  if (!userId) return

  // run serially, ideally we want to be able to compose those requests, and send them in one go...
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
  if(deletes && deletes.length) {
    for(let index = 0; index < deletes.length; index++) {
      const del = deletes[index]
        try {
          if(__DEV__)
            testDelete(del)
          const { id } = yield call(deleteForm, {
            ...del
          })
          const userForms = yield select(selectors.completedForms)
          const currentUserState = _user ? _user : { forms: userForms }
          const currentForms = currentUserState.forms.filter(f => f.id !== id)
          _user = {
            ...currentUserState,
            forms: currentForms
          }
          log({
            info: `Completed synching on delete between form data and user forms`,
            del
          })
        } catch (error) {
          _user = null
          log({
            info: `Form Synch: Failed on delete between form data and user forms`,
            error,
            del
        })
      }
    }
  }

  if (_user) {
    /**
     * Redundant deletion in case the responses come with repeated steps
     * uncomment the line below in case the app can´t logically handle repeated steps normally
     * also replace _user with finalUser on the update
     */
    // const finalUser = yield call(removeRepeatedForms, _user)
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

const testDelete = del => {
  if (!del.id) {
    throw `missing id in delete:${JSON.stringify(del)}`
  }
}