// @flow

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

import type { Auth, User, GraphErrors, GraphResponse, ErrorResponse } from './models'

type AddStepArgs = {
	userId: string,
	stepId: number,
	data: any
}

export const endpoints = {
	simple: 'https://api.graph.cool/simple/v1/cjcngby1o2n9r0177p3htvfag'
}

export const client = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple }),
  cache: new InMemoryCache()
});

const _parse = <T>(key: string, graphResponse: GraphResponse): T => {
	const { data, error } = graphResponse
	const value: T = data[key]
	if (value) {
		return value
	}
	throw { error: error | 'User not found'}
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

const handleErrorGettingUser = (errorResponse: ErrorResponse) => {
	throw errorResponse
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
						email
						achievements {
							tagName
							updatedAt
							createdAt
						}
						forms(orderBy: stepId_DESC, first: 20) {
							id
							createdAt
							updatedAt
							stepId
							data
						}
					interactionRequests {
						requestedUser {
							facebookId
							name
						}
						aprovedAt
						sentAt
						status
					}    
					}
				}
			`,
			fetchPolicy: 'network-only',
			variables: { id }
		})
		.then(parse('User'))
		.catch(handleErrorGettingUser)

export const addStep = ({ userId, stepId, data } : AddStepArgs): any =>
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
						steps(orderBy: stepId_DESC, first: 1) {
							id
							stepId
							data
						}
					}
				}
			`,
			variables: {
				userId: userId,
			}
		})
		.then(parse('User'))
