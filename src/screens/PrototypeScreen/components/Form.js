// @flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import rootStyles, { formStyles, iconSize, iconColor } from '../styles'
import moment from 'moment'
import tron from 'reactotron-react-native'
import FormPicker from './FormComponents/FormPicker'
import { actionTypes, passiveTypes } from '../forms/types'
import Icon from 'react-native-vector-icons/Ionicons'
import uuid from 'uuid/v4'

const FormButton = ({
  onPress,
  icon,
  styles
}: {
  onPress: () => any,
  icon: string,
  styles: any
}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Icon
      style={[styles.text, formStyles.icon]}
      name={icon}
      size={iconSize}
      color={iconColor}
    />
    {/* <Text style={styles.text}>{text}</Text> */}
  </TouchableOpacity>
)

type Props = {
  model: any,
  value: any
}

class Form extends React.PureComponent<Props, any> {
  constructor(props) {
    super(props)
    this.model = props.model
    this.state = {
      // The value of the currentForm stored, not what's sent outside
      value: props.value || {},
      fieldIndex: 0,
      // Iteration of repeatable forms, will be 0 for other types
      formIteration: 0,
      numberOfFields: Object.keys(this.model.fields).length,
      isFormFinished: false,
      storableValue: [],
      currentElementValue:
        props.value && props.value[0] ? props.value[0].value : null
    }
  }

  _storeValue = () => {
    const { value, currentElementValue, fieldIndex } = this.state
    const currentField = this.model.fields[fieldIndex]
    const newValue = {
      ...value,
      [fieldIndex]: {
        ...value[fieldIndex],
        type: currentField.type,
        value: currentElementValue,
        timestamp: moment().format(),
        _id: uuid()
      }
    }
    this.setState({ value: newValue })
  }

  _goToNextField = () => {
    const { fieldIndex, value } = this.state
    this.setState({
      fieldIndex: fieldIndex + 1,
      currentElementValue: value[fieldIndex + 1]
        ? value[fieldIndex + 1].value
        : null
    })
  }

  _goToPreviousField = () => {
    const { fieldIndex, value } = this.state
    tron.log(this.state)
    this.setState({
      fieldIndex: fieldIndex - 1,
      currentElementValue: value[fieldIndex - 1]
        ? value[fieldIndex - 1].value
        : null
    })
  }

  _goToNextForm = (form: string) => {
    const { fieldIndex } = this.state
    this.setState({ form, fieldIndex: [fieldIndex, 0] })
  }

  _onPressWrapper = () => {
    this._onPress()
  }

  _onFinishedForm = () => {
    tron.log('hey you done')
  }

  _onPress = () => {
    const { fieldIndex, numberOfFields } = this.state
    const currentField = this.model.fields[fieldIndex]
    if (!passiveTypes.find(el => el === currentField.type)) {
      this._storeValue()
    }
    if (fieldIndex < numberOfFields - 1) {
      this._goToNextField()
    } else {
      this._onFinishedForm()
    }
  }

  _onChange = value => {
    this.setState({ currentElementValue: value })
  }

  _handleGoTo = payload => {
    this.setState({ fieldIndex: payload })
  }

  _buttonHandler = ({ action }: { action: { type: string, payload: any } }) => {
    switch (action.type) {
    case actionTypes.GO_TO:
      this._handleGoTo(action.payload)
    }
  }

  _getButtonIcon = () => {
    const { fieldIndex, numberOfFields } = this.state
    if (fieldIndex < numberOfFields - 1) {
      return 'ios-arrow-round-forward'
    }
    return 'ios-checkmark'
  }

  _onBackPress = () => {
    // const { fieldIndex } = this.state
    // const currentField = this.model.fields[fieldIndex]
    // if (!passiveTypes.find(el => el === currentField.type)) {
    //   this._storeValue()
    // }
    this._goToPreviousField()
  }

  render() {
    tron.display({
      value: this.state,
      name: 'State of Form',
      preview: 'State of Form'
    })
    tron.display({
      value: this.props,
      name: 'Props of Form',
      preview: 'Props of Form'
    })
    const { fieldIndex, currentElementValue } = this.state
    const currentField = this.model.fields[fieldIndex] || []
    return (
      <View style={rootStyles.container}>
        <View style={formStyles.formContainer}>
          <FormPicker
            field={currentField}
            onChange={this._onChange}
            value={currentElementValue}
            buttonHandler={this._buttonHandler}
          />
        </View>
        <View
          style={
            fieldIndex > 0
              ? formStyles.formButtonContainerDual
              : formStyles.formButtonContainer
          }
        >
          {fieldIndex > 0 && (
            <FormButton
              onPress={this._onBackPress}
              styles={{
                button: formStyles.formButton,
                text: formStyles.formButtonText
              }}
              icon={'ios-arrow-round-back'}
            />
          )}
          <FormButton
            onPress={this._onPress}
            styles={{
              button: formStyles.formButton,
              text: formStyles.formButtonText
            }}
            icon={this._getButtonIcon()}
          />
        </View>
      </View>
    )
  }
}

export default Form
