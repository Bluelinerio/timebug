// @flow
import { action }                       from '../utils';
import { POPULATE_CURRENT_FORM_VALUE, POPULATE_FORM_VALUE, SET_FORM } from '../actionTypes';
import type { Progress } from '../../services/apollo/models.js'

export const populateCurrentFormValue = (value: any) => action(POPULATE_CURRENT_FORM_VALUE, { value });
export const populateFormValue = (value: any, progress: Progress) => action(POPULATE_FORM_VALUE, { value, progress });
export const setForm = (model:any) => action(SET_FORM, { model });