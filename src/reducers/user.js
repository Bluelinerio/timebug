// @flow
// TODO: this file is conflicted, check sibling file and delete
import { GET_TOKEN_FROM_STORAGE, GET_USER_PROGRESS, SUCCESS, USER_FINISHED } from '../constants/actionTypes'; 

export interface UserState {
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
  finished: false
};

export default function (state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case GET_USER_PROGRESS[SUCCESS]:
      let { type, ...newState } = action;
      return { ...state, ...newState };
    case  GET_TOKEN_FROM_STORAGE[SUCCESS]:
      return {
        ...state,
        userID: action.userID,
      };
    case USER_FINISHED:
      return { ...state, finished: true}
    default:
      return state;
  }
}