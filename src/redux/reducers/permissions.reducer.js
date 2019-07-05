// @flow
import {
  ADD_PERMISSION,
  REMOVE_PERMISSION,
  FIREBASE_SETUP,
  SET_FIREBASE_MESSAGING_PERMISSION,
  LOGOUT
  DENY_PERMISSION,
  PERMANTENTLY_DENY_PERMISSION,
  SET_PERMISSION_STATUS,
  REQUEST_PERMISSIONS,
  REQUEST_PERMISSIONS_DONE,
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
  READ_CONTACTS,
} from '2020_constants/permissions'
import {
  PermissionPayload,
  SetPermissionStatusPayload,
} from '../actions/permissions.actions'

export type Permission = {
  value: string,
  status: UNDETERMINED | GRANTED | DENIED | NEVER_ASK_AGAIN,
}

export type PermissionsState = {
  requesting: boolean,
  permissions: Array<Permission>,
  firebase: {
    fcm: string,
    allowed: boolean,
  },
}

export type PermissionNotifierPayload = {
  payload: {
    permission: string,
  },
}

export const initialState = {
  requesting: false,
  permissionInProcess: null,
  permissions: [
    {
      value: SEND_EMAIL_NOTIFICATIONS,
      status: GRANTED,
    },
    {
      value: SEND_PUSH_NOTIFICATIONS,
      status: GRANTED,
    },
    {
      value: READ_CONTACTS,
      status: UNDETERMINED,
    },
  ],
  firebase: {
    fcm: null,
    allowed: false,
  },
}

const addPermission = (
  state: PermissionsState,
  { payload }: PermissionPayload
): PermissionsState => {
  const { permission } = payload
  const { permissions } = state
  const perm = {
    value: permission,
    status: GRANTED,
  }
  return {
    ...state,
    permissions: permissions.map(p => {
      if (p.value !== permission) return p
      return perm
    }),
  }
}

const removePermission = (
  state: PermissionsState,
  { payload }: PermissionPayload
): PermissionsState => {
  const { permission } = payload
  const { permissions } = state
  const newPermissions = permissions.filter(p => p.value !== permission)
  return {
    ...state,
    permissions: newPermissions,
  }
}

const denyPermission = (
  state: PermissionsState,
  { payload }: PermissionPayload
): PermissionsState => {
  const { permission } = payload
  const { permissions } = state
  const perm = {
    value: permission,
    status: DENIED,
  }
  return {
    ...state,
    permissions: permissions.map(p => {
      if (p.value !== permission) return p
      return perm
    }),
  }
}

const permanentlyDeny = (
  state: PermissionsState,
  { payload }: PermissionPayload
): PermissionsState => {
  const { permission } = payload
  const { permissions } = state
  const perm = {
    value: permission,
    status: NEVER_ASK_AGAIN,
  }

  return {
    ...state,
    permissions: permissions.map(p => {
      if (p.value !== permission) return p
      return perm
    }),
  }
}

const setPermissionStatus = (
  state: PermissionsState,
  { payload }: SetPermissionStatusPayload
) => {
  const { value, status } = payload
  const { permissions } = state
  const perm = {
    value,
    status,
  }
  return {
    ...state,
    permissions: permissions.map(p => {
      if (p.value !== value) return p
      return perm
    }),
  }
}

const onPermissionRequest = (
  state: PermissionsState,
  { payload }: PermissionNotifierPayload
) => {
  const { permission } = payload
  return {
    ...state,
    requesting: true,
    permissionInProcess: permission,
  }
}

const onPermissionRequestDone = (
  state: PermissionsState,
  { payload }: PermissionNotifierPayload
) => {
  const { permission } = payload
  const { permissionInProcess } = state
  if (permission !== permissionInProcess) return state
  return {
    ...state,
    requesting: false,
    permissionInProcess: null,
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
  case DENY_PERMISSION:
    return denyPermission(state, action)
  case PERMANTENTLY_DENY_PERMISSION:
    return permanentlyDeny(state, action)
  case SET_PERMISSION_STATUS:
    return setPermissionStatus(state, action)
  case REQUEST_PERMISSIONS:
    return onPermissionRequest(state, action)
  case REQUEST_PERMISSIONS_DONE:
    return onPermissionRequestDone(state, action)
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
  3: () => initialState,
  4: () => initialState,
}

const persistConfig = {
  key: 'permissions',
  storage: storage,
  blacklist: ['requesting', 'permissionInProcess'],
  version: 4,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, contactsReducer)
