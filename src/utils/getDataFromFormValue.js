// @flow
import types from '2020_forms/forms/types'
import type { Value, FormValue } from '2020_forms/types/formTypes'

export type ParseDataOptions = {
  meta?: boolean,
  childKeys: Array<string>,
}

export const getDataFromForm = (
  value: any,
  keys: Array<string> = [],
  includeMeta: Boolean = true
) => {
  const extractedData = keys.reduce((data, key) => {
    const dataForKey = value[key] || null
    const storable = {}
    if (dataForKey.value) storable.value = dataForKey.value
    if (includeMeta && dataForKey._id)
      storable.meta = {
        id: dataForKey._id,
        key: dataForKey.key,
        type: dataForKey.type,
        timestamp: dataForKey.timestamp,
      }
    return {
      ...data,
      [key]: storable,
    }
  }, {})
  return extractedData
}

const parseList = (
  value: Array<Value>,
  options: ParseDataOptions
): Array<any> => {
  const { childKeys = [], meta = true } = options
  const resultArray = value.map(val => {
    const result = childKeys.reduce((v, k) => {
      if (!val[k]) return { ...v, [k]: {} }
      return {
        ...v,
        [k]: {
          value: val[k].value,
          meta: meta
            ? {
              id: val[k]._id,
              key: val[k].key,
              index: val[k].index,
            }
            : null,
        },
      }
    }, {})
    return meta ? { ...result, id: val._id } : result
  })
  return resultArray
}

const parseConnected = (value: Array<Value>, options: ParseDataOptions) => {
  const { meta = true } = options
  const result = value.map(val => {
    const r = {
      value: val.value,
      parent: {
        ...val.parentValues,
        id: val.parentId,
      },
      meta: meta ? { id: val._id } : null,
    }
    return r
  })
  return result
}

export const parseDataFromType = (
  value: FormValue,
  options?: ParseDataOptions = {}
) => {
  const type = value.meta ? value.meta.type : value.type
  switch (type) {
  case types.list:
    return parseList(value.value, options)
  case types.connected:
    return parseConnected(value.value, options)
  default:
    return value.value
  }
}
