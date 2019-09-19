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
  DELETE_FORM_VALUE,
  DELETE_INNER_FORM_VALUE,
} from '../actionTypes'

export type SubmitActionPayload = {
  stepId: string,
  value?: any,
  sideEffect?: boolean
}

export type RestoreFormDataPayload = {
  forms: {
    [x: string]: any,
  },
}

export type DeleteFormValuePayload = {
  id: string,
  stepId: string,
}

export type DeleteFormValueAction = {
  type: DELETE_FORM_VALUE,
  payload: DeleteFormValuePayload,
}

export type InnerElementIdentificationPayload = {
  key: string,
  id: string,
}

export type DeleteInnerValuePayload = {
  stepId: string,
  valueId?: string,
  innerElements: Array<InnerElementIdentificationPayload>
}

export type DeleteInnerValueAction = {
  type: DELETE_INNER_FORM_VALUE,
  payload: DeleteInnerValuePayload
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

export const deleteSingleFormElement = (
  payload: DeleteFormValuePayload
): DeleteFormValueAction => ({
  type: DELETE_FORM_VALUE,
  payload,
})

export const deleteInnerFormValue = (
  payload: DeleteInnerValuePayload
): DeleteInnerValueAction => ({
  type: DELETE_INNER_FORM_VALUE,
  payload,
})
