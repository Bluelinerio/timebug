import React                      from 'react'
import { View, Text, ScrollView } from 'react-native'
import Form                       from '../../../../forms/custom/components/Form'
import styles                     from '../styles'
import tron                       from 'reactotron-react-native'

type Props = {
  step: string,
  setScreenStatus: any => null,
  model: any,
  data: any,
}

class WorkbookForm extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { setScreenStatus, step } = this.props
    tron.log(data)
    setScreenStatus({ [step]: data })
  }
  render() {
    const { model, step, data } = this.props
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
        />
      </ScrollView>
    ) : (
      <View style={styles.scrollView}>
        <Text>This form is coming soon</Text>
      </View>
    )
  }
}

export default WorkbookForm
