// @flow
import React      from 'react'
import { View }   from 'react-native'
import styles     from '../styles'
import Form       from './Form'
import HelpButton from '../containers/HelpButtonContainer'

type Props = {
  formContainerStyle?: any,
  helpButtonContainerStyle?: any,
  helpButtonLabelStyle?: any,
  step: string,
  model: any,
  value: any,
  onFinish: any => any
}

class FormContainer extends React.PureComponent<Props> {
  render() {
    const {
      model,
      value,
      onFinish,
      step,
      formContainerStyle = {},
      helpButtonContainerStyle = {},
      helpButtonLabelStyle = {}
    } = this.props
    return (
      <React.Fragment>
        <View style={[styles.container, formContainerStyle]}>
          <HelpButton
            step={step}
            helpButtonContainerStyle={helpButtonContainerStyle}
            helpButtonLabelStyle={helpButtonLabelStyle}
          />
          <Form model={model} value={value} onFinish={onFinish} />
        </View>
      </React.Fragment>
    )
  }
}

export default FormContainer
