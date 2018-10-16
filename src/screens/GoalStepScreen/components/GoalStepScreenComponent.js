import React                                  from 'react'
import { ScrollView, View, StatusBar, Alert } from 'react-native'
import styles, { buttonColor }                from '../styles'
import t                                      from '../../../forms/components'
import NextButton                             from './NextButton'
import hexToRgba                              from '../../../utils/colorTransform'
import r                                      from 'ramda'

const Form = t.form.Form

export type Model = {
  type: any,
  options: any
}

type GoalStepScreenProps = {
  onPress: () => any,
  model: Model,
  value: any,
  goalId: string,
  formId: string,
  type: string
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
      bufferViewHeight: 0,
      layoutReady: false,
      containerLayout: null,
      formLayout: null,
      value
    }
  }

  handleFormRef = ref => {
    this.form = ref
  }

  showAlert = () => {
    const { errors } = this.state
    if (errors && errors.length) {
      Alert.alert(errors[0].message, '', [
        {
          text: 'OK'
        }
      ])
    }
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

  validate = () => {
    const { model } = this.state
    const { options: { fields: { goalSteps: { config } } } } = model
    const validation = this.form.validate()
    const { errors, value } = validation
    if (config.min && config.max) {
      const { min, max } = config
      const hasError =
        value.goalSteps.length < min || value.goalSteps.length > max
      const res = hasError
        ? {
          value,
          errors: [
            {
              message: 'Needed a minimum of 2 steps up to a maximum of 10'
            },
            ...errors
          ]
        }
        : validation
      return res
    }
    return validation
  }

  onPress = () => {
    const { onPress, goalId, formId, type } = this.props
    const { errors, value } = this.validate()
    if (errors && errors.length > 0) {
      this.setState(
        {
          errors
        },
        this.showAlert
      )
    } else {
      onPress({ value, goalId, formId, type })
    }
  }

  layout = () => {
    const {
      containerLayout,
      formLayout,
      bufferViewHeight,
      layoutReady
    } = this.state
    if (containerLayout && formLayout) {
      const newBufferHeight = Math.max(
        0,
        bufferViewHeight +
          Math.max(0, containerLayout.height - formLayout.height)
      )
      if (newBufferHeight !== bufferViewHeight) {
        this.setState({
          layoutReady: true,
          bufferViewHeight: newBufferHeight
        })
      } else if (!layoutReady) {
        this.setState({
          layoutReady: true
        })
      }
    }
  }

  onLayout = ({ nativeEvent: { layout } }) => {
    this.setState(
      {
        containerLayout: layout
      },
      this.layout
    )
  }
  onFormLayout = ({ nativeEvent: { layout } }) => {
    this.setState(
      {
        formLayout: layout
      },
      this.layout
    )
  }

  shouldShowPaddingView = () => {
    const { value } = this.state
    return !value || r.isEmpty(value) || value.goalSteps.length <= 1
  }

  render() {
    const { model, value, layoutReady, bufferViewHeight } = this.state
    const { type, options } = model
    const { config } = options

    return (
      <View onLayout={this.onLayout} style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={buttonColor} />
        <ScrollView>
          <View
            onLayout={this.onFormLayout}
            style={{
              opacity: layoutReady ? 1 : 0
            }}
          >
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
            <View
              style={[
                styles.flexibleHeightView,
                bufferViewHeight && this.shouldShowPaddingView()
                  ? { height: bufferViewHeight }
                  : {}
              ]}
            />
          </View>
        </ScrollView>
        <View style={styles.workbookNextButtonContainer}>
          <NextButton
            onPress={this.onPress}
            buttonMessage={'Submit'}
            backgroundColor={buttonColor}
          />
        </View>
      </View>
    )
  }
}

export default GoalStepScreen
