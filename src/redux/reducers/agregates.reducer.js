// https://facebook.github.io/react-native/docs/appstate.html
// active - The app is running in the foreground
// background - The app is running in the background. The user is either in another app or on the home screen
// inactive - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call

// @flow

export const UNDETERMIND = 0;
export const UPDATE = 'UPDATE';

export type AggregateType = {}
export type AggregateContainer = {
  +aggregate: AggregateType,
	+lastFetchDate: 0,
	+requestCount: 0,
	+error: null,
}

export type AggregateState = UNDETERMIND | AggregateContainer;
export type AggregateUpdateAction = { type: UPDATE, payload: AggregateType }

export const initialState = UNDETERMIND

function aggregateReducer(state: AggregateState = initialState, action: AggregateUpdateAction) {
  switch(action.type) {
    case UPDATE:
      return {
        ...state && {},
        ...action.payload
      }
    default:
			return state;
  }
}


import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key:'aggregate',
	storage: storage,
  blacklist: ['requestCount','error'],
  stateReconciler : (inboundState: AggregateState, originalState: AggregateState, reducedState: AggregateState) => {
    if(inboundState === UNDETERMIND) {
        return UNDETERMIND
    }
		const state = !inboundState || !inboundState.lastFetchDate || originalState.requestCount > 0
				? originalState 
			: originalState.lastFetchDate && originalState.lastFetchDate > inboundState.lastFetchDate
				? originalState
				: inboundState
		return state
	}
};

export default persistReducer(persistConfig, aggregateReducer);