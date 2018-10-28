// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import rootStyles, { formStyles } from '../styles'
import moment from 'moment'
import tron from 'reactotron-react-native'
import FormPicker from './FormComponents/FormPicker'
import { actionTypes } from '../forms/types'

const FormButton = ({
  onPress,
  text,
  styles
}: {
  onPress: () => any,
  text: string,
  styles: any
}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
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
      currentElementValue: null
    }
  }

  _storeValue = () => {
    const { value, currentElementValue, currentField, fieldIndex } = this.state
    const newValue = {
      ...value,
      [fieldIndex]: {
        ...value[fieldIndex],
        type: currentField.type,
        value: currentElementValue,
        timestamp: moment().format()
      }
    }
    this.setState({ value: newValue })
  }

  _goToNextField = () => {
    const { fieldIndex } = this.state
    this.setState({ fieldIndex: fieldIndex + 1 })
  }

  _goToNextForm = (form: string) => {
    const { fieldIndex } = this.state
    this.setState({ form, fieldIndex: [fieldIndex, 0] })
  }

  _onPressWrapper = () => {
    this._onPress()
  }

  _onPress = () => {
    const { fieldIndex, numberOfFields } = this.state
    if (fieldIndex < numberOfFields) {
      this._goToNextField()
    }
    // const currentFieldElement = currentForm.fields[fieldIndex]
    // if (!passiveTypes.find(el => el === currentFieldElement.type)) {
    //   //   this._storeValue()
    //   tron.log('Should store!')
    // }
  }

  _onChange = value => {
    this.setState({ currentElementValue: value })
    tron.log(this.state)
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

  _getButtonText = () => {
    const { fieldIndex, numberOfFields } = this.state
    if (fieldIndex < numberOfFields) {
      return 'Next'
    }
    return 'End'
  }

  render() {
    const { fieldIndex, currentElementValue } = this.state
    const currentField = this.model.fields[fieldIndex]
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
        <View style={formStyles.formButtonContainer}>
          <FormButton
            onPress={this._onPress}
            styles={{
              button: formStyles.formButton,
              text: formStyles.formButtonText
            }}
            text={this._getButtonText()}
          />
        </View>
      </View>
    )
  }
}

export default Form
