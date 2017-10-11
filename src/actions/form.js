// @flow
import { action }                       from '../utils/actions';
import { GET_NEXT_FORM, SET_NEXT_FORM } from '../constants/actionTypes';

export const getNextForm = (currentStep, currentForm, withoutRedirect, value) => {
  return action(GET_NEXT_FORM, { currentStep, currentForm, withoutRedirect, value });
};

export const setNextForm = (form) => action(SET_NEXT_FORM, form);
