// @flow
import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PickerKeyboard from './PickerKeyboard';

type Props = {
  value: string,
  children: React.Node,
  text: string,
  styles: {
    container: any,
    touchable: any,
    text: any
  },
  accessibilityLabel: string,
  onBeginEditing: () => void,
  onCancel: () => void,
  onChange: any => void
};

export default class PickerIOS extends React.Component<Props> {
  input: ?PickerKeyboard = null;
  render() {
    const {
      onBeginEditing,
      value,
      children,
      text,
      styles,
      accessibilityLabel,
      onCancel,
      onChange
    } = this.props;

    const focus = () => {
      const input = this.input;
      input && input.focus();
      onBeginEditing && onBeginEditing();
    };
    return (
      <TouchableOpacity style={styles.container} onPress={focus}>
        <Text style={styles.text}>{text}</Text>
        <PickerKeyboard
          accessibilityLabel={accessibilityLabel}
          ref={c => (this.input = c)}
          value={value}
          onCancel={onCancel}
          onChange={onChange}
        >
          {children}
        </PickerKeyboard>
      </TouchableOpacity>
    );
  }
}
