// @flow
import { createRequest } from '../../Modules/redux-saga-request';
import type { Request } from '../../Modules/redux-saga-request';

export const FETCH_CMS: Request<any, any> = createRequest('FETCH_CMS');
export const SEED_CMS = 'SEED_CMS';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
