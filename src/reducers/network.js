// @flow
import { DECREMENT_REQUEST_COUNT, INCREMENT_REQUEST_COUNT } from '../constants/actionTypes';

interface NetworkState {
  isPending: boolean,
  requestsCount: number
}

interface NetworkAction {
  type: string
}

const initialState: NetworkState = {
  isPending: false,
  requestsCount: 0,
};

export default function (state: NetworkState = initialState, action: NetworkAction) {
  switch (action.type) {

    case INCREMENT_REQUEST_COUNT: {
      return {
        isPending: true,
        requestsCount: state.requestsCount + 1,
      }
    }
    case DECREMENT_REQUEST_COUNT: {
      let requestsCount = state.requestsCount - 1;
      let isPending     = requestsCount > 0;
      return {
        isPending,
        requestsCount,
      }
    }
    default:
      return state;
  }
}