// @flow
import { ON_APP_LOADED } from '../actionTypes'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'
import type { UserState, Progress } from '../../services/apollo/models'
import { action, runnableAction } from '../utils';

export const GET_USER: Request<any, any> = createRequest('GET_USER')

// UPDATE_PROGRESS
const UPDATE_PROGRESS = 'UPDATE_PROGRESS'
const withProgress = (progress: Progress) => ({
	type: UPDATE_PROGRESS, progress
})
export const updateProgress = ({ withProgress, UPDATE: 'UPDATE_PROGRESS' })

//onAppLoaded
export const onAppLoaded = request => action(ON_APP_LOADED, request)
