// @flow
import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, View, Picker } from 'react-native';
import styles from './styles/PickerKeyboard.styles';

type Props<T> = {
  onCancel: () => void,
  onChange: T => void,
  value: T,
  keyboardBackgroundColor: string,
  children: any,
};

type State<T> = {
  selectedValue: T,
  visible: boolean,
};

class PickerKeyboard<T> extends Component<Props<T>, State<T>> {
  picker: ?Picker = null;

  constructor(props: Props<T>) {
    super(props);
    // initial state
    this.state = {
      selectedValue: props.value,
      visible: false,
    };
  }

  componentWillReceiveProps(nextProps: Props<T>) {
    if (nextProps.value !== this.state.selectedValue) {
      this.setState({ selectedValue: nextProps.value });
    }
  }

  focus = () => {
    this.setVisible(true);
  };

  onCancelPress = () => {
    this.setVisible(false, this.props.onCancel);
  };

  onSubmitPress = () => {
    this.setVisible(false, this.props.onChange(this.state.selectedValue));
  };

  onValueChange = (value: T) => {
    if (this.state.selectedValue !== value) {
      const selectedValue = value;
      const then = this.onSubmitPress;
      this.setState({ selectedValue }, then);
    }
  };

  setVisible = (visible: boolean, then: () => void) => {
    if (this.state.visible !== visible) {
      this.setState({ visible }, () => then && then());
    }
  };

  render() {
    const { visible, selectedValue } = this.state;
    const { keyboardBackgroundColor, children } = this.props;

    return (
      <Modal animationType={'slide'} transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={this.onCancelPress}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <Picker
                ref={c => (this.picker = c)}
                selectedValue={selectedValue}
                onValueChange={this.onValueChange}
                style={[
                  styles.pickerview,
                  { backgroundColor: keyboardBackgroundColor },
                ]}
              >
                {children || null}
              </Picker>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default PickerKeyboard;
