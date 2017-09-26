// @flow
import {PENDING_END, PENDING_START} from '../constants/actionTypes';

interface NetworkState {
  isPending: boolean,
  requestsCount: number
}

interface NetworkAction {
	type: string
}

const initialState: NetworkState = {
  isPending: false,
	requestsCount: 0
};

export default function (state: NetworkState = initialState, action: NetworkAction) {
	switch (action.type) {

		case PENDING_START: {
			return {isPending: true, requestsCount: state.requestsCount + 1}
		}
		case PENDING_END: {
			let requestsCount = state.requestsCount - 1;
			let isPending = requestsCount > 0;
			return {isPending, requestsCount}
		}
		default:
			return state;
	}
}