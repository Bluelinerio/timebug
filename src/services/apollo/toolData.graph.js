//@flow
import gql        from 'gql'
import { client } from './client'
import { parse }  from './utils'

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

export const updateToolData = ({
  userId,
  value,
  toolKey,
}: {
  userId: string,
  value: any,
  toolKey: string,
}) => {
  const query = gql`
    mutation update($id: ID!, $userId: ID, $value: Json, $toolKey: String) {
      updateToolData(
        id: $id
        userId: $userId
        value: $value
        toolKey: $toolKey
      ) {
        user {
          ...SortedTools
        }
      }
    }

    ${userSortedToolDataFragment}
  `

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
  const query = gql`
    mutation createToolData($userId: ID!, $value: Json!, $toolKey: String!) {
      createToolData(userId: $userId, value: $value, toolKey: $toolKey) {
        user {
          ...SortedTools
        }
      }
    }

    ${userSortedToolDataFragment}
  `

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
