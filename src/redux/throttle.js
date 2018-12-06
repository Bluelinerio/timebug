import { put, throttle } from 'redux-saga/effects';

export const SAGA_THROTTLE = 'SAGA_THROTTLE';
export type ActionToThrottle = { type: string, payload?: any };
export type ThrottleActionType = {
  type: SAGA_THROTTLE,
  payload: ActionToThrottle,
};

export function throttleAction(payload: ActionToThrottle): ThrottleActionType {
  return {
    type: SAGA_THROTTLE,
    payload,
  };
}

function* execute(action: ThrottleActionType) {
  const actionToThrottle = action.payload;
  yield put(actionToThrottle);
}
// is this actually happens serially? not sure, but it should be otherwise it needs a queue implemented.
export function* watchForThrottleAction() {
  yield throttle(100, SAGA_THROTTLE, execute);
}
