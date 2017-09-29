// @flow
import { GET_ALL_STEPS_FROM_CMS, GET_STEPS_FROM_CMS_BY_DAY, } from '../constants/actionTypes';

export function getAllStepsFromCMS() {
  return {
    type: GET_ALL_STEPS_FROM_CMS,
  }
}

export function getStepFromCMSByDay(day: number) {
  return {
    type: GET_STEPS_FROM_CMS_BY_DAY,
    day,
  }
}