// @flow
import React from 'react'
import { View, Text, ScrollView, Linking, Image } from 'react-native'
import Form from '../containers/FormWrapperContainer'
import styles from '../styles'
import type { Step } from '../../../../services/cms'
import FormFinishedComponent from '../containers/FormFinishedContainer'
import type { SubmitAction } from '../../../../redux/actions/formData.actions.js'
import { headerBackgrounds } from '../../../../resources/images'

type Props = {
  stepNumber: string,
  setScreenStatus: any => null,
  model: any,
  data: any,
  submitForm: SubmitAction => null,
  phase: string,
  step: Step,
  onSelectStep: Step => any,
  backgroundColor: any,
  editionId: string,
  navigation: any,
  onFinish: () => any,
  baseValues?: any,
  extra?: any,
}

type State = {
  formFinished: boolean,
}

class WorkbookForm extends React.PureComponent<Props, State> {
  state = {
    formFinished: false,
  }

  componentDidUpdate(prevProps) {
    const isEditing = this.props.editionId
    const baseValues = this.props.navigation.getParam('valuesForForm', null)
    const oldBaseValues = prevProps.navigation.getParam('valuesForForm', null)

    if (baseValues !== oldBaseValues) {
      this.setState({
        formFinished: false,
      })
      return
    }

    if (
      this.props.stepNumber !== prevProps.stepNumber ||
      (isEditing &&
        this.props.editionId !== prevProps.editionId &&
        this.state.formFinished === true)
    )
      this.setState({
        formFinished: false,
      })
  }

  _onFinish = (data: any) => {
    const { submitForm, stepNumber, onFinish } = this.props
    this.setState({ formFinished: true }, () => {
      submitForm({ stepId: stepNumber, value: data })
    })
    onFinish()
  }

  _goToUrl = () => {
    Linking.openURL('https://2020lifevision.com/').catch(() => {})
  }

  render() {
    const {
      model,
      step,
      stepNumber,
      data,
      phase,
      onSelectStep,
      backgroundColor,
      editionId,
      baseValues,
      extra,
    } = this.props
    const { formFinished } = this.state
    return model ? (
      <ScrollView
        style={[styles.scrollView, styles.fullWidth, styles.fullHeight]}
        contentContainerStyle={styles.scrollView}
      >
        {!formFinished ? (
          <Form
            model={model}
            value={data}
            onFinish={this._onFinish}
            stepNumber={stepNumber}
            formContainerStyle={styles.prototypeBackground}
            key={stepNumber}
            phase={phase}
            disableAnswers
            editionId={editionId}
            baseValues={baseValues ? baseValues : undefined}
            extra={{
              ...extra,
              step,
            }}
          />
        ) : (
          <FormFinishedComponent
            step={step}
            stepNumber={stepNumber}
            phase={phase}
            onSelectStep={onSelectStep}
          />
        )}
        <View style={[styles.backgroundImageContainer]}>
          <Image
            source={headerBackgrounds[step.number]}
            style={[styles.backgroundImage, { tintColor: backgroundColor }]}
          />
        </View>
      </ScrollView>
    ) : (
      <View style={[styles.scrollView, styles.snippetParagraph]}>
        <Text style={[styles.formPlaceholderStyle]}>
          The 20/20 Life Vision Workbook is on the way! {'\n\n'}
          In the meantime, enjoy the guidebook and audio book content and keep
          checking back for updates.{'\n'}
          {'\n'}
          You can also find the PDF version of the workbook available at{' '}
          {'\n\n'}
          <Text style={styles.link} onPress={this._goToUrl}>
            2020lifevision.com
          </Text>
        </Text>
      </View>
    )
  }
}

export default WorkbookForm
