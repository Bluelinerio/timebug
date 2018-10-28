import React from 'react'
import { FormInput, Text } from 'react-native-elements'
import { formStyles } from '../../styles'

const TextInput = ({
  value,
  onChange,
  field: {
    content = {
      text: ''
    },
    options = {
      multiline: false,
      placeHolder: '',
      label: 'placeholderLabel'
    }
  }
}: {
  value: string,
  onChange: string => any,
  color: string,
  field: {
    content?: any,
    options?: any
  }
}) => (
  <React.Fragment>
    <Text style={formStyles.textInputLabelStyle}>{content.text}</Text>
    <FormInput
      containerStyle={formStyles.textInputContainerStyle}
      inputStyle={formStyles.textInputStyle}
      underlineColorAndroid={'transparent'}
      onChangeText={onChange}
      value={value}
      multiline={options.multiline}
    />
  </React.Fragment>
)

export default TextInput
