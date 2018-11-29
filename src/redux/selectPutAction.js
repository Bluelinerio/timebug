export const SELECT_PUT_ACTION = 'SELECT_PUT_ACTION';

export type SelectPutActionFnType = (
  state: any
) => { type: string, payload: any };

export type SelectPutActionType = {
  type: SELECT_PUT_ACTION,
  payload: { selectPut: SelectPutActionFnType },
};

export function selectPutAction(
  selectPut: SelectPutActionFnType
): SelectPutActionType {
  return {
    type: SELECT_PUT_ACTION,
    payload: {
      selectPut,
    },
  };
}

import { select, put, takeEvery } from 'redux-saga/effects';

function* execute(action: SelectPutActionType) {
  const { selectPut } = action.payload;
  const nextAction = yield select(selectPut);
  yield put(nextAction);
}
// is this actually happens serially? not sure, but it should be otherwise it needs a queue implemented.
export function* watchForSelectPutAction() {
  yield takeEvery(SELECT_PUT_ACTION, execute);
}
