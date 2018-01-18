// @flow
import { FETCH_CMS } from '../actions/cms.actions'
import type { Step, Colors, } from '../../services/cms'
const { steps, colors, about } = require('../../static/cms.json');

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
	error: null
}

function cmsReducer(state: CMSState = initialState, action: StepsAction) {
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

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key:'cms',
	storage: storage,
  blacklist: ['requestCount'],
  stateReconciler : (inboundState: CMSState, originalState: CMSState, reducedState: CMSState) => {
		const state = !inboundState || !inboundState.lastFetchDate || originalState.requestCount > 0
				? originalState 
			: originalState.lastFetchDate && originalState.lastFetchDate > inboundState.lastFetchDate
				? originalState
				: inboundState
		return state
	}
};

export default persistReducer(persistConfig, cmsReducer);