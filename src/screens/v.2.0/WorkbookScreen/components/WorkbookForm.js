import React                      from 'react'
import { View, Text, ScrollView } from 'react-native'
import Form                       from '../containers/FormWrapperContainer'
import styles                     from '../styles'
import type { Step }              from '../../../../services/cms'
import FormFinishedComponent      from '../containers/FormFinishedContainer'

type Props = {
  stepNumber: string,
  setScreenStatus: any => null,
  model: any,
  data: any,
  phase: string,
  step: Step,
  onSelectStep: Step => any,
}

type State = {
  formFinished: boolean,
}

class WorkbookForm extends React.PureComponent<Props, State> {
  state = {
    formFinished: false,
  }

  _onFinish = (data: any) => {
    const { setScreenStatus, stepNumber } = this.props
    this.setState({ formFinished: true }, () => {
      setScreenStatus({ [stepNumber]: data })
    })
  }

  render() {
    const { model, step, stepNumber, data, phase, onSelectStep } = this.props
    const { formFinished } = this.state
    return model ? (
      <ScrollView
        style={[styles.scrollView, styles.fullWidth]}
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
            extra={{
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
      </ScrollView>
    ) : (
      <View style={styles.scrollView}>
        <Text>This stepNumber does not have a form yet</Text>
      </View>
    )
  }
}

export default WorkbookForm
