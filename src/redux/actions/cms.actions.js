// @flow
import { action } from '../utils'
import {
	REQUEST,
	SUCCESS,
	FAILURE,
	GET_STEP_COLORS,
	GET_ABOUT_INFO_FROM_CMS
} from '../actionTypes'
import type { Step, Colors } from '../../services/cms'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'

export const FETCH_STEPS: Request<any, any> = createRequest('FETCH_STEPS')

export const getStepsColorFromCMS = {
	request: () => action(GET_STEP_COLORS[REQUEST]),
	success: (colors: Colors) => action(GET_STEP_COLORS[SUCCESS], { colors }),
	failure: (message: string) => action(GET_STEP_COLORS[FAILURE], { message })
}

export const getAboutInfoFromCMS = {
	request: () => action(GET_ABOUT_INFO_FROM_CMS[REQUEST]),
	success: (about: string) => action(GET_ABOUT_INFO_FROM_CMS[SUCCESS], { about }),
	failure: (message: string) => action(GET_ABOUT_INFO_FROM_CMS[FAILURE], { message })
}