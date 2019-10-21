// @flow
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// TODO: undo
export const endpoints = {
  // simple: 'https://api.graph.cool/simple/v1/cjdnw03hv8l6m01133d2ix1pb',
  simple: 'https://api.graph.cool/simple/v1/ck144vf5t52gf0138emkdnbcx',
}

export const isClientEndpoint = (endpoint: string) =>
  endpoints.simple === endpoint

export const client = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple }),
  cache: new InMemoryCache(),
})

export const resetStore = client.resetStore
