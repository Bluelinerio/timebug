// @flow
import { GET_TOKEN_FROM_STORAGE, GET_USER_PROGRESS, SUCCEEDED, } from '../constants/actionTypes';

interface UserState {
  userID: string,
  progress: {
    step: string,
    formStep: number,
  }
}

interface UserAction {
  type: string,
  userID: string,
  progress: {
    step: string,
    formStep: number,
  }
}

const initialState: UserState = {
  userID: null,
  progress: null,
};

export default function (state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case GET_USER_PROGRESS + SUCCEEDED:
      let { type, ...newState } = action;
      return { ...state, ...newState };
    case  GET_TOKEN_FROM_STORAGE + SUCCEEDED:
      return {
        ...state,
        userID: action.userID,
      };
    default:
      return state;
  }
}