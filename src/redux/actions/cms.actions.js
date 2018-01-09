// @flow
import { action } from '../utils'
import {
	REQUEST,
	SUCCESS,
	FAILURE,
	GET_ABOUT_INFO_FROM_CMS
} from '../actionTypes'
import type { Step, Colors } from '../../services/cms'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'

export const FETCH_CMS: Request<any, any> = createRequest('FETCH_CMS')