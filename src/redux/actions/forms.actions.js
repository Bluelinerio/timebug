// @flow
import { action }                       from '../utils';
import { 
  INCREMENT_FORM_QUEUE,
  DECREMENT_FORM_QUEUE,
  FORM, 
  SUBMIT_FORM_VALUE, 
  SET_FORM, 
  UPDATE_FORM
} 
  from '../actionTypes';
import type { Progress } from '../../services/apollo/models.js'

export const setForm = (model:any) => action(SET_FORM, { model });
export const updateForm = (model: any) => action(UPDATE_FORM, { model });
export const incrementFormQueue  = () => action(INCREMENT_FORM_QUEUE);
export const decrementFormQueue  = () => action(DECREMENT_FORM_QUEUE);
