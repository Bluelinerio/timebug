// @flow
export const UNDETERMIND = 0;
export const PUSH = 'EVENT.PUSH';
export const SNAPSHORT = 'EVENT.SNAPSHORT';

export type EventType = {}
export type EventsStanpshot = {}
export type EventContainer = {
  +events: [EventType],
  +snapshots: [EventsStanpshot],
	+lastFetchDate: 0,
	+requestCount: 0,
	+error: null,
}

export type EventsState = UNDETERMIND | EventContainer;
export type EventPushAction = { type: PUSH, payload: EventType }
export type EventSnaphotAction = { type: SNAPSHOT, payload: EventsStanpshot }

export const initialState = UNDETERMIND

function eventsReducer(state: EventsState = initialState, action: EventPushAction | EventSnaphotAction) {
  switch(action.type) {
    case PUSH:
      return {
        ...state && {},
        events: [...action.payload, ...state.events]
      }
    case SNAPSHORT:
      return {
        ...state && {},
        events: [...action.payload, ...state.snapshots]
      }
    default:
			return state;
  }
}


import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key:'event',
	storage: storage,
  blacklist: ['requestCount','error'],
  stateReconciler : (inboundState: EventsState, originalState: EventsState, reducedState: EventsState) => {
		const state = !inboundState || !inboundState.lastFetchDate || originalState.requestCount > 0
				? originalState 
			: originalState.lastFetchDate && originalState.lastFetchDate > inboundState.lastFetchDate
				? originalState
				: inboundState
		return state
	}
};

export default persistReducer(persistConfig, eventsReducer);