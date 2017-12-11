// @flow
import { GET_STEP_COLORS, SUCCESS } from '../actionTypes'
import { FETCH_STEPS } from '../actions/cms.actions'
import type { Step, Colors, } from '../../services/cms'
import { colors } from '../../static/CMSData'

export type StepsState = {
	requestCount: number,
	lastFetchDate: ?number,
	totalNumberOfSteps: number,
	allSteps: Array<Step>,
	colors: Colors
}

type StepsAction = {
	type: string,
	payload?: Array<Step> | Colors
}

const initialState: StepsState = {
	requestCount: 0,
	lastFetchDate: null,
	totalNumberOfSteps: 30,
	allSteps: [],
	colors
}

export default function(state: StepsState = initialState, action: StepsAction) {
	switch (action.type) {
		case FETCH_STEPS.STARTED:
			return { ...state, requestCount: state.requestCount + 1 }
		case FETCH_STEPS.SUCCEEDED:
			return {
				...state,
				allSteps: action.payload,
				lastFetchDate: Date.now(),
				requestCount: state.requestCount - 1
			}
		case (FETCH_STEPS.CANCELLED, FETCH_STEPS.ERRORED):
			return { ...state, requestCount: state.requestCount - 1 }
		case GET_STEP_COLORS[SUCCESS]:
			return { ...state, colors: action.colors }
		default:
			return state
	}
}