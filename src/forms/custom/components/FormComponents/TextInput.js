import React             from 'react'
import {
  View,
  TextInput as TextInputNative,
}                        from 'react-native'
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
      numberOfLines: null,
      fullWidth: false,
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
    {
      options.multiline ? (
        <View style={[
          styles.textInputContainerStyle,
          formStyles.elementContainerStyle,
          options.fullWidth ? { width: '100%' } : {},
        ]}>
          <TextInputNative
            style={style || styles.textInputStyle}
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
            options.fullWidth ? { width: '100%' } : {},
          ]}
          inputStyle={style || styles.textInputStyle}
          underlineColorAndroid={'transparent'}
          onChangeText={onChange}
          value={value ? value : options.default}
          placeholder={options.placeHolder}
        />
      )
    }
  </React.Fragment>
)

export default TextInput
