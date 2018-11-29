//@flow
import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes';
import { ModalActionPayload } from '../actions/modal.actions';

type ModalState = {
  openKeys: Array<string>,
  params: any,
};

type ModalAction = {
  type: OPEN_MODAL | CLOSE_MODAL,
  payload: ModalActionPayload,
};

const initialState: ModalState = {
  openKeys: [],
  params: {},
};

const isKeyInState = (state: ModalState, modalKey: string) =>
  !!state.openKeys.find(key => key === modalKey);

const handleOpen = (state: ModalState, payload: ModalActionPayload) => {
  const { key, params } = payload;
  if (!isKeyInState(state, key))
    return {
      ...state,
      openKeys: [...state.openKeys, key],
      params: {
        ...state.params,
        [key]: params,
      },
    };
  return state;
};

const handleClose = (state: ModalState, payload: ModalActionPayload) => {
  const { key } = payload;
  if (isKeyInState(state, key))
    return {
      ...state,
      openKeys: state.openKeys.filter(k => k !== key),
      params: {
        ...state.params,
        [key]: null,
      },
    };
  return state;
};

export default (state: ModalState = initialState, action: ModalAction) => {
  switch (action.type) {
  case OPEN_MODAL:
    return handleOpen(state, action.payload);
  case CLOSE_MODAL:
    return handleClose(state, action.payload);
  default:
    return state;
  }
};
