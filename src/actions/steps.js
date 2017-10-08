// @flow
import { REQUEST, GET_ALL_STEPS_FROM_CMS, GET_STEPS_FROM_CMS_BY_DAY, } from '../constants/actionTypes';

export function getAllStepsFromCMS() {
  return {
    type: GET_ALL_STEPS_FROM_CMS[REQUEST],
  }
}

export function getStepFromCMSByDay(day: number) {
  return {
    type: GET_STEPS_FROM_CMS_BY_DAY[REQUEST],
    day,
  }
}
