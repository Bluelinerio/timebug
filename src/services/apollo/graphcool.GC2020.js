// @flow

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link'
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
	Checkin,
	createCheckinArgs,
	updateCheckinArgs,
	filterCheckinsByTemplateArgs
} from './models'


export const endpoints = {
	simple: 'https://api.graph.cool/simple/v1/cjdnw03hv8l6m01133d2ix1pb'
}
export const isClientEndpoint = (endpoint:string) => endpoints.simple === endpoint;

export const client = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple }),
  cache: new InMemoryCache()
});

import { temporaryUserAdditions } from './tmp';

const _parse = <T>(key: string, graphResponse: GraphResponse): T => {
	const { data, error } = graphResponse
	if(error){
		console.log("ERROR IN THENABLE")
		throw error;
	}
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
			query:gql`
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

export const resetUserSteps = (userId) =>
	client
		.mutate({
			mutation:gql`
				mutation resetUser($userId: ID!) {
					reset(userId: $userId) {
						message
					}
				}
			`,
			variables: {
				userId,
			}
		})
		.then(parse('reset'))

const handleErrorGettingUser = (errorResponse: ErrorResponse) => {
	throw errorResponse
}

const userSortedFormFragment =gql`
	fragment SortedForms on User {
		forms(orderBy: stepId_DESC) {
			id
			createdAt
			updatedAt
			stepId
			data
		}
	}
`
const userAchievementsFragment =gql`
	fragment UserAchievements on User {
		achievements {
			tagName
			id
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

const userFragments =gql`
	fragment SortedForms on User {
		forms(orderBy: stepId_DESC) {
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
			id
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

/**
 * New: Fragment to get Checkins on user
 */
const userCheckinFragment = gql`
	fragment UserCheckin on User {
		checkins{
			id
			data
			createdAt
			updatedAt
			version
			name
		}
	}`
	
/**
 *  Edited: gets user checkins as well
 */
export const fetchUserWithId = (id: string): User =>
	client
		.query({
			query:gql`
				query getUser($id: ID!) {
					User(id: $id) {
						id
						facebookId
						name
						email
						...UserAchievements
						...SortedForms
						...UserCheckin
					}
				}
				${userFragments}
				${userCheckinFragment}
			`,
			fetchPolicy: 'network-only',
			variables: { id }
		})
		.then(parse('User'))
		.catch(handleErrorGettingUser)

export const createForm = ({ userId, stepId, data } : CreateFormArgs): any =>
	client
		.mutate({
			mutation:gql`
				mutation create($userId: ID!, $stepId: Int!, $data: Json! ) {
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
		.catch(e => console.log(e))

export const updateForm = ({ userId, id, data } : UpdateormArgs): any =>
	client
		.mutate({
			mutation:gql`
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

export const deleteForm = ({ id }): any =>
	client
		.mutate({
			mutation:gql`
				mutation deleteForm($id:ID!) {
					deleteForm(id:$id) {
						id
					}
				}
				`,
			variables: {
				id
			}
		})
		.then(parse('deleteForm'))
		.catch(e => console.log(e))		

export const createAchievement = ({ userId, tagName }) => 
	client.mutate({
		mutation:gql`
			mutation create($userId:ID!, $tagName:String!) {
				createAchievement(tagName:$tagName, userId:$userId) {
					id 
					createdAt
					tagName
					user {
						...UserAchievements
					}
				}
			}
			${userAchievementsFragment}
		`,
		variables: {
			userId,
			tagName,
		}
	})
	.then(parse('createAchievement'))

export const deleteAchievement = (achievementId) => 
	client.mutate({
		mutation:gql`
			mutation delete($achievementId:ID!) {
				deleteAchievement(id:$achievementId) {
					id
				}
			}
		`,
		variables: {
			achievementId
		}
	})
	.then(parse('deleteAchievement'))

export const fetchUserAchievementsWithUserId = (id: string): User =>
	client
		.query({
			query:gql`
				query getUserAchievements($id: ID!) {
					User(id: $id) {
						id
						...UserAchievements
					}
				}
				${userAchievementsFragment}
			`,
			fetchPolicy: 'network-only',
			variables: { id }
		})
		.then(parse('User'))
		.catch(handleErrorGettingUser)

	
export const testUser = ({ userId }): any =>
	client
		.query({
			query:gql`
				query testUser($id:ID!) {
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

/**
 *  CHECKINS
 */

export const CheckinFragment = gql`fragment CheckinFragment on Checkin {
    id
    createdAt
    updatedAt
    eventDate
    name
    version
    data
}`

export const checkinUserFragment = gql`fragment checkinUserFragment on Checkin {
	user {
		id
		facebookId
		name
	}
}`

export const CheckinFragments = `
	${CheckinFragment}

	${checkinUserFragment}
`

/**
 * Helpers
 */

const handleCheckinError = (e : ErrorResponse) => {
	throw e
}

/**
 * End Helpers
 */

 /**
  * Queries
  */
export const getCheckinsForUserOfTemplate = ({ userId, name, version } : filterCheckinsByTemplateArgs): [Checkin] =>
	client
		.query({
			query: gql`query checkinsByTemplate(
				$name:String!, 
				$version: String
				$userId: ID!
			  ){
				allCheckins(filter:{
				  name: $name
				  version: $version
				  user: {
					id: $userId
				  }
				}){
					...CheckinFragment
					...checkinUserFragment
				}
			  }
			  
			  ${CheckinFragments}
			  `,
			  fetchPolicy: 'network-only',
			  variables: {
				name,
				version,
				userId
			  }
		})
		.then(parse('allCheckins'))
		.catch(handleCheckinError)

export const getCheckinsForUser = (userId: String) : [Checkin] =>
	client
		.query({
			query: gql`query checkinsForUser($userId: ID!){
				allCheckins(filter: {
					  user: {
						id: $userId
					  }
				  }){
					...checkinUserFragment
				  	...CheckinFragment
				}
			  }
			  ${CheckinFragments}
			`,
			fetchPolicy: 'network-only',
			variables: {
				userId
			},
		})
		.then(parse('allCheckins'))
		.catch(handleCheckinError)


export const addCheckinToUser = ({ userId, name, version, data, eventDate }: createCheckinArgs) : Checkin => 
	client
		.mutate({
			mutation: gql`mutation addCheckin(
				$userId: ID!,
				$name: String!,
				$version: String,
				$data: Json,
				$eventDate: DateTime
			){
				createCheckin(
					userId: $userId, 
					name: $name, 
					version: $version, 
					data: $data, 
					eventDate: $eventDate
				){
					...CheckinFragment
					...checkinUserFragment
				}
			}
			
			${CheckinFragments}
			`,
			variables: {
				userId,
				name,
				version,
				data,
				eventDate
			}
		})
		.then(parse('createCheckin'))
		.catch(handleCheckinError)


export const updateCheckin = ({ checkinId, version, data, eventDate } : updateCheckinArgs) : Checkin => 
	client
		.mutate({
			mutation: gql`mutation updateCheckin(
				$checkinId: ID!, 
				$version: String, 
				$data: Json, 
				$eventDate: DateTime
			  ){
				updateCheckin(
				  id: $checkinId, 
				  version: $version, 
				  data: $data, 
				  eventDate: $eventDate
				){
					...CheckinFragment
					...checkinUserFragment
				}
			  }

			  ${CheckinFragments}
			  `,
			  variables: {
				checkinId,
				version,
				data,
				eventDate
			  }
		})
		.then(parse('updateCheckin'))
		.catch(handleCheckinError)

export const deleteCheckin = (checkinId : string) : Checkin =>
	client
	    .mutate({
			mutation: gql`mutation deleteCheckin($checkinId: ID!){
				deleteCheckin(id: $checkinId){
				  id
				}
			  }
			  `,
			  variables: {
				checkinId
			  }
		})
		.then(parse('deleteCheckin'))
		.catch(handleCheckinError)