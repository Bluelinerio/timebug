import R from 'ramda'
import t from '../screens/WorkbookScreen/components/templates'

const tcombPropLens = R.lensPath(['type', 'meta', 'props'])
const getTCombProps = model => {
  const props = R.view(tcombPropLens, model)
  if (!props) {
    throw new Error(`could not get props of model ${model}`)
  }
  return props
}

if (__DEV__) {
  const test = {
    type: {
      meta: {
        props: {
          first: 1,
          id: 2
        }
      }
    }
  }

  if (
    !R.equals(getTCombProps(test), {
      first: 1,
      id: 2
    })
  ) {
    throw new Error('getTCombProps does not work properly')
  }
}

export const validKeysForModel = R.compose(
  R.filter(key => key !== 'id'),
  R.keys,
  getTCombProps
)

if (__DEV__) {
  const test = {
    type: {
      meta: {
        props: {
          first: 1,
          id: 2
        }
      }
    }
  }
  if (!R.equals(validKeysForModel(test), ['first'])) {
    throw new Error('validKeysForModel does not work properly')
  }
}

const isValueAValidTCombType = (value, key, type) => {
  const res = type[key].is(value[key])
  if (!res) {
    console.warn(`expected value of ${key} to be of type ${type.displayName} got ${JSON.sringify(value[key])}`)
  }
  return res
}

export const isTCombValueValid = (value: any, model: any) => (key: string) => {
  const props = getTCombProps(model)

  return props[key] && value[key] && isValueAValidTCombType(value, key, props)
}

export const removeIvalidValuesInsteadOfDoingAnyMigrationForNow = (
  model,
  value = {}
) => {
  const validKeys = validKeysForModel(model)
  const mapKeysWithValidTCombValues = isTCombValueValid(value, model)
  const keysWithValidValues = validKeys.map(mapKeysWithValidTCombValues)

  return keysWithValidValues.reduce((sum, key) => {
    return {
      ...sum,
      [key]: value[key]
    }
  }, {})
}
