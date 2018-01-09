// @flow
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj9w55w851t2l015262zjbauu' }),
  cache: new InMemoryCache()
});
export const resetStore = client.resetStore;

export const authenticateWithFBToken = (fbToken: string) =>
	client
		.query({
			query: gql`
				query authenticateUser($token: String!) {
					authenticateUser(facebookToken: $token) {
						token
						user
					}
				}
			`,
			fetchPolicy: 'network-only',
			variables: { token: fbToken }
		})

export const fetchUserWithId = (id: string) =>
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