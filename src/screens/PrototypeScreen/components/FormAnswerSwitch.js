// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import types          from '../forms/types'
import { formStyles } from '../styles'

const TextComponent = ({
  hint,
  value,
  translation
}: {
  hint: string,
  value: string,
  translation?: string => string
}) => {
  return (
    <View>
      <Text style={formStyles.answerText}>{`${hint}: ${
        translation ? translation(value) : value
      }`}</Text>
    </View>
  )
}

const ListComponent = ({ hint, value }: { hint: string, value: string }) => {
  const formElements = value.reduce((allElements, val) => {
    return [
      ...allElements,
      ...Object.keys(val).reduce((array, key) => {
        if (key === '_id') return array
        return [...array, val[key]]
      }, [])
    ]
  }, [])
  return (
    <View>
      <Text style={formStyles.answerText}>{hint}:</Text>
      {formElements.map((element, index) => {
        const { value, _id } = element
        return (
          <View style={formStyles.indented} key={_id}>
            <Text style={formStyles.answerText}>{`${index +
              1}) ${value}`}</Text>
          </View>
        )
      })}
    </View>
  )
}

const switchComponents = (model: { type: string }) => {
  const { type } = model
  switch (type) {
  case types.string:
    return TextComponent
  case types.select:
    return TextComponent
  case types.list:
    return ListComponent
  default:
    return null
  }
}

const FormAnswerSwitch = (props: { model: string, value: any }) => {
  const Component = switchComponents(props.model)
  return Component ? (
    <Component
      value={props.value.value}
      hint={props.model.content.smallKey}
      primary={props.model.content.primary}
      translation={props.model.content.translation}
    />
  ) : null
}

export default FormAnswerSwitch
