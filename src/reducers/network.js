// @flow
import { SUCCEEDED } from '../constants/actionTypes';

interface NetworkState {
  isPending: boolean,
}

interface NetworkAction {
	type: string,
  isPending: boolean
}

const initialState: NetworkState = {
  isPending: false
};

export default function (state: NetworkState = initialState, action: NetworkAction) {
	switch (action.type) {
		default:
			return state;
	}
}