// @flow
import type { UserStateAction } from '../actions'
import { SET_USER_STATE } from '../actions'
import type { User, UserState , Progress} from '../../services/apollo/models'
import { ANONYMOUS, UNDETERMINED, AUTHENTICATING } from '../../services/apollo/models'
import { GET_USER, updateProgress } from '../actions/user.actions'
import { LOGOUT, UPDATE_PROGRESS } from '../actionTypes'

export const userFromResponse = (response: any): User => response.data.User

type LogoutAction = { type: LOGOUT }
type UpdateProgressAction = { type: UPDATE_PROGRESS, progress: Progress }

type Action = UserStateAction | UpdateProgressAction | LogoutAction

export default function(state: UserState = UNDETERMINED, action: Action) {
	switch (action.type) {
		case SET_USER_STATE:
			return action.state;
		case GET_USER.STARTED:
			return AUTHENTICATING
		case GET_USER.SUCCEEDED:
			return action.payload
    	case updateProgress.UPDATE:
			const { progress } = action;
			return { ...state, progress }
		case LOGOUT:
			return ANONYMOUS
		default:
			return state
	}
}
