// @flow
import {
  REQUEST_PERMISSIONS,
  UPDATE_PERMISSION,
  REQUEST_PERMISSIONS_DENIED,
  REQUEST_PERMISSIONS_SUCCESS,
  REQUEST_PERMISSIONS_NEVER,
  ADD_CONTACT,
} from '../actionTypes'

export type SubmitAction = {
  type:
    | REQUEST_PERMISSIONS
    | REQUEST_PERMISSIONS_DENIED
    | REQUEST_PERMISSIONS_SUCCESS
    | REQUEST_PERMISSIONS_NEVER,
  payload: {
    permission: string,
  },
}

export type ContactActionPayload = {
  contact: any,
  advisorId: string,
}

export type ContactAction = {
  type: ADD_CONTACT.ADD_CONTACT,
  payload: ContactActionPayload,
}

export const addContact = (payload: { contact: any, advisorId: any }) => ({
  type: ADD_CONTACT,
  payload,
})

export const requestPermission = (permission: string): SubmitAction => ({
  type: REQUEST_PERMISSIONS,
  payload: { permission },
})

export const updatePermission = (payload: {
  permission: string,
  status: string,
}): SubmitAction => ({
  type: UPDATE_PERMISSION,
  payload,
})

export const grantPermission = (permission: string): SubmitAction => ({
  type: REQUEST_PERMISSIONS_SUCCESS,
  payload: { permission },
})

export const denyPermission = (permission: string): SubmitAction => ({
  type: REQUEST_PERMISSIONS_DENIED,
  payload: { permission },
})

export const neverAskForPermission = (permission: string): SubmitAction => ({
  type: REQUEST_PERMISSIONS_NEVER,
  payload: { permission },
})