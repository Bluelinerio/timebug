import { ANONYMOUS, AUTHENTICATING, UNDETERMINED } from '../../types'
import type { User } from '../../types'
import { getUserState } from './rootReducer.selectors'

// User
const user = (state: any): ?User => (typeof getUserState(state) === 'string' ? undefined : getUserState(state))
const isAnonymous = (state: any): boolean => getUserState(state) === ANONYMOUS
const needsLogin = isAnonymous
const isAuthenticating = (state: any): boolean => getUserState(state) === AUTHENTICATING
const isUndetermined = (state: any): boolean => getUserState(state) === UNDETERMINED
const isNotLoggedIn = (state: any): boolean => !user(state)
const isLoggedIn = (state: any): boolean => !!user(state)
const userId = (state: any) => user(state) && user(state).id

export default {
	user,
	userId,
	isLoggedIn,
	isNotLoggedIn,
	isAnonymous,
	needsLogin,
	isUndetermined,
	isAuthenticating
}
