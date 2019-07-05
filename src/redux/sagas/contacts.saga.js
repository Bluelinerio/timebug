// @flow
import { takeLatest, fork, call, put, select } from 'redux-saga/effects'
import {
  CHECK_CONTACT_PERMISSION,
  SYNC_CONTACT_PERMISSION,
}                                              from '../actionTypes'
import { GET_USER }                            from '../actions/user.actions'
import { READ_CONTACTS }                       from '2020_constants/permissions'
import selectors                               from '../selectors'
import ContactService, { stepsWithContacts }   from '2020_services/contactService'
import {
  setPermissionStatus,
  requestPermission,
  requestPermissionDone,
}                                              from '2020_redux/actions/permissions.actions'

function* _checkPermissionsAndRequestContacts() {
  const completedForms = yield select(selectors.completedForms)
  const hasCompletedFormsForContacts = completedForms.find(form =>
    stepsWithContacts.find(step => `${step}` === `${form.stepId}`)
  )
  if (!hasCompletedFormsForContacts) return
  yield put(requestPermission(READ_CONTACTS))
  const permissions = yield select(selectors.permissions)
  const permissionStatus = yield call(ContactService.requestPermissions)
  const permissionInState = permissions.find(
    perm => permissionStatus.permission === perm.value
  )
  if (
    !permissionInState ||
    permissionInState.status !== permissionStatus.status
  ) {
    yield put(setPermissionStatus(permissionStatus))
  }
  yield put(requestPermissionDone(READ_CONTACTS))
}

function* _syncPermissions() {
  const completedForms = yield select(selectors.completedForms)
  const hasCompletedFormsForContacts = completedForms.find(form =>
    stepsWithContacts.find(step => `${step}` === `${form.stepId}`)
  )
  if (!hasCompletedFormsForContacts) return
  const permissions = yield select(selectors.permissions)
  const permissionStatus = yield call(ContactService.checkPermission)
  const permissionInState = permissions.find(
    perm => permissionStatus.permission === perm.value
  )
  if (
    !permissionInState ||
    permissionInState.status !== permissionStatus.status
  ) {
    yield put(setPermissionStatus(permissionStatus))
  }
}

function* watchForContactsSetup() {
  yield takeLatest(
    [CHECK_CONTACT_PERMISSION],
    _checkPermissionsAndRequestContacts
  )
}

function* watchForContactsPermissionsSettings() {
  yield takeLatest(
    [GET_USER.SUCCEEDED, SYNC_CONTACT_PERMISSION],
    _syncPermissions
  )
}

export function* watchForContactsSaga() {
  yield fork(watchForContactsSetup)
  yield fork(watchForContactsPermissionsSettings)
}
