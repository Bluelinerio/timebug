import React from 'react'
import { Text } from 'react-native-elements'
import { formTextColor, formStyles } from '../../styles'

const Label = ({
  color = formTextColor,
  field: {
    content = {
      text: ''
    }
  }
}: {
  color?: string,
  field: {
    content: {
      text: string
    }
  }
}) => (
  <Text h4 style={[formStyles.labelComponent, { color }]}>
    {content.text}
  </Text>
)

export default Label
