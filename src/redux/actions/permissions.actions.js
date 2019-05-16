import { ADD_PERMISSION, REMOVE_PERMISSION } from '../actionTypes'

export type AddPermissionPayload = {
  permission: string,
}

export type RemovePermissionPayload = {
  permission: string,
}

export const addPermission = (payload: AddPermissionPayload) => ({
  type: ADD_PERMISSION,
  payload,
})

export const removePermission = (payload: RemovePermissionPayload) => ({
  type: REMOVE_PERMISSION,
  payload,
})
