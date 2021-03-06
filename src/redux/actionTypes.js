import { createActionsObject } from './utils';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = base =>
  createActionsObject(base, REQUEST, SUCCESS, FAILURE);

export const INCREMENT_REQUEST_COUNT = 'INCREMENT_REQUEST_COUNT';
export const DECREMENT_REQUEST_COUNT = 'DECREMENT_REQUEST_COUNT';

// descriptive

// global

//navigation
export const LOGIN_WITH_FB_BUTTON_PRESSED = 'LOGIN_WITH_FB_BUTTON_PRESSED';
export const FB_LOGIN_DIALOG_RESPONDED = 'FB_LOGIN_DIALOG_RESPONDED';
export const LOGOUT = 'LOGOUT';
export const REFRESH_USER = 'REFRESH_USER';
export const GO_TO_HOME_SCREEN = 'GO_TO_HOME_SCREEN';
export const SAGA_NAVIGATE = 'SAGA_NAVIGATE';

//
export const UPDATE_USER = 'UPDATE_USER';
//forms
export const SUBMIT_FORM_VALUE = 'SUBMIT_FORM_VALUE';
export const SYNC_FORM_DATA = 'SYNC_FORM_DATA';
export const INCREMENT_FORM_QUEUE = 'INCREMENT_FORM_QUEUE';
export const DECREMENT_FORM_QUEUE = 'DECREMENT_FORM_QUEUE';
export const INCREMENT_FORM_DATA_QUEUE = 'INCREMENT_FORM_DATA_QUEUE';
export const DECREMENT_FORM_DATA_QUEUE = 'DECREMENT_FORM_DATA_QUEUE';

export const ON_APP_LOADED = 'ON_APP_LOADED';
