import { ANONYMOUS, AUTHENTICATING, UNDETERMINED } from '../../types'
import type { User } from '../../types'
import { getUserState } from './rootReducer.selectors'

// User
export const user = (state: any): ?User => (typeof getUserState(state) === 'string' ? undefined : getUserState(state))
export const isAnonymous = (state: any): boolean => getUserState(state) === ANONYMOUS
export const needsLogin = isAnonymous
export const isAuthenticating = (state: any): boolean => getUserState(state) === AUTHENTICATING
export const isUndetermined = (state: any): boolean => getUserState(state) === UNDETERMINED
export const isNotLoggedIn = (state: any): boolean => !user(state)
export const isLoggedIn = (state: any): boolean => !!user(state)
export const userId = (state: any) => user(state) && user(state).id

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
