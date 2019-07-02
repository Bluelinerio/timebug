import {
  ADD_PERMISSION,
  REMOVE_PERMISSION,
  FIREBASE_SETUP,
  SET_FIREBASE_MESSAGING_PERMISSION,
} from '../actionTypes'

export type AddPermissionPayload = {
  permission: string,
}

export type RemovePermissionPayload = {
  permission: string,
}

type ChangeFirebaseKeyPayload = {
  fcm: string,
}

type FirebasePermissionPayload = {
  status: boolean,
}

export const addPermission = (payload: AddPermissionPayload) => ({
  type: ADD_PERMISSION,
  payload,
})

export const removePermission = (payload: RemovePermissionPayload) => ({
  type: REMOVE_PERMISSION,
  payload,
})

export const changeFirebaseKey = (payload: ChangeFirebaseKeyPayload) => ({
  type: FIREBASE_SETUP,
  payload,
})

export const setFirebasePermission = (payload: FirebasePermissionPayload) => ({
  type: SET_FIREBASE_MESSAGING_PERMISSION,
  payload,
})
