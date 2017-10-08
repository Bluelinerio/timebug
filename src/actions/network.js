// @flow
import { action }               from '../utils/actions';
import {
  START_REQUEST,
  FINISH_REQUEST,
}                               from '../constants/actionTypes';

export const startRequest  = () => action(START_REQUEST);
export const finishRequest = () => action(FINISH_REQUEST);
