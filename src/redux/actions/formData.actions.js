// @flow
import { action } from "../utils";
import {
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE,
  SUBMIT_FORM_VALUE,
  SYNC_FORM_DATA
} from "../actionTypes";
import { throttleAction } from "../throttle";

export type SubmitAction = {
  formId: string,
  stepId: string,
  value?: any
};

export const submitFormValue = (payload: SubmitAction) => ({
  type: SUBMIT_FORM_VALUE,
  payload
});
export const syncFormData = () => ({ type: SYNC_FORM_DATA });
export const incrementFormDataQueue = () => action(INCREMENT_FORM_DATA_QUEUE);
export const decrementFormDataQueue = () => action(DECREMENT_FORM_DATA_QUEUE);
