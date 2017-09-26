// @flow
import {PENDING_END, PENDING_START} from '../constants/actionTypes';

interface NetworkState {
  isPending: boolean,
}

interface NetworkAction {
	type: string
}

const initialState: NetworkState = {
  isPending: false
};

export default function (state: NetworkState = initialState, action: NetworkAction) {
	switch (action.type) {

		case PENDING_START: {
			return {isPending: true}
		}
		case PENDING_END: {
			return {isPending: false}
		}
		default:
			return state;
	}
}