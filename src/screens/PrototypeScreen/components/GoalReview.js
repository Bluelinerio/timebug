import React from 'react'
import { View, Text } from 'react-native'
import Slider from 'react-native-slider'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'
import { translateFrequencies } from '../forms/goals'
import GoalSubstep from './GoalSubstep'
import { FormInput } from 'react-native-elements'

type Props = {
  goal: any,
  type: String,
  onPress: (any, any) => String,
  onTextChange: String => any
}

class GoalReview extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    const { goal } = props
    const { extra = {} } = goal
    this.state = {
      notes: extra.notes || ''
    }
  }
  _onPress = (substep: any) => {
    const { onPress, goal } = this.props
    onPress(goal, substep)
  }

  _onInputTextChange = (text: String) => {
    const { onTextChange } = this.props
    onTextChange(text)
  }

  _inputTextChangeMechanic = (func, delay) => {
    let inDebounce
    return function(text: string) {
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func(text), delay)
    }
  }

  _inputTextEvent = this._inputTextChangeMechanic(this._onInputTextChange, 1500)

  _handleInput = (text: string) => {
    this.setState({ notes: text })
    this._inputTextEvent(text)
  }

  render() {
    const { goal, type } = this.props
    const steps = goal['5'].value
    const { notes } = this.state
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
          <Text style={styles.goalScreenSubtitle}>{type}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalScreenSubtitle}>{goal['1'].value}</Text>
          </View>
          <View style={[styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>
              Checkin: {translateFrequencies(goal['4'].value)}
            </Text>
          </View>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>ETA: {goal['3'].value}</Text>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <Text style={styles.goalScreenContent}>Progress</Text>
            <View style={styles.goalReviewIndent}>
              <Text style={styles.goalScreenContent}>Month #1: 100%</Text>
            </View>
            <View style={styles.goalReviewIndent}>
              <Text style={styles.goalScreenContent}>Month #2: 33%</Text>
            </View>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <View style={[styles.totalProgress]}>
              <Text style={styles.goalScreenContent}>Total: 22%</Text>
              <Slider
                maximumValue={100}
                minimumValue={0}
                step={1}
                minimumTrackTintColor={minimumTrackColor}
                maximumTrackTintColor={maximumTrackColor}
                value={22}
                disabled
                thumbStyle={{
                  width: 0,
                  height: 0,
                  backgroundColor: 'transparent'
                }}
              />
            </View>
          </View>
          <View style={styles.goalReviewTextBlock}>
            {steps &&
              steps.map(step => (
                <GoalSubstep
                  key={step._id}
                  step={step}
                  onPress={this._onPress}
                />
              ))}
          </View>
          <View style={styles.textAreaContainer}>
            <View style={[styles.goalReviewTextBlock, { marginBottom: 8 }]}>
              <Text style={styles.goalScreenContent}>Additional Notes</Text>
            </View>
            <FormInput
              containerStyle={styles.textArea}
              inputStyle={styles.additionalInput}
              underlineColorAndroid="transparent"
              placeholder="Add any additional notes here..."
              multiline={true}
              value={notes}
              onChangeText={this._handleInput}
            />
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default GoalReview
