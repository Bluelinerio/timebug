// @flow
import { action }                       from '../utils';
import { POPULATE_CURRENT_FORM_VALUE, POPULATE_FORM_VALUE, SET_FORM, UPDATE_FORM, CHANGE_FORM_VALUE } from '../actionTypes';
import type { Progress } from '../../services/apollo/models.js'

export type FormChange = {
  fieldName: string,
  fieldValue: any,
  path: [string],
  value: any,
  step: number,
  form: number
}

export const populateCurrentFormValue = (value: any) => action(POPULATE_CURRENT_FORM_VALUE, { value });
export const populateFormValue = (value: any, progress: Progress) => action(POPULATE_FORM_VALUE, { value, progress });
export const setForm = (model:any) => action(SET_FORM, { model });
export const updateForm = (model:any) => action(UPDATE_FORM, { model });
export const changeFormValue = (change: FormChange) => action(CHANGE_FORM_VALUE, change);
