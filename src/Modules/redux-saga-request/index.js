// @flow
import { call, cancelled as cancelledSaga, put } from "redux-saga/effects";

/**
 * request can be used to call a promise in a saga and have events
 * dispatched indicating the promises status.
 */
type RequestActionType<M> = { type: String, meta?: M };
type RequestActionSuccessType<P, M> = { type: String, payload: P, meta?: M };
type RequestActionErrorType<M> = { type: String, error: any, meta?: M };
type AllAction<M> =
  | RequestActionType<M>
  | RequestActionSuccessType<M>
  | RequestActionErrorType<M>;

export type Request<P, M> = {
  BASE: string,
  STARTED: string,
  SUCCEEDED: string,
  ERRORED: string,
  CANCELLED: string,
  start: (meta?: M) => RequestActionType<M>,
  success: (payload: P, meta?: M) => RequestActionSuccessType<P, M>,
  error: (error: any, meta?: M) => RequestActionErrorType<M>,
  cancel: (meta?: M) => RequestActionErrorType<M>
};

type RequestNames = {
  BASE: string,
  STARTED: string,
  SUCCEEDED: string,
  ERRORED: string,
  CANCELLED: string
};

const createRequestNames = (type: string): RequestNames => {
  const BASE = type;
  const STARTED = `${type}_STARTED`;
  const SUCCEEDED = `${type}_SUCCEEDED`;
  const ERRORED = `${type}_ERRORED`;
  const CANCELLED = `${type}_CANCELLED`;
  return {
    BASE,
    STARTED,
    SUCCEEDED,
    ERRORED,
    CANCELLED
  };
};

type CreatorType = {
  start: (meta?: M) => RequestActionType<M>,
  success: (payload: P, meta?: M) => RequestActionSuccessType<P, M>,
  error: (error: any, meta?: M) => RequestActionErrorType<M>,
  cancel: (meta?: M) => RequestActionErrorType<M>
};

// Creates types and action creators for a request.
export function createRequest<P, M>(type: string): Request<P, M> {
  const BASE = type;
  const STARTED = `${type}_STARTED`;
  const SUCCEEDED = `${type}_SUCCEEDED`;
  const ERRORED = `${type}_ERRORED`;
  const CANCELLED = `${type}_CANCELLED`;
  const start = (meta?: M) => ({ type: STARTED, meta });
  const success = (payload: P, meta?: M) => ({
    type: SUCCEEDED,
    payload,
    meta
  });
  const error = (error: any, meta?: M) => ({ type: ERRORED, error, meta });
  const cancel = (meta?: M) => ({ type: CANCELLED, meta });

  return {
    BASE,
    STARTED,
    SUCCEEDED,
    ERRORED,
    CANCELLED,
    start,
    success,
    error,
    cancel
  };
}

export function* requestSaga<P, M>(
  type: Request<P, M>,
  func: () => Promise<P>,
  meta?: M
): AllAction<M> {
  // Get the request event types for this type.
  const { start, success, error, cancel } = type;

  // Put the started type.
  yield put(start(meta));

  try {
    // Attempt to call the promise.
    var payload: P | Promise<P> = yield call(func);

    // If it's successful put the succeeded type.
    return yield put(success(payload, meta));
  } catch (e) {
    // If it's unsuccessful put the errored type.
    return yield put(error(e, meta));
  } finally {
    if (yield cancelledSaga()) {
      // If this saga is cancelled put the cancelled type.
      return yield put(cancel(meta));
    }
  }
}

export function request<P, M>(
  type: Request<P, M>,
  func: () => Promise<P>,
  meta?: M
): void {
  return call(requestSaga, type, func, meta);
}
