// @flow
import { action } from './utils';
import {
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE,
  SUBMIT_FORM_VALUE,
  SYNC_FORM_DATA,
  RESET_FORMS_REQUEST,
  RESET_FORMS,
  SET_LOADING_FORMDATA,
  START_LOADING_FORMDATA,
  STOP_LOADING_FORMDATA
} from '../actionTypes';

export type SubmitAction = {
  formId: string,
  stepId: string,
  value?: any
};

export const submitFormValue = (payload: SubmitAction) => ({
  type: SUBMIT_FORM_VALUE,
  payload
});
export const resetRequest = () => ({ type: RESET_FORMS_REQUEST })
export const reset = () => ({ type: RESET_FORMS })
export const syncFormData = () => ({ type: SYNC_FORM_DATA });
export const incrementFormDataQueue = () => action(INCREMENT_FORM_DATA_QUEUE);
export const decrementFormDataQueue = () => action(DECREMENT_FORM_DATA_QUEUE);

export const setLoadingFormData = (payload) => ({ type: SET_LOADING_FORMDATA, payload });
export const setNotLoadingFormData = () => setLoadingFormData(false)
