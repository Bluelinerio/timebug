// @flow
import React                                      from 'react'
import { View, TouchableOpacity, Text }           from 'react-native'
import styles, { iconSize, iconColor }            from '../styles'
import moment                                     from 'moment'
import FormPicker                                 from './FormComponents/FormPicker'
import { actionTypes, passiveTypes, answerTypes } from '../forms/types'
import Icon                                       from 'react-native-vector-icons/Ionicons'
import uuid                                       from 'uuid/v4'
import Answers                                    from './FormAnswers'
import Display                                    from './debug/DisplayComponent'
import types                                      from '../forms/types';

const DEBUG_DISPLAY = false

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
)

const TextFormButton = ({
  onPress,
  text,
  styles,
  disabled,
}: {
  onPress: () => any,
  text: string,
  styles: any,
  disabled: bool,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={ disabled ? styles.formDisabledButton : styles.button }
    disabled={disabled}
  >
    <Text style={[styles.text, styles.bottomButtonText]}>{text}</Text>
  </TouchableOpacity>
)

type Props = {
  model: any,
  value: any,
  onFinish: any => any,
  disableAnswers?: boolean,
  CloseButton: () => React.node,
  formStyles: {
    headerTextStyle: any,
    textStyle: any,
    elementContainerStyle: any,
    buttonContainerStyle: any,
    buttonTextStyle: any,
    accentColor: string,
  },
}

class Form extends React.PureComponent<Props, any> {
  constructor(props) {
    super(props)
    this.model = props.model
    const indexesMap = this._mapIndexesToKeys(this.model)
    const storableValue = props.value || []
    const formIteration = storableValue.length
    const fieldIndex = 0 //start from the beginning of the model
    const value = this._getValueFromAnswerType(
      props,
      props.model,
      formIteration
    )
    const currentElementValue = value[indexesMap[fieldIndex]] || null
    this.state = {
      value,
      fieldIndex,
      formIteration,
      storableValue,
      currentElementValue,
      isFormFinished: false,
      disableAnswers: props.disableAnswers || false,
      numberOfFields: Object.keys(this.model.fields).length,
      indexesMap,
    }
  }

  _getValueFromAnswerType = (props: any, model: any, formIteration: number) => {
    if (model.answer === answerTypes.single)
      return props.value && props.value[0] ? props.value[0] : {}
    return props.value && props.value[formIteration]
      ? props.value[formIteration]
      : {}
  }

  _mapIndexesToKeys = (model: any) => {
    const { fields } = model
    const map = Object.keys(fields).reduce((m, k) => {
      const field = fields[k]
      if (passiveTypes.find(el => el === field.type)) return m
      const { key } = field
      return {
        ...m,
        [k]: key,
      }
    }, {})
    return map
  }

  _getNewValue = () => {
    const { value, indexesMap, currentElementValue, fieldIndex } = this.state
    const currentField = this.model.fields[fieldIndex]
    const defaultValue = currentField.options.default
    const newField = value[indexesMap[fieldIndex]]
      ? {
        ...value[indexesMap[fieldIndex]],
        value: currentElementValue || defaultValue,
        key: currentField.key,
        index: fieldIndex,
        timestamp: moment().format(),
        model: currentField,
      }
      : {
        ...value[indexesMap[fieldIndex]],
        type: currentField.type,
        value: currentElementValue || defaultValue,
        key: currentField.key,
        index: fieldIndex,
        timestamp: moment().format(),
        model: currentField,
        _id: uuid(),
      }
    const newValue = {
      ...value,
      [currentField.key]: newField,
    }
    return newValue
  }

  _goToNextForm = (form: string) => {
    const { fieldIndex } = this.state
    this.setState({ form, fieldIndex: [fieldIndex, 0] })
  }

  _onPressWrapper = () => {
    this._onPress()
  }

  _onFinishedForm = () => {
    const { storableValue, value, fieldIndex } = this.state
    const { onFinish } = this.props

    const currentField = this.model.fields[fieldIndex]

    const newValue = !passiveTypes.find(el => el === currentField.type)
      ? this._getNewValue()
      : value

    const newStorableValue =
      this.model.answer === answerTypes.single
        ? this._handleSingleAnswerStorage(newValue)
        : [...storableValue, { ...newValue, _id: uuid() }]

    this.setState(
      {
        value: newValue,
        isFormFinished: true,
        storableValue: newStorableValue,
      },
      () => {
        onFinish(this.state.storableValue)
      }
    )
  }

  _handleSingleAnswerStorage = value => {
    const { storableValue } = this.state

    return !storableValue || storableValue.length === 0
      ? [
        {
          ...value,
          _id: uuid(),
        },
      ]
      : [
        {
          ...(storableValue[0] || {}),
          ...value,
        },
      ]
  }

  _onPress = () => {
    const { fieldIndex, indexesMap, value } = this.state
    const currentField = this.model.fields[fieldIndex]
    let newState = {
      fieldIndex: fieldIndex + 1,
      currentElementValue: value[indexesMap[fieldIndex + 1]]
        ? value[indexesMap[fieldIndex + 1]].value
        : null,
    }
    if (!passiveTypes.find(el => el === currentField.type)) {
      const newValue = this._getNewValue()
      newState = {
        ...newState,
        value: newValue,
      }
    }
    this.setState(newState)
  }

  _onFinish = () => {
    this._onFinishedForm()
  }

  _onChange = value => {
    this.setState({ currentElementValue: value })
  }

  _handleGoTo = payload => {
    const { value, storableValue, formIteration } = this.state
    this.setState({
      fieldIndex: payload,
      storableValue: [...storableValue, { ...value, _id: uuid() }],
      value:
        this.props.value && this.props.value[formIteration + 1]
          ? this.props.value[formIteration + 1]
          : {},
      formIteration: formIteration + 1,
    })
  }

  _buttonHandler = ({ action }: { action: { type: string, payload: any } }) => {
    switch (action.type) {
    case actionTypes.GO_TO:
      this._handleGoTo(action.payload)
    }
  }

  _checkValidation = (field, value) => {
    switch(field.type) {
    case types.list:
      return !(value && value.length > 0)
    case types.connected:
      return !(value && value.length > 0)
    default:
      return false;
    }
  }

  _getButtonIcon = () => {
    const { fieldIndex, numberOfFields } = this.state
    if (fieldIndex < numberOfFields - 1) {
      return 'ios-arrow-round-forward'
    }
    return 'ios-checkmark'
  }

  _getButtonText = () => {
    const { fieldIndex, numberOfFields } = this.state
    if (fieldIndex < numberOfFields - 1) {
      return 'Next'
    }
    return 'Done'
  }

  _onBackPress = () => {
    const { fieldIndex, indexesMap, value } = this.state
    const currentField = this.model.fields[fieldIndex]
    let newState = {
      fieldIndex: fieldIndex - 1,
      currentElementValue: value[indexesMap[fieldIndex - 1]]
        ? value[indexesMap[fieldIndex - 1]].value
        : null,
    }
    if (!passiveTypes.find(el => el === currentField.type)) {
      const newValue = this._getNewValue()
      newState = {
        ...newState,
        value: newValue,
      }
    }
    this.setState(newState)
  }

  render() {
    const {
      fieldIndex,
      currentElementValue,
      numberOfFields,
      value,
      disableAnswers,
    } = this.state
    const { CloseButton = null, formStyles = {} } = this.props
    const currentField = this.model.fields[fieldIndex] || []
    const isFieldRequired = currentField && currentField.options.required;

    return (
      <View style={styles.container}>
        {CloseButton ? <CloseButton /> : null}
        <View style={styles.formContainer}>
          <FormPicker
            field={currentField}
            onChange={this._onChange}
            value={currentElementValue}
            buttonHandler={this._buttonHandler}
            currentFormValue={value}
            allFields={this.model.fields}
            formStyles={formStyles}
          />
        </View>
        {(!disableAnswers || DEBUG_DISPLAY) && (
          <Answers value={value} model={this.model} />
        )}
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
                button: [styles.formButton, formStyles.buttonContainerStyle],
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
              button: [styles.formButton, formStyles.buttonContainerStyle],
              text: styles.formButtonText,
            }}
            formStyles={formStyles}
            disabled={ isFieldRequired && this._checkValidation(currentField, currentElementValue) }
            text={this._getButtonText()}
          />
        </View>
        {DEBUG_DISPLAY && (
          <Display storable={this.state.storableValue} model={this.model} />
        )}
      </View>
    )
  }
}

export default Form
