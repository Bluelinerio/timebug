// @flow

import { ApolloClient, createNetworkInterface } from 'react-apollo'
import gql from 'graphql-tag'
import { APOLLO_CONFIG } from '../../constants/config'
import type { Auth, User, GraphErrors, GraphResponse, ErrorResponse } from './models'

const reduxRootSelector = state => {
	return state
}

export const networkInterface = createNetworkInterface(APOLLO_CONFIG)

export const client = new ApolloClient({ networkInterface })

const _parse = <T>(key: string, graphResponse: GraphResponse): T => {
	const { data } = graphResponse
	const value: T = data[key]
	if (value) {
		return value
	}
	const error: ErrorResponse = { error: data.errors }
	throw error
}

const parse = <T>(key: string) => (graphResponse: GraphResponse): T => _parse(key, graphResponse)

export const resetStore = client.resetStore;

export const authenticateWithFBToken = (fbToken: string): Auth =>
	client
		.query({
			query: gql`
				query auth($token: String!) {
					authenticateFB(facebookToken: $token) {
						token
						user
					}
				}
			`,
			fetchPolicy: 'network-only',
			variables: { token: fbToken }
		})
		.then(parse('authenticateFB'))

const fixMissingProgressInUser = (user: User) => {
	const step = user.steps[0] ? user.steps[0].stepId : 1
	const progress = { step, form: 1 }
	return { ...user, progress }
}

const fixUserFinished = (user: User) => {
	const step = user.steps[0] ? user.steps[0].stepId : 1
	const finished = step === 30 ? true : false
	return {...user, finished}
}

export const fetchUserWithId = (id: string): User =>
	client
		.query({
			query: gql`
				query getUser($id: ID!) {
					User(id: $id) {
						id
						facebookId
						name
						steps(orderBy: stepId_DESC, first: 1) {
							id
							stepId
							data
						}
					}
				}
			`,
			fetchPolicy: 'network-only',
			variables: { id }
		})
		.then(parse('User'))
		.then(fixMissingProgressInUser)
		.then(fixUserFinished)

export const addStep = ({userId: string, stepId: number, data: any}): any =>
	client
		.mutate({
			mutation: gql`
				mutation add($userId: ID!, $stepInput: Json!) {
					addStep(userId: $userId, stepInput: $stepInput) {
						message
						user
					}
				}
			`,
			variables: {
				userId: userId,
				stepInput: JSON.stringify({
					stepId,
					data: data
				})
			}
		})
		.then(parse('addStep'))

export const testUser = ({ userId }): any =>
	client
		.query({
			query: gql`
				query testUser($id:ID!){
					User(id: $id){
						id
						name
						facebookId
					}
				}
			`,
			variables: {
				userId: userId,
			}
		})
		.then(parse('User'))
