// @flow
import { action }               from '../utils/actions';
import {
  INCREMENT_REQUEST_COUNT,
  DECREMENT_REQUEST_COUNT,
}                               from '../constants/actionTypes';

export const incrementRequestCount  = () => action(INCREMENT_REQUEST_COUNT);
export const decrementRequestCount = () => action(DECREMENT_REQUEST_COUNT);
