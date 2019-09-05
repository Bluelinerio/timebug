// @flow
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Form from 'react-native-forms/components/Form'
import { stepEnum } from '2020_services/cms'
import { onChange as step30ChangeHandler } from './formChangeHandlers/step30'
import { onChange as step2ChangeHandler } from './formChangeHandlers/step2'
import styles, { backButtonColor } from '../styles'
import tron from 'reactotron-react-native'
import FormElements from './formExtras'

export type Props = {
  color: string,
  extra: any,
}

const CloseButton = onPress => {
  class FormCloseButton extends React.PureComponent {
    _onPress = () => {
      onPress()
    }

    render() {
      return (
        <TouchableOpacity style={styles.formBackButton} onPress={this._onPress}>
          <Icon
            name={'ios-arrow-round-back'}
            size={24}
            color={backButtonColor}
            style={{ marginTop: 2 }}
          />
        </TouchableOpacity>
      )
    }
  }
  return FormCloseButton
}

class FormWrapper extends React.PureComponent<Props> {
  state = {
    beginForm: false,
  }

  componentDidMount = () => {
    this.step30Change = step30ChangeHandler()
    this.step2Change = step2ChangeHandler()
  }

  _onClosePress = () => {
    this._toggleForm()
  }

  _onPress = () => {
    this._toggleForm()
  }

  _toggleForm = () => {
    const { beginForm } = this.state
    this.setState({ beginForm: !beginForm })
  }

  _mapRequiredPropsToComponent = (requiredProps = []) => {
    return requiredProps.reduce((allProps, prop) => {
      const propValue = this.props[prop]
      return {
        ...allProps,
        [prop]: propValue,
      }
    }, {})
  }

  _getStepComponent = ElementForStep => {
    const { Component, requiredProps } = ElementForStep
    return (
      <Component
        toggleForm={this._toggleForm}
        {...this._mapRequiredPropsToComponent(requiredProps)}
      />
    )
  }

  _onChange = (value: any, key: string) => {
    const { extra: { step, step2Finished, step30Finished } } = this.props
    tron.log(step2Finished)
    tron.log(step30Finished)
    tron.log(key)
    tron.log(step.number)
    switch (`${step.number}`) {
      case stepEnum.STEP_2:
        return step30Finished ? this.step2Change(value, key) : null
      case stepEnum.STEP_30:
        return step2Finished ? this.step30Change(value, key) : null
    }
  }

  render() {
    const { extra: { step } } = this.props
    const { beginForm } = this.state
    const ElementForStep = FormElements[step.number]
    return !ElementForStep || beginForm ? (
      <Form
        {...this.props}
        onChange={this._onChange}
        {...(ElementForStep
          ? { CloseButton: CloseButton(this._onClosePress) }
          : {})}
      />
    ) : (
      this._getStepComponent(ElementForStep)
    )
  }
}

export default FormWrapper
