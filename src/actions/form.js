// @flow
import { GET_NEXT_FORM, } from '../constants/actionTypes';

export function getNextForm(currentStep, currentForm, withoutRedirect, value) {
  return {
    type: GET_NEXT_FORM,
    currentStep,
    currentForm,
    withoutRedirect,
    value
  }
}

