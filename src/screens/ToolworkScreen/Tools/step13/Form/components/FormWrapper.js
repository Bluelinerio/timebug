// @flow
import React from 'react'
import Form from 'react-native-forms/components/Form'
import model from '../../static/form'
import styles from '../../styles'

import {
  mapPhaseToTextStyles,
  mapPhaseToColor,
  mapPhaseToButtonStyles,
  mapPhaseToElementBackground,
  mapPhaseToTextAndButtonColor,
} from '2020_utils/colorsForStep'
import { SELF_ASSESSMENT } from '2020_services/cms'

const phase = SELF_ASSESSMENT

const textStyle = mapPhaseToTextStyles(phase)
const buttonContainerStyle = mapPhaseToButtonStyles(phase)
const elementContainerStyle = mapPhaseToElementBackground(phase)
const color = mapPhaseToColor(phase)
const textAndButtonColor = mapPhaseToTextAndButtonColor(phase)

const formStyles = {
  textStyle,
  buttonContainerStyle,
  accentColor: color,
  elementContainerStyle,
}

type Props = {
  value: any,
  onFinish: any => void,
  baseValues: any,
  editionId: number,
}

const STEP_NUMBER = 13

class FormWrapper extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { onFinish } = this.props
    onFinish(data)
  }

  render() {
    const { value, editionId = null, baseValues } = this.props
    return (
      <Form
        model={model}
        value={value}
        onFinish={this._onFinish}
        stepNumber={STEP_NUMBER}
        formContainerStyle={[styles.fullWidth, styles.fullHeight]}
        key={STEP_NUMBER}
        disableAnswers
        editionId={editionId}
        baseValues={baseValues ? baseValues : undefined}
        color={color}
        textAndButtonColor={textAndButtonColor}
        formStyles={formStyles}
      />
    )
  }
}

export default FormWrapper
