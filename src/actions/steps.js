// @flow
import { action }             from '../utils/actions';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_ALL_STEPS_FROM_CMS,
  GET_STEP_FROM_CMS_BY_DAY,
  GET_STEP_COLORS
}                               from '../constants/actionTypes';
import type { IStep, IColors }  from '../interfaces';

export const getAllStepsFromCMS = {
  request: () => action(GET_ALL_STEPS_FROM_CMS[REQUEST]),
  success: (steps: IStep[]) => action(GET_ALL_STEPS_FROM_CMS[SUCCESS], { steps }),
  failure: (message: string) => action(GET_ALL_STEPS_FROM_CMS[FAILURE], { message }),
}

export const getStepsColorFromCMS = {
  request: () => action(GET_STEP_COLORS[REQUEST]),
  success: (colors: IColors) => action(GET_STEP_COLORS[SUCCESS], { colors }),
  failure: (message: string) => action(GET_STEP_COLORS[FAILURE], { message }),
}


export const getStepFromCMSByDay = {
  request: (day: number) => action(GET_STEP_FROM_CMS_BY_DAY[REQUEST], { day }),
  success: (step: IStep) => action(GET_STEP_FROM_CMS_BY_DAY[SUCCESS], { step }),
  failure: (message: string) => action(GET_STEP_FROM_CMS_BY_DAY[FAILURE], { message }),
}

