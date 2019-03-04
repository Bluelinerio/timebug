import React                                  from 'react'
import { View, TextInput as TextInputNative } from 'react-native'
import R                                      from 'ramda'
import { FormInput }                          from 'react-native-elements'
import FormElementHeader                      from './FormElementHeader'
import type { TextStyle }                     from '../../types/formTypes'
import styles                                 from '../../styles'

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
      numberOfLines: null,
      fullWidth: false,
      style: {},
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
      style?: TextStyle,
    },
    style?: Object,
  },
}) => (
  <React.Fragment>
    <View style={styles.textInputLabelContainer}>
      <FormElementHeader text={content.text} textStyle={formStyles.textStyle} />
    </View>
    {options.multiline ? (
      <View
        style={[
          styles.textInputContainerStyle,
          formStyles.elementContainerStyle,
          options.style ? options.style.textInputContainerStyle : {},
          options.fullWidth ? { width: '100%' } : {},
        ]}
      >
        <TextInputNative
          style={[
            R.isEmpty(style) ? styles.textInputStyle : style,
            options.style ? options.style.textInputStyle : {},
          ]}
          underlineColorAndroid={'transparent'}
          onChangeText={onChange}
          value={value ? value : options.default}
          multiline
          placeholder={options.placeHolder}
          numberOfLines={options.numberOfLines}
          allowFontScaling
        />
      </View>
    ) : (
      <FormInput
        containerStyle={[
          styles.textInputContainerStyle,
          formStyles.elementContainerStyle,
          options.style ? options.style.textInputContainerStyle : {},
          options.fullWidth ? { width: '100%' } : {},
        ]}
        inputStyle={[
          R.isEmpty(style) ? styles.textInputStyle : style,
          options.style ? options.style.textInputStyle : {},
        ]}
        underlineColorAndroid={'transparent'}
        onChangeText={onChange}
        value={value ? value : options.default}
        placeholder={options.placeHolder}
      />
    )}
  </React.Fragment>
)

export default TextInput
