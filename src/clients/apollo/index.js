// @flow

import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { APOLLO_CONFIG } from '../../constants/config'
import type { Auth, User, ApolloUserResponse } from './models'

const reduxRootSelector = state => {
	return state
}

export const client = new ApolloClient({
	createNetworkInterface(APOLLO_CONFIG)
})

export const fetchUserWithId = (userId: string) =>
	client
		.query({
			query: getUser,
			fetchPolicy: 'network-only',
			variables: {
				id: userId
			}
		})
		.then(graphResponse => graphResponse.data.getUser)

export const authenticateWithFBToken = (fbToken: string): Auth | Object =>
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
		.then(response => graphResponse.data.authenticateFB)

export const fetchUser = (id: string): ApolloUserResponse =>
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
		.then(response => graphResponse.data.User)

export const addStep = (userId: string, stepId: string, formData: any) =>
	client.mutate({
		mutation: gql`
			mutation add($userId: ID!, $stepInput: Json!) {
				addStep(userId: $userId, stepInput: $stepInput) {
					message
					user
				}
			}
		`,
		variables: { userId: userId, stepInput: JSON.stringify({ stepId, data: formData }) }
	})
