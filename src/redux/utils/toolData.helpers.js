// @flow
import type { Operation } from '../types/toolData.types'
import {
  deleteToolDataQuery,
  createToolDataQuery,
  updateToolDataQuery,
} from '2020_services/apollo/toolData.graph'

export type OperationType = CREATE | UPDATE | DELETE

type ToolDataOperation = Operation & {
  type: OperationType,
}

export const CREATE = 'CREATE'

export const UPDATE = 'UPDATE'

export const DELETE = 'DELETE'

/**
 * DEPRECATED
 * TODO: Replace individual graphql requests with batch requests
 */
export const turnToolDataOperationsIntoQueries = (
  operations: Array<ToolDataOperation>
) =>
  operations.map(operation => {
    const { type, value } = operation
    switch (type) {
    case CREATE:
      return {
        mutation: createToolDataQuery,
        variables: value,
      }
    case UPDATE:
      return {
        mutation: updateToolDataQuery,
        variables: value,
      }
    case DELETE:
      return {
        mutation: deleteToolDataQuery,
        variables: value,
      }
    default:
      return null
    }
  }, [])

export const removeToolDataKeys = (obj: {}): any =>
  Object.keys(obj)
    .filter(k => k === 'value' || k === 'timestamp')
    .reduce(
      (sum, k) => ({
        ...sum,
        [k]: obj[k],
      }),
      {}
    )
