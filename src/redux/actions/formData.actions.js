// @flow
import { action }                       from '../utils';
import { 
  INCREMENT_FORM_DATA_QUEUE,
  DECREMENT_FORM_DATA_QUEUE,
  SUBMIT_FORM_VALUE,
  PERSISTE_FORM_VALUE,
} 
  from '../actionTypes';
import type { Progress } from '../../services/apollo/models.js'
import { throttleAction } from '../throttle';

export type FormChange = {
  fieldName: string,
  fieldValue: any,
  path: [string],
  value: any,
  step: number,
  form: number
}

export type SubmitAction = { 
  progress: Progress,
  value?: any
}

export const persisteFormValue = (payload: FormChange) => throttleAction({ type: PERSISTE_FORM_VALUE, payload});
export const submitFormValue = (payload: SubmitAction) => ({ type: SUBMIT_FORM_VALUE, payload});
export const incrementFormDataQueue  = () => action(INCREMENT_FORM_DATA_QUEUE);
export const decrementFormDataQueue  = () => action(DECREMENT_FORM_DATA_QUEUE);
