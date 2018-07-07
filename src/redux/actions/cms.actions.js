// @flow
import { FETCH_CMS } from '../actionTypes'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'

export const fetchCms: Request<any, any> = createRequest(FETCH_CMS)
