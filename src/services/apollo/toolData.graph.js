//@flow
import gql from 'graphql-tag'
import { client } from './client'
import { parse } from './utils'
import tron from 'reactotron-react-native'

type ApolloQuery = {
  query: string,
  variables: any,
}

type ApolloMutation = {
  mutation: string,
  variables: any,
}

type ApolloOperation = ApolloQuery | ApolloMutation

export const userSortedToolDataFragment = gql`
  fragment SortedTools on User {
    toolData(orderBy: createdAt_ASC) {
      id
      value
      toolKey
      createdAt
      updatedAt
    }
  }
`

export const deleteToolDataQuery = gql`
  mutation deleteToolData($id: ID!) {
    deleteToolData(id: $id) {
      id
    }
  }
`

export const createToolDataQuery = gql`
  mutation createToolData($userId: ID!, $value: Json!, $toolKey: String!) {
    createToolData(userId: $userId, value: $value, toolKey: $toolKey) {
      user {
        ...SortedTools
      }
    }
  }

  ${userSortedToolDataFragment}
`

export const updateToolDataQuery = gql`
  mutation update($id: ID!, $userId: ID, $value: Json, $toolKey: String) {
    updateToolData(id: $id, userId: $userId, value: $value, toolKey: $toolKey) {
      user {
        ...SortedTools
      }
    }
  }

  ${userSortedToolDataFragment}
`

export const updateToolData = ({
  userId,
  value,
  toolKey,
}: {
  userId: string,
  value: any,
  toolKey: string,
}) => {
  const query = updateToolDataQuery

  return client
    .mutate({
      mutation: query,
      variables: {
        userId,
        value,
        toolKey,
      },
    })
    .then(parse('updateToolData'))
    .catch(e => console.log(e))
}

export const createToolData = ({
  userId,
  value,
  toolKey,
}: {
  userId: string,
  value: any,
  toolKey: string,
}) => {
  const query = createToolDataQuery

  return client
    .mutate({
      mutation: query,
      variables: {
        userId,
        value,
        toolKey,
      },
    })
    .then(parse('createToolData'))
    .catch(e => console.log(e))
}

export const deleteToolData = ({ id }): any =>
  client
    .mutate({
      mutation: deleteToolDataQuery,
      variables: {
        id,
      },
    })
    .then(parse('deleteToolData'))
    .catch(e => console.log(e))

// Invalid until batch testing is fixed
export const batchToolDataOperation = (
  queries: Array<ApolloOperation>
): any => {
  tron.log(queries)
  tron.log('Inside batch')
  client
    .mutate(queries)
    .then(({ data, error }) => {
      tron.log('Hi, inside then in batch')
      tron.log({ data, error })
      if (error) throw error
      return data
    })
    .catch(err => {
      tron.log('Inside catch in batch')
      tron.log(err)
      throw err
    })
}