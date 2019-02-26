// @flow
import { action } from '../utils'
import {
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE,
  SUBMIT_FORM_VALUE,
  SYNC_FORM_DATA,
  RESET_FORMS_REQUEST,
  RESET_FORMS,
  SET_LOADING_FORMDATA,
  START_LOADING_FORMDATA,
  STOP_LOADING_FORMDATA,
  RESTORE_FORM_DATA,
}                 from '../actionTypes'

export type SubmitActionPayload = {
  stepId: string,
  value?: any,
}

export type RestoreFormDataPayload = {
  forms: {
    [x: string]: any,
  },
}

export const submitFormValue = (payload: SubmitActionPayload) => ({
  type: SUBMIT_FORM_VALUE,
  payload,
})

export const resetRequest = () => ({ type: RESET_FORMS_REQUEST })
export const reset = () => ({ type: RESET_FORMS })
export const syncFormData = () => ({ type: SYNC_FORM_DATA })
export const incrementFormDataQueue = () => action(INCREMENT_FORM_DATA_QUEUE)
export const decrementFormDataQueue = () => action(DECREMENT_FORM_DATA_QUEUE)

export const setLoadingFormData = (payload = true) => ({
  type: SET_LOADING_FORMDATA,
  payload,
})
export const startLoadingFormData = () => ({ type: START_LOADING_FORMDATA })
export const stopLoadingFormData = () => ({ type: STOP_LOADING_FORMDATA })
export const setNotLoadingFormData = () => setLoadingFormData(false)

export const restoreFormData = (payload: RestoreFormDataPayload) => ({
  type: RESTORE_FORM_DATA,
  payload,
})
