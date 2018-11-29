// @flow
import {
  DECREMENT_REQUEST_COUNT,
  INCREMENT_REQUEST_COUNT,
} from '../actionTypes';

type NetworkState = number;

type NetworkAction =
  | { type: DECREMENT_REQUEST_COUNT }
  | { type: INCREMENT_REQUEST_COUNT };

const initialState: number = 0;

export default function(
  state: NetworkState = initialState,
  action: NetworkAction
) {
  switch (action.type) {
  case INCREMENT_REQUEST_COUNT:
    return state + 1;
  case DECREMENT_REQUEST_COUNT:
    return state - 1;
  default:
    return state;
  }
}
