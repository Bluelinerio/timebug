import React             from 'react'
import { View }          from 'react-native'
import { FormInput }     from 'react-native-elements'
import styles            from '../../styles'
import FormElementHeader from './FormElementHeader'

const TextInput = ({
  value,
  onChange,
  formStyles = {},
  field: {
    content = {
      text: '',
    },
    options = {
      multiline: false,
      placeHolder: '',
      label: '',
    },
    style = {},
  },
}: {
  value: string,
  onChange: string => any,
  color: string,
  formStyles: any,
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
    style?: Object
  },
}) => (
  <React.Fragment>
    <View style={styles.textInputLabelContainer}>
      <FormElementHeader text={content.text} textStyle={formStyles.textStyle} />
    </View>
    <FormInput
      containerStyle={[
        styles.textInputContainerStyle,
        formStyles.elementContainerStyle,
      ]}
      inputStyle={style || styles.textInputStyle}
      underlineColorAndroid={'transparent'}
      onChangeText={onChange}
      value={value ? value : options.default}
      multiline={options.multiline}
      placeholder={options.placeHolder}
      numberOfLines={options.multiline && 2}
    />
  </React.Fragment>
)

export default TextInput
