import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles, { buttonColor } from '../styles'
import tron from 'reactotron-react-native'
import t from './form'
import NextButton from './NextButton'
import hexToRgba from '../../../utils/colorTransform'

const Form = t.form.Form

export type Model = {
  type: any,
  options: any
}

type GoalStepScreenProps = {
  onPress: () => any,
  model: Model
}

type GoalStepScreenState = {
  model: Model,
  isInvalid: boolean,
  value: any,
  errors: ?any
}

class GoalStepScreen extends React.PureComponent<
  GoalStepScreenProps,
  GoalStepScreenState
> {
  constructor(props) {
    super(props)
    const { model, value } = props
    this.state = {
      model,
      isInvalid: false,
      errors: null,
      value
    }
  }

  handleFormRef = ref => {
    this.form = ref
  }

  onChange = (value: any) => {
    const { model: { type } } = this.state
    if (!this.state.errors) {
      const isInvalid = t.validate(value, type).isValid() === false
      if (this.state.isInvalid !== isInvalid || this.state.value !== value) {
        this.setState({
          isInvalid,
          value
        })
      }
    } else {
      const { errors } = this.form.validate()
      const isInvalid = errors.length
      this.setState({
        isInvalid,
        value,
        errors
      })
    }
  }

  onPress = () => {
    const { onPress } = this.props
    const { value } = this.state
    tron.log(value)
    onPress(value)
  }

  render() {
    const { model, value } = this.state
    const { type, options } = model
    const { config } = options
    tron.log(model)
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView style={styles.container}>
          <View>
            <Form
              type={type}
              ref={this.handleFormRef}
              options={{
                ...{
                  ...options,
                  config: {
                    ...config,
                    stepColor: buttonColor,
                    color: hexToRgba(buttonColor, 0.1)
                  }
                },
                topLevel: true
              }}
              value={value}
              onChange={this.onChange}
            />
          </View>
          <View style={{ height: 60 }} />
        </ScrollView>
        <View style={styles.workbookNextButtonContainer}>
          <NextButton
            onPress={this.onPress}
            buttonMessage={'Submit'}
            backgroundColor={buttonColor}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default GoalStepScreen
