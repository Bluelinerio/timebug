// @flow
import { ON_APP_LOADED } from '../actionTypes'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'
import type { UserState, Progress } from '../../services/apollo/models'
import { action, runnableAction } from '../utils';

export const GET_USER: Request<any, any> = createRequest('GET_USER')

//onAppLoaded
export const onAppLoaded = request => action(ON_APP_LOADED, request)
