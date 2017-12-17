// @flow
import { ON_APP_LOADED, USER_FINISHED } from '../actionTypes'
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

export const userFinished = {
	finish: () => action(USER_FINISHED)
}

//onAppLoaded
export const onAppLoaded = request => action(ON_APP_LOADED, request)
