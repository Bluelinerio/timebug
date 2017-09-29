// @flow
import {
  FACEBOOK_LOGIN,
  GET_ABOUT_INFO_FROM_CMS,
  SUCCEEDED,
  GET_TOKEN_FROM_STORAGE
} from '../constants/actionTypes';

interface LoginState {
  about: string,
  isLoggedIn: boolean
}

interface LoginAction {
  type: string,
  about: ?string
}

const initialState: LoginState = {
  about: '',
  isLoggedIn: false,
};

export default function (state: LoginState = initialState, action: LoginAction) {
  switch (action.type) {
    case GET_ABOUT_INFO_FROM_CMS + SUCCEEDED:
      return {
        ...state,
        about: action.about,
      };
    case FACEBOOK_LOGIN + SUCCEEDED:
      return {
        ...state,
        isLoggedIn: true,
      };
    case GET_TOKEN_FROM_STORAGE + SUCCEEDED:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}