import {
  ADD_PERMISSION,
  REMOVE_PERMISSION,
  SET_PERMISSION_STATUS,
  DENY_PERMISSION,
  PERMANTENTLY_DENY_PERMISSION,
  REQUEST_PERMISSIONS,
  REQUEST_PERMISSIONS_DONE,
  SYNC_CONTACT_PERMISSION,
  FIREBASE_SETUP,
  SET_FIREBASE_MESSAGING_PERMISSION,
} from '../actionTypes'
import {
  GRANTED,
  DENIED,
  UNDETERMINED,
  NEVER_ASK_AGAIN,
} from '2020_constants/constants'

export type AddPermissionPayload = {
  permission: string,
}

export type RemovePermissionPayload = {
  permission: string,
}

export type SetPermissionStatusPayload = {
  permission: string,
  status: GRANTED | DENIED | UNDETERMINED | NEVER_ASK_AGAIN,
}

export type PermissionPayload = {
  permission: string,
}

type ChangeFirebaseKeyPayload = {
  fcm: string,
}

type FirebasePermissionPayload = {
  status: boolean,
}

export const addPermission = (payload: PermissionPayload) => ({
  type: ADD_PERMISSION,
  payload,
})

export const denyPermission = (payload: PermissionPayload) => ({
  type: DENY_PERMISSION,
  payload,
})

export const permanentlyDenyPermission = (payload: PermissionPayload) => ({
  type: PERMANTENTLY_DENY_PERMISSION,
  payload,
})

export const removePermission = (payload: PermissionPayload) => ({
  type: REMOVE_PERMISSION,
  payload,
})

export const setPermissionStatus = (payload: SetPermissionStatusPayload) => ({
  type: SET_PERMISSION_STATUS,
  payload,
})

export const requestPermission = (permission: string) => ({
  type: REQUEST_PERMISSIONS,
  payload: { permission },
})

export const requestPermissionDone = (permission: string) => ({
  type: REQUEST_PERMISSIONS_DONE,
  payload: { permission },
})

export const syncPermissions = () => ({
  type: SYNC_CONTACT_PERMISSION,
})

export const changeFirebaseKey = (payload: ChangeFirebaseKeyPayload) => ({
  type: FIREBASE_SETUP,
  payload,
})

export const setFirebasePermission = (payload: FirebasePermissionPayload) => ({
  type: SET_FIREBASE_MESSAGING_PERMISSION,
  payload,
})
