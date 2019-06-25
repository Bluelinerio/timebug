// @flow
import {
  REQUEST_PERMISSIONS_SUCCESS,
  REQUEST_PERMISSIONS_DENIED,
  REQUEST_PERMISSIONS_NEVER,
  UPDATE_PERMISSION,
  ADD_CONTACT,
  REMOVE_CONTACT,
  LOGOUT,
} from '../actionTypes'
import {
  UNDETERMINED,
  GRANTED,
  DENIED,
  NEVER_ASK_AGAIN,
} from '2020_constants/constants'

export type Permission = {
  name: string,
  status: UNDETERMINED | GRANTED | DENIED | NEVER_ASK_AGAIN,
}

export type Email = {
  label: string,
  email: string,
}

export type PhoneNumbers = {
  label: string,
  phone: string,
}

export type Contact = {
  recordID: string,
  name: string,
  emailAddresses: Array<Email>,
  phoneNumbers: Array<PhoneNumbers>,
  thumbNail: string,
  birthDay: any,
}

export type ContactState = {
  permissions: Array<Permission>,
  contacts: Array<Contact>,
}

export const initialState = {
  permissions: [],
  contacts: [],
}

const populateContacts = (
  state: ContactState,
  { payload }: any
): ContactState => {
  const { contact, advisorId } = payload
  const contacts = state.contacts.filter(con => con.advisorId !== advisorId)
  return {
    ...state,
    contacts: [
      ...contacts,
      {
        contact,
        advisorId,
      },
    ],
  }
}

const removeContact = (
  state: ContactState,
  { payload }: any
): ContactState => {
  const { advisorId } = payload
  const contacts = state.contacts.filter(con => con.advisorId !== advisorId)
  return {
    ...state,
    contacts,
  }
}

const updatePermission = (
  state: ContactState,
  status: string,
  { payload }: { payload: { permission: string } }
) => {
  const currentPermissions = state.permissions.filter(
    perm => perm.name !== payload.permission
  )
  return {
    ...state,
    permissions: [
      ...currentPermissions,
      {
        name: payload.permission,
        status,
      },
    ],
  }
}

const contactsReducer = (
  state: ContactState = initialState,
  action
): ContactState => {
  switch (action.type) {
  case UPDATE_PERMISSION:
    return updatePermission(state, action.payload.status, action)
  case REQUEST_PERMISSIONS_SUCCESS:
    return updatePermission(state, GRANTED, action)
  case REQUEST_PERMISSIONS_DENIED:
    return updatePermission(state, DENIED, action)
  case REQUEST_PERMISSIONS_NEVER:
    return updatePermission(state, NEVER_ASK_AGAIN, action)
  case ADD_CONTACT:
    return populateContacts(state, action)
  case REMOVE_CONTACT:
    return removeContact(state, action)
  case LOGOUT:
    return initialState
  default:
    return state
  }
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

const migrations = {
  0: state => state,
}

const persistConfig = {
  key: 'contacts',
  storage: storage,
  blacklist: [],
  version: 0,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, contactsReducer)
