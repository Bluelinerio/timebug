import React from 'react'
import { View } from 'react-native'
import { FormInput, Text } from 'react-native-elements'
import styles from '../../styles'

const TextInput = ({
  value,
  onChange,
  field: {
    content = {
      text: '',
    },
    options = {
      multiline: false,
      placeHolder: '',
      label: '',
    },
  },
}: {
  value: string,
  onChange: string => any,
  color: string,
  field: {
    content?: {
      text: string,
    },
    options?: {
      multiline: boolean,
      placeHolder: string,
      label: string,
      default?: string,
    },
  },
}) => (
  <React.Fragment>
    <View style={styles.textInputLabelContainer}>
      <Text style={styles.textInputLabelStyle}>{content.text}</Text>
    </View>
    <FormInput
      containerStyle={styles.textInputContainerStyle}
      inputStyle={styles.textInputStyle}
      underlineColorAndroid={'transparent'}
      onChangeText={onChange}
      value={value ? value : options.default}
      multiline={options.multiline}
    />
  </React.Fragment>
)

export default TextInput
