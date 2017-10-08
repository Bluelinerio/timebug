// @flow
import { FINISH_REQUEST, START_REQUEST } from '../constants/actionTypes';

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

    case START_REQUEST: {
      return {
        isPending: true,
        requestsCount: state.requestsCount + 1,
      }
    }
    case FINISH_REQUEST: {
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