import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Form from '../containers/FormWrapperContainer'
import styles from '../styles'
import tron from 'reactotron-react-native'
import type { Step } from '../../../../services/cms'

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

  _onClosePress = () => {
    return null
  }

  CloseButton = () => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 1000,
          width: 40,
          height: 40,
          borderColor: '#212121',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-start',
        }}
        onPress={this._onClosePress}
      >
        <Icon name={'ios-arrow-round-back'} size={40} color={'#212121'} />
      </TouchableOpacity>
    )
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
          CloseButton={this.CloseButton}
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
