// @flow
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles, { iconSize, iconColor } from '../styles';
import moment from 'moment';
import FormPicker from './FormComponents/FormPicker';
import { actionTypes, passiveTypes } from '../forms/types';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'uuid/v4';
import Answers from './FormAnswers';

/* eslint-disable-next-line */
const FormButton = ({
  onPress,
  icon,
  styles,
}: {
  onPress: () => any,
  icon: string,
  styles: any,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Icon
      style={[styles.text, styles.icon]}
      name={icon}
      size={iconSize}
      color={iconColor}
    />
  </TouchableOpacity>
);

const TextFormButton = ({
  onPress,
  text,
  styles,
}: {
  onPress: () => any,
  text: string,
  styles: any,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={[styles.text, styles.bottomButtonText]}>{text}</Text>
  </TouchableOpacity>
);

type Props = {
  model: any,
  value: any,
  onFinish: any => any,
};

class Form extends React.PureComponent<Props, any> {
  constructor(props) {
    super(props);
    this.model = props.model;
    const storableValue = props.value || [];
    const formIteration = storableValue.length;
    const fieldIndex = 0;
    const value =
      props.value && props.value[formIteration]
        ? props.value[formIteration]
        : {};
    const currentElementValue = value[fieldIndex] || null;
    this.state = {
      value,
      fieldIndex,
      formIteration,
      storableValue,
      currentElementValue,
      isFormFinished: false,
      numberOfFields: Object.keys(this.model.fields).length,
    };
  }

  _getNewValue = () => {
    const { value, currentElementValue, fieldIndex } = this.state;
    const currentField = this.model.fields[fieldIndex];
    const defaultValue = currentField.options.default;
    const newField = value[fieldIndex]
      ? {
        ...value[fieldIndex],
        value: currentElementValue || defaultValue,
        timestamp: moment().format(),
      }
      : {
        ...value[fieldIndex],
        type: currentField.type,
        value: currentElementValue || defaultValue,
        timestamp: moment().format(),
        _id: uuid(),
      };
    const newValue = {
      ...value,
      [fieldIndex]: newField,
    };
    return newValue;
  };

  _goToNextField = () => {
    const { fieldIndex, value } = this.state;
    this.setState({
      fieldIndex: fieldIndex + 1,
      currentElementValue: value[fieldIndex + 1]
        ? value[fieldIndex + 1].value
        : null,
    });
  };

  _goToPreviousField = () => {
    const { fieldIndex, value } = this.state;
    this.setState({
      fieldIndex: fieldIndex - 1,
      currentElementValue: value[fieldIndex - 1]
        ? value[fieldIndex - 1].value
        : null,
    });
  };

  _goToNextForm = (form: string) => {
    const { fieldIndex } = this.state;
    this.setState({ form, fieldIndex: [fieldIndex, 0] });
  };

  _onPressWrapper = () => {
    this._onPress();
  };

  _onFinishedForm = () => {
    const { storableValue, value } = this.state;
    const { onFinish } = this.props;
    this.setState(
      {
        isFormFinished: true,
        storableValue: [...storableValue, { ...value, _id: uuid() }],
      },
      () => {
        onFinish(this.state.storableValue);
      }
    );
  };

  _onPress = () => {
    const { fieldIndex, value } = this.state;
    const currentField = this.model.fields[fieldIndex];
    let newState = {
      fieldIndex: fieldIndex + 1,
      currentElementValue: value[fieldIndex + 1]
        ? value[fieldIndex + 1].value
        : null,
    };
    if (!passiveTypes.find(el => el === currentField.type)) {
      const newValue = this._getNewValue();
      newState = {
        ...newState,
        value: newValue,
      };
    }
    this.setState(newState);
  };

  _onFinish = () => {
    this._onFinishedForm();
  };

  _onChange = value => {
    this.setState({ currentElementValue: value });
  };

  _handleGoTo = payload => {
    const { value, storableValue, formIteration } = this.state;
    this.setState({
      fieldIndex: payload,
      storableValue: [...storableValue, { ...value, _id: uuid() }],
      value:
        this.props.value && this.props.value[formIteration + 1]
          ? this.props.value[formIteration + 1]
          : {},
      formIteration: formIteration + 1,
    });
  };

  _buttonHandler = ({ action }: { action: { type: string, payload: any } }) => {
    switch (action.type) {
    case actionTypes.GO_TO:
      this._handleGoTo(action.payload);
    }
  };

  _getButtonIcon = () => {
    const { fieldIndex, numberOfFields } = this.state;
    if (fieldIndex < numberOfFields - 1) {
      return 'ios-arrow-round-forward';
    }
    return 'ios-checkmark';
  };

  _getButtonText = () => {
    const { fieldIndex, numberOfFields } = this.state;
    if (fieldIndex < numberOfFields - 1) {
      return 'Next';
    }
    return 'Done';
  };

  _onBackPress = () => {
    const { fieldIndex, value } = this.state;
    const currentField = this.model.fields[fieldIndex];
    let newState = {
      fieldIndex: fieldIndex - 1,
      currentElementValue: value[fieldIndex - 1]
        ? value[fieldIndex - 1].value
        : null,
    };
    if (!passiveTypes.find(el => el === currentField.type)) {
      const newValue = this._getNewValue();
      newState = {
        ...newState,
        value: newValue,
      };
    }
    this.setState(newState);
  };

  render() {
    const {
      fieldIndex,
      currentElementValue,
      numberOfFields,
      value,
    } = this.state;
    const currentField = this.model.fields[fieldIndex] || [];
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormPicker
            field={currentField}
            onChange={this._onChange}
            value={currentElementValue}
            buttonHandler={this._buttonHandler}
          />
        </View>
        <Answers value={value} model={this.model} />
        <View
          style={
            fieldIndex > 0
              ? styles.formButtonContainerDual
              : styles.formButtonContainer
          }
        >
          {fieldIndex > 0 && (
            <TextFormButton
              onPress={this._onBackPress}
              styles={{
                button: styles.formButton,
                text: styles.formButtonText,
              }}
              text={'Prev'}
            />
          )}
          <TextFormButton
            onPress={
              fieldIndex < numberOfFields - 1 ? this._onPress : this._onFinish
            }
            styles={{
              button: styles.formButton,
              text: styles.formButtonText,
            }}
            text={this._getButtonText()}
          />
        </View>
      </View>
    );
  }
}

export default Form;
