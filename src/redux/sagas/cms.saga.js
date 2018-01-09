// @flow

import { throttle, fork, call, cancelled, put, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { REFRESH_CMS } from '../actions'
import { incrementRequestCount, decrementRequestCount } from '../actions/network.actions'
import { FETCH_CMS } from '../actions/cms.actions'
import { refreshCMS } from '../../services/contentful';
import networkState from '../../utils/networkState'
import { Colors, Step } from '../../services/cms'
import { request } from '../../Modules/redux-saga-request'

function * _fetchCms() {
	return yield request(FETCH_CMS, refreshCMS)
}

function * watchFetchSteps() {
	yield throttle(500, REFRESH_CMS.type, _fetchCms)
}

export default function* cmsSaga() {
	yield fork(watchFetchSteps)
	yield put(REFRESH_CMS);
}
