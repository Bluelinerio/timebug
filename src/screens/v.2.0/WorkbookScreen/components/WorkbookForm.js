import React                         from 'react'
import { View, Text, ScrollView }    from 'react-native'
import Form                          from '../containers/FormWrapperContainer'
import styles                        from '../styles'
import tron                          from 'reactotron-react-native'
import type { Step }                 from '../../../../services/cms'

type Props = {
  stepNumber: string,
  setScreenStatus: any => null,
  model: any,
  data: any,
  phase: string,
  step: Step,
}

class WorkbookForm extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { setScreenStatus, stepNumber } = this.props
    tron.log(data)
    setScreenStatus({ [stepNumber]: data })
  }
  render() {
    const { model, step, stepNumber, data, phase } = this.props
    return model ? (
      <ScrollView
        style={[styles.scrollView, styles.fullWidth]}
        contentContainerStyle={styles.scrollView}
      >
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
      </ScrollView>
    ) : (
      <View style={styles.scrollView}>
        <Text>This stepNumber does not have a form yet</Text>
      </View>
    )
  }
}

export default WorkbookForm
