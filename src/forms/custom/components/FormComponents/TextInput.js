import React from 'react';
import { FormInput, Text } from 'react-native-elements';
import styles from '../../styles';

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
    <Text style={styles.textInputLabelStyle}>{content.text}</Text>
    <FormInput
      containerStyle={styles.textInputContainerStyle}
      inputStyle={styles.textInputStyle}
      underlineColorAndroid={'transparent'}
      onChangeText={onChange}
      value={value ? value : options.default}
      multiline={options.multiline}
    />
  </React.Fragment>
);

export default TextInput;
