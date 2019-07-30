// @flow
import React                       from 'react'
import { TouchableOpacity }        from 'react-native'
import Icon                        from 'react-native-vector-icons/Ionicons'
import Form                        from 'react-native-forms/components/Form'
import styles, { backButtonColor } from '../styles'
import FormElements                from './formExtras'

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
            style={{marginTop:2}}
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

  render() {
    const { extra: { step } } = this.props
    const { beginForm } = this.state
    const ElementForStep = FormElements[step.number]
    return !ElementForStep || beginForm ? (
      <Form
        {...this.props}
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
