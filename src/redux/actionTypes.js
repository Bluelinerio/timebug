import { createActionsObject } from './utils';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = (base) => createActionsObject(base, REQUEST, SUCCESS, FAILURE);
  
export const INCREMENT_REQUEST_COUNT = 'INCREMENT_REQUEST_COUNT';
export const DECREMENT_REQUEST_COUNT = 'DECREMENT_REQUEST_COUNT';

// descriptive

// global

//fetching
export const GET_STEP_COLORS           = createRequestTypes('GET_STEP_COLORS');
export const GET_ABOUT_INFO_FROM_CMS   = createRequestTypes('GET_ABOUT_INFO_FROM_CMS');

//navigation
export const LOGIN_WITH_FB_BUTTON_PRESSED        = 'LOGIN_WITH_FB_BUTTON_PRESSED';
export const LOGOUT                              = 'LOGOUT';
export const GO_TO_HOME_SCREEN                   = 'GO_TO_HOME_SCREEN';
export const SAGA_NAVIGATE                       = 'SAGA_NAVIGATE';

//forms
export const POPULATE_FORM_VALUE          = 'POPULATE_FORM_VALUE';
export const POPULATE_CURRENT_FORM_VALUE  = 'POPULATE_CURRENT_FORM_VALUE';
export const SET_FORM                     = 'SET_FORM';

export const ON_APP_LOADED = 'ON_APP_LOADED';