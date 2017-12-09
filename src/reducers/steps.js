// @flow
import { GET_STEP_FROM_CMS_BY_STEP, GET_STEP_COLORS, SUCCESS } from '../constants/actionTypes'
import { getAllStepsFromCMS } from '../actions/steps'
import { IStep } from '../interfaces/IStep'
import { IColors } from '../interfaces/IColors'
import { colors } from '../constants/CMSData'

type StepsState = {
	requestCount: number,
	lastFetchDate: ?number,
	allSteps: IStep[],
	currentStep: ?IStep,
	colors: ?IColors
}

type StepsAction = {
	type: string,
	payload?: Array<IStep> | IColors
}

const initialState: StepsState = {
	requestCount: 0,
	allSteps: [],
	currentStep: null,
	lastFetchDate: null,
	colors
}

export default function(state: StepsState = initialState, action: StepsAction) {
	switch (action.type) {
		case getAllStepsFromCMS.STARTED:
			return { ...state, requestCount: state.requestCount + 1 }
		case getAllStepsFromCMS.SUCCEEDED:
			return { ...state, allSteps: action.payload, lastFetchDate: Date.now(), requestCount: state.requestCount - 1 }
		case (getAllStepsFromCMS.CANCELLED, getAllStepsFromCMS.ERRORED):
			return { ...state, requestCount: state.requestCount - 1 }
		case GET_STEP_COLORS[SUCCESS]:
			return { ...state, colors: action.colors }
		case GET_STEP_FROM_CMS_BY_STEP[SUCCESS]:
			return { ...state, currentStep: action.step }
		default:
			return state
	}
}
