// @flow
import { GET_ABOUT_INFO_FROM_CMS, SUCCEEDED } from '../constants/actionTypes';
import {ILogin} from "../interfaces/IStep";

interface LoginState {
	about: ILogin,
}

interface LoginAction {
	type: string,
	about: ILogin
}

const initialState: LoginState = {
	about: ''
};

export default function (state: LoginState = initialState, action: LoginAction) {
	switch (action.type) {
		case GET_ABOUT_INFO_FROM_CMS + SUCCEEDED:
			return {...state, about: action.about};
		default:
			return state;
	}
}