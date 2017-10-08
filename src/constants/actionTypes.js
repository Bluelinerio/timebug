import { createActionsObject } from '../utils/actions';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = (base) => createActionsObject(base, REQUEST, SUCCESS, FAILURE);
  
export const START_REQUEST = 'START_REQUEST';
export const FINISH_REQUEST   = 'FINISH_REQUEST';

//fetching
export const GET_ALL_STEPS_FROM_CMS    = createRequestTypes('GET_ALL_STEPS_FROM_CMS');
export const GET_STEP_FROM_CMS_BY_DAY = createRequestTypes('GET_STEP_FROM_CMS_BY_DAY');
export const GET_ABOUT_INFO_FROM_CMS   = createRequestTypes('GET_ABOUT_INFO_FROM_CMS');
export const GET_USER_PROGRESS         = createRequestTypes('GET_USER_PROGRESS');
export const LOGIN_WITH_FACEBOOK       = createRequestTypes('LOGIN_WITH_FACEBOOK');
export const GET_TOKEN_FROM_STORAGE    = createRequestTypes('GET_TOKEN_FROM_STORAGE');

//navigation
export const GO_TO_HOME_SCREEN            = 'GO_TO_HOME_SCREEN';
export const GO_TO_TEXT_SCREEN            = 'GO_TO_TEXT_SCREEN';
export const GO_TO_ASSIGNMENTS_SCREEN     = 'GO_TO_ASSIGNMENTS_SCREEN';
export const GO_TO_WORKBOOK_SCREEN        = 'GO_TO_WORKBOOK_SCREEN';
export const GO_TO_CONGRATULATIONS_SCREEN = 'GO_TO_CONGRATULATIONS_SCREEN';

//forms
export const GET_NEXT_FORM = 'GET_NEXT_FORM';
export const SET_NEXT_FORM = 'SET_NEXT_FORM';

export const ON_APP_LOADED = 'ON_APP_LOADED';
