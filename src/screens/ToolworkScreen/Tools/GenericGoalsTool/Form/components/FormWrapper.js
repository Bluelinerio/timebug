// @flow
import React from 'react'
import Form from 'react-native-forms/components/Form'
import styles from '../../styles'

type Props = {
  value: any,
  onFinish: any => void,
  baseValues: any,
  editionId: number,
  customProps: any,
  model: any,
  formStyles: any,
  color: any,
  textAndButtonColor: any,
}

class FormWrapper extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { onFinish } = this.props
    onFinish(data)
  }

  render() {
    const {
      value,
      editionId = null,
      baseValues,
      customProps,
      model,
      formStyles,
      color,
      textAndButtonColor,
    } = this.props
    return (
      <Form
        model={model}
        value={value}
        onFinish={this._onFinish}
        formContainerStyle={[styles.fullWidth, styles.fullHeight]}
        disableAnswers
        editionId={editionId}
        baseValues={baseValues ? baseValues : undefined}
        color={color}
        textAndButtonColor={textAndButtonColor}
        formStyles={formStyles}
        customProps={customProps}
      />
    )
  }
}

export default FormWrapper
