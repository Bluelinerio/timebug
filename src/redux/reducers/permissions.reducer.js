// @flow
import {
  ADD_PERMISSION,
  REMOVE_PERMISSION,
  FIREBASE_SETUP,
  SET_FIREBASE_MESSAGING_PERMISSION,
} from '../actionTypes'
import {
  GRANTED,
  DENIED,
  UNDETERMINED,
  NEVER_ASK_AGAIN,
} from '2020_constants/constants'
import {
  SEND_EMAIL_NOTIFICATIONS,
  SEND_PUSH_NOTIFICATIONS,
} from '2020_constants/permissions'
import {
  AddPermissionPayload,
  RemovePermissionPayload,
} from '../actions/permissions.actions'

export type Permission = {
  name: string,
  status: UNDETERMINED | GRANTED | DENIED | NEVER_ASK_AGAIN,
}

export type PermissionsState = {
  permissions: Array<Permission>,
  firebase: {
    fcm: string,
    allowed: boolean,
  },
}

export const initialState = {
  permissions: [SEND_EMAIL_NOTIFICATIONS, SEND_PUSH_NOTIFICATIONS],
  firebase: {
    fcm: null,
    allowed: false,
  },
}

const addPermission = (
  state: PermissionsState,
  { payload }: AddPermissionPayload
): PermissionsState => {
  const { permission } = payload
  const { permissions } = state
  const permissionStored = permissions.find(p => p === permissions)
  if (permissionStored) return state
  return {
    ...state,
    permissions: [...permissions, permission],
  }
}

const removePermission = (
  state: PermissionsState,
  { payload }: RemovePermissionPayload
): PermissionsState => {
  const { permission } = payload
  const { permissions } = state
  const newPermissions = permissions.filter(p => p !== permission)
  return {
    ...state,
    permissions: newPermissions,
  }
}

const contactsReducer = (
  state: PermissionsState = initialState,
  action
): PermissionsState => {
  switch (action.type) {
  case ADD_PERMISSION:
    return addPermission(state, action)
  case REMOVE_PERMISSION:
    return removePermission(state, action)
  case FIREBASE_SETUP:
    return {
      ...state,
      firebase: {
        ...state.firebase,
        fcm: action.payload.fcm,
      },
    }
  case SET_FIREBASE_MESSAGING_PERMISSION:
    return {
      ...state,
      firebase: {
        ...state.firebase,
        allowed: action.payload.status,
      },
    }
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
  1: () => initialState,
  2: () => initialState,
}

const persistConfig = {
  key: 'permissions',
  storage: storage,
  blacklist: [],
  version: 2,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, contactsReducer)
