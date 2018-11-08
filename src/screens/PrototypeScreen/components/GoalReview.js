import React                                            from 'react'
import { View, Text, TouchableOpacity }                 from 'react-native'
import Slider                                           from 'react-native-slider'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'
import { translateFrequencies }                         from '../forms/goals'
import GoalSubstep                                      from './GoalSubstep'
import { FormInput }                                    from 'react-native-elements'

type Props = {
  goal: any,
  type: String,
  onPress: (any, any) => String,
  onTextChange: String => any,
  toggleGoal: () => any,
  deleteGoal: () => any
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
    const { goal, type, toggleGoal, deleteGoal } = this.props
    const steps = goal['5'].value
    const { notes } = this.state
    const completedSteps = steps.reduce((count, step) => {
      if (step.extra && step.extra.completed) return count + 1
      return count
    }, 0)
    const totalSteps = steps.length
    const completion =
      goal.extra && goal.extra.completed
        ? 100
        : totalSteps > 0 ? completedSteps / totalSteps * 100 : 0
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
          <Text style={styles.goalScreenSubtitle}>{type}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalScreenSubtitle}>
              {goal['1'].value}
              {goal.extra && goal.extra.completed ? ' - Completed' : ''}
            </Text>
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
              <Text style={styles.goalScreenContent}>
                Month #1: {completion}%
              </Text>
            </View>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <View style={[styles.totalProgress]}>
              <Text style={styles.goalScreenContent}>Total: {completion}%</Text>
              <Slider
                maximumValue={100}
                minimumValue={0}
                step={1}
                minimumTrackTintColor={minimumTrackColor}
                maximumTrackTintColor={maximumTrackColor}
                value={completion}
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
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={toggleGoal}>
              <Text style={styles.optionButtonText}>
                {goal.extra && goal.extra.completed
                  ? 'Not Complete'
                  : 'Complete'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={deleteGoal}>
              <Text style={styles.optionButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default GoalReview
