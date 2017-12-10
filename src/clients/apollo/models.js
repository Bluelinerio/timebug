// @flow

export type ApolloUserResponse = {
	data: {
		User: ?User
	},
	errors: Array<Object>
}

export const UNDETERMINED = 'UNDETERMINED'
export const ANONYMOUS = 'ANONYMOUS'
export type UserState = { +user: User } | ANONYMOUS | UNDETERMINED

export type AuthState = {
	+isLoggedIn: boolean,
	+isLoading: boolean
}

export type User = {
	+facebookId: string,
	+id: string,
	+name: string,
	steps: ?Array<Object> /** Meta information about the query. */
}

export type AuthUser = {
	name: string,
	id: string
}
export type Auth = { token: string, user: AuthUser }
