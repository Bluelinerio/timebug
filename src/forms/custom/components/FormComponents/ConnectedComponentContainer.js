/**
 * TODO: replace with a context
 */
// @flow
import React from 'react'
import types, { passiveTypes } from '../../forms/types'
import { mapProps } from 'recompose'
import ConnectedComponent from './ConnectedComponent'

type Props = {
  onChange: () => any,
  value: any,
  field: any,
  buttonHandler: () => any,
  currentFormValue: any,
  allFields: any,
}

// const _extractListData = (
//   value: Array<any>,
//   { childrenKeys }: { childrenKeys: any },
//   listField: { options: { childTypes: any } }
// ) => {
//   const { options: { childTypes } } = listField
//   const indexesMap = _mapKeysToIndexes(childTypes)
//   const newVal = value.map(val => {
//     const result = childrenKeys.reduce((object, childKey) => {
//       const model = childTypes[indexesMap[childKey]]
//       const valueElement = val[childKey] || {}
//       const value = valueElement.value || null

//       return {
//         ...object,
//         [childKey]: {
//           value,
//           model,
//           key: childKey,
//           index: indexesMap[childKey],
//         },
//       }
//     }, {})

//     return result
//   })

//   return newVal
// }

const _extractListDataArray = (
  value: Array<any>,
  { childrenKeys }: { childrenKeys: any },
) => {

  const newVal = value.map(val => {
    const { _id } = val
    const values = childrenKeys.reduce((allValues, childKey) => {
      const valueElement = val[childKey] || {}
      const value = valueElement.value || null

      return [
        ...allValues,
        value,
      ]
    }, [])

    return {
      listElementId: _id,
      values,
    }
  })

  return newVal
}

// const _buildElements = ({
//   elements,
//   currentFormValue,
//   indexesMap,
//   fields,
// }: {
//   elements: Array<any>,
//   currentFormValue: any,
//   indexesMap: any,
//   fields: any,
// }) => {
//   const { text, childrenKeys, key } = elements
//   const separateElements = siblings.reduce((dataElements, sibling) => {
//     const { key } = sibling
//     const index = indexesMap[key]
//     const fieldElement = fields[index]
//     const valueElement = currentFormValue[key]
//     const value =
//       valueElement && valueElement.value
//         ? fieldElement.type === types.list
//           ? _extractListData(valueElement.value, sibling, fieldElement)
//           : valueElement.value
//         : {}

//     const data = {
//       type: fieldElement.type,
//       value,
//     }

//     return [...dataElements, data]
//   }, [])
//   return {
//     text,
//     values: separateElements,
//   }
// }

const _buildSingleElement = ({
  element,
  currentFormValue,
  indexesMap,
  fields,
}: {
  element: Array<any>,
  currentFormValue: any,
  indexesMap: any,
  fields: any,
}) => {
  const { text, childrenKeys, key } = element
  const index = indexesMap[key]
  const fieldElement = fields[index]
  const valueElement = currentFormValue[key]

  const value =
    valueElement && valueElement.value
      ? fieldElement.type === types.list
        ? _extractListDataArray(valueElement.value, { childrenKeys }, fieldElement)
        : valueElement.value
      : {}

  return {
    type: fieldElement.type,
    text,
    value,
  }
}

const _mapKeysToIndexes = (fields: any) => {
  const map = Object.keys(fields).reduce((m, k) => {
    const field = fields[k]
    if (passiveTypes.find(el => el === field.type)) return m
    const { key } = field
    return {
      ...m,
      [key]: k,
    }
  }, {})
  return map
}

const merge = (props: Props) => {
  const { field, currentFormValue, allFields: fields } = props
  const indexesMap = _mapKeysToIndexes(fields)
  const { options, content: { text } } = field
  const { connect } = options
  const { withElements, using } = connect
  const dataElement = _buildSingleElement({
    element: withElements,
    indexesMap,
    currentFormValue,
    fields,
  })
  return {
    ...props,
    component: using,
    dataElement,
    header: text,
  }
}

const ConnectedComponentContainer = mapProps(merge)(ConnectedComponent)

export const connect = (Component: React.node) => {
  class FormConnectContainer extends React.PureComponent<Props> {
    render() {
      /* eslint-disable-next-line */
      const { currentFormValue, allFields, ...regularProps } = this.props
      const { type } = regularProps.field

      return type === types.connected ? (
        <ConnectedComponentContainer {...this.props} />
      ) : (
        <Component {...regularProps} />
      )
    }
  }
  return FormConnectContainer
}
