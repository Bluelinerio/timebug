export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const INCREMENT_REQUEST_COUNT = 'INCREMENT_REQUEST_COUNT'
export const DECREMENT_REQUEST_COUNT = 'DECREMENT_REQUEST_COUNT'

// descriptive

// global

//navigation
export const LOGIN_WITH_FB_BUTTON_PRESSED = 'LOGIN_WITH_FB_BUTTON_PRESSED'
export const FB_LOGIN_DIALOG_RESPONDED = 'FB_LOGIN_DIALOG_RESPONDED'
export const LOGOUT = 'LOGOUT'
export const REFRESH_USER = 'REFRESH_USER'
export const GO_TO_HOME_SCREEN = 'GO_TO_HOME_SCREEN'
export const SAGA_NAVIGATE = 'SAGA_NAVIGATE'

//
export const UPDATE_USER = 'UPDATE_USER'
//checkins
export const SUBMIT_CHECKIN = 'SUBMIT_CHECKIN'
//forms
export const SUBMIT_FORM_VALUE = 'SUBMIT_FORM_VALUE'
export const SYNC_FORM_DATA = 'SYNC_FORM_DATA'
export const INCREMENT_FORM_QUEUE = 'INCREMENT_FORM_QUEUE'
export const DECREMENT_FORM_QUEUE = 'DECREMENT_FORM_QUEUE'
export const INCREMENT_FORM_DATA_QUEUE = 'INCREMENT_FORM_DATA_QUEUE'
export const DECREMENT_FORM_DATA_QUEUE = 'DECREMENT_FORM_DATA_QUEUE'
export const RESET_FORMS_REQUEST = 'RESET_FORMS_REQUEST'
export const RESET_USER_STEPS = 'RESET_USER_STEPS'

export const START_LOADING_FORMDATA = 'START_LOADING_FORMDATA'
export const STOP_LOADING_FORMDATA = 'STOP_LOADING_FORMDATA'

export const SET_LOADING_FORMDATA = 'SET_LOADING_FORMDATA'

export const RESET_FORMS = 'RESET_FORMS'

export const ON_APP_LOADED = 'ON_APP_LOADED'

export const SYNC_FINISHED = 'SYNC_FINISHED'

export const RESTORE_FORM_DATA = 'RESTORE_FORM_DATA'

export const SYNC_SIDE_EFFECTS = 'SYNC_SIDE_EFFECTS'

export const DELETE_FORM_VALUE = 'DELETE_FORM_VALUE'

export const EDIT_FORM_VALUE = 'EDIT_FORM_VALUE'

/**
 * Awards / Tools
 */
export const SUBMIT_AWARD_VALUE_EXTENDED = 'SUBMIT_AWARD_VALUE_EXTENDED'

export const EVALUATE_AWARD_DATA_EXTENDED = 'EVALUATE_AWARD_DATA_EXTENDED'

export const SUBMIT_AWARD_VALUE = 'SUBMIT_AWARD_VALUE'

export const RESET_AWARD_VALUE = 'RESET_AWARD_VALUE'

export const LOAD_AWARD_VALUE = 'LOAD_AWARD_VALUE'

export const SYNC_TOOL_DATA = 'SYNC_TOOL_DATA'

export const TOOL_SYNC_FINISHED = 'TOOL_SYNC_FINISHED'

export const EXECUTE_TOOL_SYNC = 'EXECUTE_TOOL_SYNC'

export const INCREMENT_TOOL_DATA_QUEUE = 'INCREMENT_TOOL_DATA_QUEUE'

export const DECREMENT_TOOL_DATA_QUEUE = 'DECREMENT_TOOL_DATA_QUEUE'

export const RESTORE_TOOL_DATA = 'RESTORE_TOOL_DATA'

export const CLEAR_TOOL_DATA = 'CLEAR_TOOL_DATA'

/**
 * Modal
 */

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

/**
 * UI
 */

export const CHANGE_UI_STATUS = 'CHANGE_UI_STATUS'
export const RESET_UI_STATUS = 'RESET_UI_STATUS'

/**
 * Checkins
 */
export const CHANGE_CHECKIN = 'CHANGE_CHECKIN'

export const UPDATE_CHECKIN = 'UPDATE_CHECKIN'

export const REMOVE_CHECKIN = 'REMOVE_CHECKIN'

export const DELETE_CHECKIN = 'DELETE_CHECKIN'

export const TOGGLE_CHECKIN = 'TOGGLE_CHECKIN'

export const CHECKIN_NOTIFICATION = 'CHECKIN_NOTIFICATION'

export const EDIT_CHECKIN = 'EDIT_CHECKIN'

/**
 * Notifications
 */
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION'

export const CANCEL_ALL_NOTIFICATIONS = 'CANCEL_ALL_NOTIFICATIONS'

export const BUILD_NOTIFICATION_SET = 'BUILD_NOTIFICATION_SET'

export const ON_NOTIFICATION = 'ON_NOTIFICATION'

export const SCHEDULED_NOTIFICATION = 'SCHEDULED_NOTIFICATION'

export const REMOVED_NOTIFICATION = 'REMOVED_NOTIFICATION'

export const UPDATE_OR_CREATE_CHECKIN = 'UPDATE_OR_CREATE_CHECKIN'

export const TRIGGER_NOTIFICATION = 'TRIGGER_NOTIFICATION'

/**
 * Linking
 */

export const LINK_NAVIGATION = 'LINK_NAVIGATION'

/**
 * Persist
 */

export const STORE_LOADED = 'STORE_LOADED'

/**
 * Goals
 */

export const ADD_GOAL_STEP = 'ADD_GOAL_STEP'

export const REMOVE_GOAL_STEP = 'REMOVE_GOAL_STEP'

export const UPDATE_GOAL_STEP = 'UPDATE_GOAL_STEP'

export const UPDATE_GOAL_STEP_INNER = 'UPDATE_GOAL_STEP_INNER'

export const SYNC_GOAL_STEPS = 'SYNC_GOAL_STEPS'

export const CLEAR_GOAL_STEPS = 'CLEAR_GOAL_STEPS'

export const REMOVE_GOAL = 'REMOVE_GOAL'

export const GOAL_NOTIFICATION = 'GOAL_NOTIFICATION'

/**
 * App state
 */

export const VERSION = 'VERSION'

export const FIREBASE_SETUP = 'FIREBASE_SETUP'

export const SET_FIREBASE_MESSAGING_PERMISSION = 'SET_FIREBASE_MESSAGING_PERMISSION'

export const UPDATE_AND_CREATE_FORMS = 'UPDATE_AND_CREATE_FORMS'

/**
 * Contacts
 */
export const REQUEST_PERMISSIONS = 'REQUEST_PERMISSIONS'

export const UPDATE_PERMISSION = 'UPDATE_PERMISSION'

export const CHECK_CONTACT_PERMISSION = 'CHECK_CONTACT_PERMISSION'

export const REQUEST_PERMISSIONS_DONE = 'REQUEST_PERMISSIONS_DONE'

export const ADD_CONTACT = 'ADD_CONTACT'

export const REMOVE_CONTACT = 'REMOVE_CONTACT'

export const SYNC_CONTACT_PERMISSION = 'SYNC_CONTACT_PERMISSION'


/**
 * Form side effects
 */

export const GOALS_SIDE_EFFECT = 'GOALS_SIDE_EFFECT'

/**
 * Permissions
 */

export const ADD_PERMISSION = 'ADD_PERMISSION'

export const REMOVE_PERMISSION = 'REMOVE_PERMISSION'

export const DENY_PERMISSION = 'DENY_PERMISSION'

export const PERMANTENTLY_DENY_PERMISSION = 'PERMANTENTLY_DENY_PERMISSION'

export const SET_PERMISSION_STATUS = 'SET_PERMISSION_STATUS'
