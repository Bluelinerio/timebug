// @flow

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import type { 
	Auth, 
	User, 
	GraphErrors, 
	GraphResponse, 
	ErrorResponse, 
	CreateFormArgs,
	UpdateormArgs,
} from './models'


export const endpoints = {
	simple: 'https://api.graph.cool/simple/v1/cjdowhhkd5x86012230izght0'
}

export const client = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple }),
  cache: new InMemoryCache()
});

import { temporaryUserAdditions } from './tmp';

const _parse = <T>(key: string, graphResponse: GraphResponse): T => {
	const { data, error } = graphResponse
	const value: T = {
		...data[key],
		endpoint:endpoints.simple
	}
	if (value) {
		return temporaryUserAdditions(value)
	}
	throw { error: error || 'User not found'}
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

const userSortedFormFragment = gql`
	fragment SortedForms on User {
		forms(orderBy: stepId_DESC, first: 20) {
			id
			createdAt
			updatedAt
			stepId
			data
		}
	}
`
const userFragments = gql`
	fragment SortedForms on User {
		forms(orderBy: stepId_DESC, first: 20) {
			id
			createdAt
			updatedAt
			stepId
			data
		}
	}
	fragment UserAchievements on User {
		achievements {
			tagName
			updatedAt
			createdAt
			updates {
				id
				createdAt
				value
			}
		}
	}
`


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
						...UserAchievements
						...SortedForms
					}
				}
				${userFragments}
			`,
			fetchPolicy: 'network-only',
			variables: { id }
		})
		.then(parse('User'))
		.catch(handleErrorGettingUser)

export const createForm = ({ userId, stepId, data } : CreateFormArgs): any =>
	client
		.mutate({
			mutation: gql`mutation create($userId: ID!, $stepId: Int!, $data: Json! ) {
				createForm(userId: $userId, stepId: $stepId, data: $data), {
						user {
							...SortedForms
						}
					}
				}
				${userSortedFormFragment}
				`,
			variables: {
				userId,
				stepId,
				data
			}
		})
		.then(parse('createForm'))

export const updateForm = ({ userId, id, data } : UpdateormArgs): any =>
	client
		.mutate({
			mutation: gql`
				mutation update($userId:ID!, $id:ID!, $data:Json!) {
					updateForm(userId:$userId, id:$id, data:$data) {
						user {
							...SortedForms
						}
					}
				}
				${userSortedFormFragment}
				`,
			variables: {
				userId,
				id,
				data
			}
		})
		.then(parse('updateForm'))


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
