// @flow
import { action }            from '../utils/actions';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_ALL_STEPS_FROM_CMS,
  GET_STEP_FROM_CMS_BY_DAY
}                            from '../constants/actionTypes';
import type { IStep }        from '../interfaces/IStep';

export const getAllStepsFromCMS = {
  request: () => action(GET_ALL_STEPS_FROM_CMS[REQUEST]),
  success: (steps: IStep[]) => action(GET_ALL_STEPS_FROM_CMS[SUCCESS], { steps }),
  failure: (message: string) => action(GET_ALL_STEPS_FROM_CMS[FAILURE], { message }),
}

export const getStepFromCMSByDay = {
  request: (day: number) => action(GET_STEP_FROM_CMS_BY_DAY[REQUEST], { day }),
  success: (step: IStep) => action(GET_STEP_FROM_CMS_BY_DAY[SUCCESS], { step }),
  failure: (message: string) => action(GET_STEP_FROM_CMS_BY_DAY[FAILURE], { message }),
}
