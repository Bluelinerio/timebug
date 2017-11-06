import { createActionsObject } from '../utils/actions';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = (base) => createActionsObject(base, REQUEST, SUCCESS, FAILURE);
  
export const INCREMENT_REQUEST_COUNT = 'INCREMENT_REQUEST_COUNT';
export const DECREMENT_REQUEST_COUNT = 'DECREMENT_REQUEST_COUNT';

//fetching
export const GET_ALL_STEPS_FROM_CMS    = createRequestTypes('GET_ALL_STEPS_FROM_CMS');
export const GET_STEP_FROM_CMS_BY_STEP = createRequestTypes('GET_STEP_FROM_CMS_BY_STEP');
export const GET_STEP_COLORS           = createRequestTypes('GET_STEP_COLORS');
export const GET_ABOUT_INFO_FROM_CMS   = createRequestTypes('GET_ABOUT_INFO_FROM_CMS');
export const GET_USER_PROGRESS         = createRequestTypes('GET_USER_PROGRESS');
export const LOGIN_WITH_FACEBOOK       = createRequestTypes('LOGIN_WITH_FACEBOOK');
export const GET_TOKEN_FROM_STORAGE    = createRequestTypes('GET_TOKEN_FROM_STORAGE');

//navigation
export const GO_TO_HOME_SCREEN                   = 'GO_TO_HOME_SCREEN';
export const GO_TO_STEP_SCREEN                   = 'GO_TO_STEP_SCREEN';
export const GO_TO_ASSIGNMENT_LEAD_IN_SCREEN     = 'GO_TO_ASSIGNMENT_LEAD_IN_SCREEN';
export const GO_TO_WORKBOOK_SCREEN               = 'GO_TO_WORKBOOK_SCREEN';
export const GO_TO_ASSIGNMENT_DONE_SCREEN        = 'GO_TO_ASSIGNMENT_DONE_SCREEN';
export const GO_TO_ASSIGNMENT_FLOW               = 'GO_TO_ASSIGNMENT_FLOW';

//forms
export const GET_NEXT_FORM = 'GET_NEXT_FORM';
export const SET_NEXT_FORM = 'SET_NEXT_FORM';

export const ON_APP_LOADED = 'ON_APP_LOADED';
