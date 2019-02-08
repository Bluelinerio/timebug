// @flow
import { takeLatest, fork, call, put, select } from 'redux-saga/effects'
import { UPDATE_USER }                         from '../actionTypes'
import { GET_USER }                            from '../actions/user.actions'
import selectors                               from '../selectors'
import ContactService, { stepsWithContacts }   from '2020_services/contactService'
import {
  requestPermission,
  updatePermission,
}                                              from '2020_redux/actions/contacts.actions'
import { GRANTED }                             from '2020_constants/constants'

const CONTACTS_SUCCESS = 'CONTACTS_SUCCESS'

function* _checkPermissionsAndRequestContacts() {
  const completedForms = yield select(selectors.completedForms)
  const hasCompletedFormsForContacts = completedForms.find(form =>
    stepsWithContacts.find(step => `${step}` === `${form.stepId}`)
  )
  if (!hasCompletedFormsForContacts) return
  const { permissions } = yield select(selectors.getContactState)
  const permissionStatus = yield call(ContactService.requestPermissions)
  yield put(requestPermission(permissionStatus.permission))
  const permissionInState = permissions.find(
    perm => permissionStatus.permission === perm.permission
  )
  if (
    !permissionInState ||
    permissionInState.status !== permissionStatus.status
  ) {
    yield put(updatePermission(permissionStatus))
  }
}

function* watchForContactsSetup() {
  yield takeLatest(
    [GET_USER.SUCCEEDED, UPDATE_USER],
    _checkPermissionsAndRequestContacts
  )
}

export function* watchForContactsSaga() {
  yield fork(watchForContactsSetup)
}
