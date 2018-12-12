import React                      from 'react'
import { View, Text, ScrollView } from 'react-native'
// import Form                       from '../../../../forms/custom/components/Form'
import Form                       from '../containers/FormWrapperContainer'
import styles                     from '../styles'
import tron                       from 'reactotron-react-native'

type Props = {
  step: string,
  setScreenStatus: any => null,
  model: any,
  data: any,
  phase: string,
}

class WorkbookForm extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { setScreenStatus, step } = this.props
    tron.log(data)
    setScreenStatus({ [step]: data })
  }
  render() {
    const { model, step, data, phase } = this.props
    return model ? (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <Form
          model={model}
          value={data}
          onFinish={this._onFinish}
          step={step}
          formContainerStyle={styles.prototypeBackground}
          key={step}
          phase={phase}
        />
      </ScrollView>
    ) : (
      <View style={styles.scrollView}>
        <Text>This step does not have a form yet</Text>
      </View>
    )
  }
}

export default WorkbookForm
