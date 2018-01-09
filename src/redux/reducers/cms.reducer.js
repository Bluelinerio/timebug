// @flow
import { FETCH_CMS } from '../actions/cms.actions'
import type { Step, Colors, } from '../../services/cms'
const { steps, colors, about} = require('../../static/cms.json');


export type CMSState = {
	requestCount: number,
	lastFetchDate: ?number,
	totalNumberOfSteps: number,
	steps: Array<Step>,
	colors: Colors,
	error: ?string
}

type StepsAction = {
	type: string,
	payload?: Array<Step> | Colors
}

const initialState: CMSState = {
	requestCount: 0,
	lastFetchDate: null,
	totalNumberOfSteps: 30,
	about,
	steps,
	colors,
	error: null
}

export default function(state: CMSState = initialState, action: StepsAction) {
	switch (action.type) {
		case FETCH_CMS.STARTED:
			return { ...state, requestCount: state.requestCount + 1 }
			case FETCH_CMS.SUCCEEDED:
			return {
				...state,
				...action.payload,
				lastFetchDate: Date.now(),
				requestCount: state.requestCount - 1
			}
			case (FETCH_CMS.CANCELLED, FETCH_CMS.ERRORED):
			return { ...state, requestCount: state.requestCount - 1, error: action.error || null }
			default:
			return state
	}
}