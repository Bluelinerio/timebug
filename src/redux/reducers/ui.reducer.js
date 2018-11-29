//@flow
import { CHANGE_UI_STATUS, RESET_UI_STATUS } from '../actionTypes';
import { UIActionPayload } from '../actions/ui.actions';

type UIState = {
  screens: any,
};

type UIAction = {
  type: CHANGE_UI_STATUS | RESET_UI_STATUS,
  payload: UIActionPayload,
};

const initialState = {
  screens: {},
};

const handleChange = (state: UIState, payload: UIActionPayload) => {
  const { screen, params } = payload;
  return {
    ...state,
    screens: {
      ...state.screens,
      [screen]: {
        ...(state.screens[screen] || {}),
        ...params,
      },
    },
  };
};

export default (state: UIState = initialState, action: UIAction) => {
  switch (action.type) {
  case CHANGE_UI_STATUS:
    return handleChange(state, action.payload);
  case RESET_UI_STATUS:
    return initialState;
  default:
    return state;
  }
};
