// @flow
import { ON_APP_LOADED } from '../actionTypes'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'
import type { UserState, Progress } from '../../services/apollo/models'
import { action, runnableAction } from '../utils';

export const GET_USER: Request<any, any> = createRequest('GET_USER')

// UPDATE_PROGRESS
const UPDATE_PROGRESS = 'UPDATE_PROGRESS'
export type UpdateProgressAction = { type: typeof UPDATE_PROGRESS, progress: Progress }
const withProgress = (progress: Progress): UpdateProgressAction => ({
	type: UPDATE_PROGRESS, progress
})
export const updateProgress = ({ withProgress, UPDATE: 'UPDATE_PROGRESS' })

// LOGOUT
export type LogoutAction = { type: 'LOGOUT' }
export const LOGOUT = action('LOGOUT');

//onAppLoaded
export const onAppLoaded = request => action(ON_APP_LOADED, request)
