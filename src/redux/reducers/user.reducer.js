// @flow
import type { UserStateAction } from '../actions'
import { SET_USER_STATE } from '../actions'
import type { User, UserState } from '../../services/apollo/models'
import { ANONYMOUS, UNDETERMINED } from '../../services/apollo/models'
import type { UpdateProgressAction, LogoutAction } from '../actions/user.actions'
import { GET_USER, updateProgress, LOGOUT } from '../actions/user.actions'
export const userFromResponse = (response: any): User => response.data.User

type Action = UserStateAction | UpdateProgressAction | LogoutAction

export default function(state: UserState = UNDETERMINED, action: Action) {
	switch (action.type) {
		case SET_USER_STATE:
			return action.state;
		case GET_USER.SUCCEEDED:
			return action.payload
    case updateProgress.UPDATE:
      const { progress } = action;
      const user = state.user;
			return { ...state, user: { ...user, progress } }
		case LOGOUT.type:
			return ANONYMOUS
		default:
			return state
	}
}
