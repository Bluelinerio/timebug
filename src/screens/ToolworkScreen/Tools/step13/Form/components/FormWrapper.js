// @flow
import React from 'react'
import Form from 'react-native-forms/components/Form'
import { SELF_ASSESSMENT } from '2020_services/cms'
import model from '../../static/form'
import styles from '../../styles'

type Props = {
  value: any,
  onFinish: any => void,
  baseValues: any,
  editionIndex: number,
}

const STEP_NUMBER = 13

class FormWrapper extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { onFinish } = this.props
    onFinish(data)
  }

  render() {
    const { value, editionIndex = null, baseValues } = value
    return (
      <Form
        model={model}
        value={value}
        onFinish={this._onFinish}
        stepNumber={STEP_NUMBER}
        formContainerStyle={[styles.fullWidth, styles.fullHeight]}
        key={STEP_NUMBER}
        phase={SELF_ASSESSMENT}
        disableAnswers
        editionIndex={editionIndex}
        baseValues={baseValues ? baseValues : undefined}
      />
    )
  }
}

export default FormWrapper
