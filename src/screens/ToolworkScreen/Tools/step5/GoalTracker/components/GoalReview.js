import React                                            from 'react'
import { View, Text, TouchableOpacity }                 from 'react-native'
import { FormInput }                                    from 'react-native-elements'
import Slider                                           from 'react-native-slider'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'
import GoalSubstep                                      from './GoalSubstep'

type Props = {
  goal: any,
  type: String,
  onPress: (any, any) => String,
  onTextChange: String => any,
  toggleGoal: () => any,
  deleteGoal: () => any,
  steps: any,
  title: string,
  types: Array<string>,
  frequency: string,
  time: string,
  goalAwardData: {
    goalId: string,
    text: string,
    substeps: string,
  },
}

class GoalReview extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    const { goalAwardData } = props
    this.state = {
      notes: goalAwardData ? goalAwardData.text || '' : '',
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
    const {
      toggleGoal,
      deleteGoal,
      steps,
      title,
      types,
      frequency,
      time,
      goalAwardData,
    } = this.props
    const { notes } = this.state
    const completedSteps = steps.reduce((count, step) => {
      if (step.award && step.award.status) return count + 1
      return count
    }, 0)
    const goalTypes = types.reduce((string, val, index) => {
      if (index === 0) return `${val}`
      return `${string}, ${val}`
    }, ``)
    const totalSteps = steps.length
    const completion =
      goalAwardData && goalAwardData.completed
        ? 100
        : totalSteps > 0 ? completedSteps / totalSteps * 100 : 0
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
          <Text style={styles.goalScreenTypes}>{goalTypes}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalScreenSubtitle}>
              {title}
              {goalAwardData && goalAwardData.completed ? ' - Completed' : ''}
            </Text>
          </View>
          <View style={[styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>Checkin: {frequency}</Text>
          </View>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>ETA: {time}</Text>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <View style={[styles.totalProgress]}>
              <Text style={styles.goalScreenContent}>Total: {completion.toFixed(2)}%</Text>
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
                  backgroundColor: 'transparent',
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
                {goalAwardData && goalAwardData.completed
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
