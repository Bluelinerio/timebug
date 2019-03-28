// @flow
// TODO: Restore generic types
import { GraphResponse }          from './models'
import { endpoints }              from './client'
import { temporaryUserAdditions } from './tmp'

const _parse = (key: string, graphResponse: GraphResponse) => {
  const { data, error } = graphResponse
  if (error) {
    console.log('ERROR IN THENABLE')
    throw error
  }
  const value = {
    ...data[key],
    endpoint: endpoints.simple,
  }
  if (value) {
    return temporaryUserAdditions(value)
  }
  throw { error: error || 'User not found' }
}

export const parse = (key: string) => (graphResponse: GraphResponse) =>
  _parse(key, graphResponse)
