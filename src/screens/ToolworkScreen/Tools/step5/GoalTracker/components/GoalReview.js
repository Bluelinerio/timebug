// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FormInput }                    from 'react-native-elements'
import Slider                           from 'react-native-slider'
import styles, {
  minimumTrackColor,
  maximumTrackColor,
}                                       from '../../common/styles'
import GoalSubstep                      from './GoalSubstep'
import OptionsDialog                    from './OptionsDialog'

type Props = {
  goal: any,
  type: String,
  onTextChange: string => any,
  toggleGoal: () => any,
  deleteGoal: () => any,
  steps: any,
  title: string,
  types: Array<string>,
  frequency: string,
  time: string,
  dialogElements: Array<string>,
  updateSubstep: (obj: { goal: any, substep: any, payload: any }) => any,
  status: {
    CLEARED: boolean,
    NOT_CLEARED: boolean,
  },
  goalAwardData: {
    goalId: string,
    text: string,
    substeps: string,
  },
  disableETC: boolean,
  daysLeft: string,
  completionDate: string,
  cgoElements: Array<any>,
}

class GoalReview extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    const { goalAwardData } = props
    this.state = {
      notes: goalAwardData ? goalAwardData.text || '' : '',
      openDialog: false,
      selectedSubstep: null,
      openCompletionDialog: false,
    }
  }

  _onSubstepCompletionPress = (substep: any) => {
    const { updateSubstep, goal, status } = this.props
    updateSubstep({
      goal,
      substep,
      payload: {
        status:
          substep.award && substep.award.status === status.CLEARED
            ? status.NOT_CLEARED
            : status.CLEARED,
      },
    })
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

  _onSubstepPress = (substep: any) => {
    this.setState({ openDialog: true, selectedSubstep: substep })
  }

  _onClose = () => this.setState({ openDialog: false, selectedSubstep: null })

  _onSelectETC = (result: any) => {
    const { updateSubstep, goal } = this.props
    const { selectedSubstep } = this.state
    const { value } = result
    const payload = {
      goal,
      substep: selectedSubstep,
      payload: { estimate: value },
    }
    this.setState({ openDialog: false, selectedSubstep: null }, () => {
      updateSubstep(payload)
    })
  }

  _onSelectCGO = (result: { value: any }) => {
    const { toggleGoal } = this.props
    const { value } = result
    toggleGoal(value)
  }

  _openCompletionDialog = () => {
    this.setState({ openCompletionDialog: true })
  }

  _closeCompletionDialog = () => {
    this.setState({ openCompletionDialog: false })
  }

  render() {
    const {
      deleteGoal,
      steps,
      title,
      types,
      frequency,
      time,
      dialogElements,
      goalAwardData,
      completionDate,
      daysLeft,
      cgoElements,
    } = this.props
    const { notes, openDialog, openCompletionDialog } = this.state
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
        <OptionsDialog
          dialogVisible={openDialog}
          onClose={this._onClose}
          elements={dialogElements}
          onSelect={this._onSelectETC}
        />
        <OptionsDialog
          dialogVisible={openCompletionDialog}
          onClose={this._closeCompletionDialog}
          elements={cgoElements}
          onSelect={this._onSelectCGO}
          text={'Please select a goal outcome for your goal'}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenSubtitle}>
            {title}
            {goalAwardData && goalAwardData.completed ? ' - Completed' : ''}
          </Text>
          <Text style={styles.goalScreenTypes}>{goalTypes}</Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>Checkin: {frequency}</Text>
          </View>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>ETC: {time}</Text>
          </View>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>
              Expected date: {completionDate}
            </Text>
          </View>
          <View style={styles.goalReviewTextBlock}>
            <View style={[styles.totalProgress]}>
              <Text style={styles.goalScreenContent}>
                Total: {completion.toFixed(2)}%
              </Text>
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
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalTimeLeft}>
              {goalAwardData && goalAwardData.completed
                ? 'Congratulations completing this goal!'
                : daysLeft < 0
                  ? 'Time for this goal has run out'
                  : daysLeft === 0
                    ? `Today is the due day of your goal, press complete if you made it!`
                    : `You have ${daysLeft} ${
                      daysLeft === 1 ? 'day' : 'days'
                    } to complete this goal!`}
            </Text>
          </View>
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalScreenContent}>
              Steps to complete this goal
            </Text>
          </View>
          <View style={styles.goalReviewTextBlock}>
            {steps &&
              steps.map(step => (
                <GoalSubstep
                  key={step._id}
                  step={step}
                  onPress={this._onSubstepCompletionPress}
                  onSubstepPress={this._onSubstepPress}
                  disableETC={this.props.disableETC}
                  daysLeft={daysLeft}
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
            <TouchableOpacity
              style={styles.optionButton}
              onPress={this._openCompletionDialog}
            >
              <Text style={styles.optionButtonText}>
                {goalAwardData && goalAwardData.completed
                  ? 'Not Complete'
                  : 'Complete'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={deleteGoal}>
              <Text style={styles.optionButtonText}>Backlog</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default GoalReview
