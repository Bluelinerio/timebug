// @flow


export type GraphErrors = Array<Object>

export type GraphResponse = {
	data: Object,
	errors: GraphErrors
}
export type ErrorResponse = { 
	error: GraphResponse 
}

export const UNDETERMINED = 'UNDETERMINED'
export const ANONYMOUS = 'ANONYMOUS'
export const AUTHENTICATING = 'AUTHENTICATING'

export type UserState = { +user: User } | ANONYMOUS | UNDETERMINED

export type AuthState = {
	+isLoggedIn: boolean,
	+isLoading: boolean
}

export type Progress = {
	+step: number,
	+form: number
}

export type User = {
	+facebookId: string,
	+id: string,
	+name: string,
	+steps: ?Array<Object>, /** Meta information about the query. */
	+progress :Progress,
	+finished: boolean
}

export type AuthUser = {
	name: string,
	id: string
}
export type Auth = { token: string, user: AuthUser }