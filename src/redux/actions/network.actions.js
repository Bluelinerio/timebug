// @flow
import { action }               from '../utils';
import {
  INCREMENT_REQUEST_COUNT,
  DECREMENT_REQUEST_COUNT,
}                               from '../actionTypes';

export const incrementRequestCount  = action(INCREMENT_REQUEST_COUNT);
export const decrementRequestCount = action(DECREMENT_REQUEST_COUNT);
