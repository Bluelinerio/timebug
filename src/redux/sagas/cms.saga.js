// @flow
import { takeLatest, fork, put, call } from 'redux-saga/effects'
import { SEED_CMS, REFRESH_CMS } from '../actionTypes'
import { refreshCms } from '../actions'
import { fetchCms } from '../actions/cms.actions'
import { refreshContentful, testContentFromCMS } from '../../services/contentful'
import { requestSaga } from '../../Modules/redux-saga-request'
import { headerBackgrounds } from '../../resources/images'
let staticCms = require('../../static/cms.json')
const meditations = require('../../static/Meditations.json')

const addLocalImage = step => ({
	...step,
	image: headerBackgrounds[step.stepId]
})

function* seedCMS() {
	staticCms.steps = Object.values(staticCms.steps).reduce(
		(sum, step) => ({
			...sum,
			[step.stepId]: addLocalImage(step)
		}),
		{}
	)
	yield put({
		type: SEED_CMS,
		payload: {
			...staticCms,
			meditations
		}
	})
}

const addLocalImageToSteps = ({ steps, ...rest }) => ({
	...rest,
	steps: Object.values(steps).reduce(
		(sum, step) => ({
			...sum,
			[step.stepId]: addLocalImage(step)
		}),
		{}
	)
})

const _refreshContentful = () => refreshContentful()
	.then(addLocalImageToSteps)
	.then(__DEV__ ? testContentFromCMS : () => null)

function* _fetchCms() {
	yield call(requestSaga, fetchCms, _refreshContentful)
}

function* watchFetchSteps() {
	yield takeLatest(REFRESH_CMS, _fetchCms)
}

export default function* cmsSaga() {
	yield fork(seedCMS)
	yield fork(watchFetchSteps)
	yield put(refreshCms())
}
