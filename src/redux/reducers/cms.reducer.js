// @flow
import { FETCH_CMS } from '../actions/cms.actions'
import type { Step, Colors, OnobardingPage } from '../../services/cms'
const { steps, colors, about, onboardingPages } = require('../../static/cms.json');

export type CMSState = {
	requestCount: number,
	lastFetchDate: ?number,
	totalNumberOfSteps: number,
	steps: Array<Step>,
	colors: Colors,
	onboardingPages: OnobardingPage,
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
	error: null,
	steps, colors, about, onboardingPages
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

// type PersistConfig = {
//   key: string, // the key for the persist
//   storage: Object, // the storage adapter, following the AsyncStorage api
//   version?: number, // the state version as an integer (defaults to -1)
//   blacklist?: Array<string>, // do not persist these keys
//   whitelist?: Array<string>, // only persist these keys
//   migrate?: (Object, number) => Promise<Object>,
//   transforms?: Array<Transform>,
//   throttle?: number,
//   keyPrefix?: string, // will be prefixed to the storage key
//   debug?: boolean, // true -> verbose logs
//   stateReconciler?: false | StateReconciler, // false -> do not automatically reconcile state
//   serialize?: boolean, // false -> do not call JSON.parse & stringify when setting & getting from storage
// }

