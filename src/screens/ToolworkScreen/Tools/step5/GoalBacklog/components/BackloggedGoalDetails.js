// @flow
import React                                   from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Slider                                  from 'react-native-slider'
import globalStyles, {
  minimumTrackColor,
  maximumTrackColor,
}                                              from '../../common/styles'
import styles                                  from '../styles'
import type { GoalWithToolData }               from '../../common/types'
import GoalSubstep                             from './GoalSubstep'

type Props = {
  goal: GoalWithToolData,
  toggleGoal: () => any,
  deleteGoal: () => any,
  unsetGoal: () => any,
  title: string,
  dialogElements: Array<any>,
  deletionDate: string,
  goalOutcome: string,
  types: Array<string>,
  frequency: string,
  time: string,
  completionDate: string,
  goalAwardData: any,
  steps: any,
}

class GoalReview extends React.PureComponent<Props> {
  state = {
    openDialog: false,
  }

  _deleteGoal = () => {
    const { deleteGoal } = this.props
    Alert.alert(
      'Are you sure you want to delete this goal?',
      '',
      [
        {
          text: 'Delete',
          onPress: () => deleteGoal(),
        },
        {
          text: 'Cancel',
          onPress: () => null,
        },
      ],
      { cancelable: false }
    )
  }

  _onReopen = () => {
    const { toggleGoal } = this.props
    Alert.alert(
      'Do you want to edit this goal before reopening?',
      '',
      [
        {
          text: 'Edit',
          onPress: () => toggleGoal(true),
        },
        {
          text: 'Do not edit',
          onPress: () => toggleGoal(false),
        },
        {
          text: 'Cancel',
          onPress: () => null,
        },
      ],
      { cancelable: false }
    )
  }

  render() {
    const {
      title,
      deletionDate,
      types,
      frequency,
      time,
      completionDate,
      goalAwardData,
      steps,
    } = this.props
    const goalTypes = types.reduce((string, val, index) => {
      if (index === 0) return `${val}`
      return `${string}, ${val}`
    }, ``)
    const completedSteps = steps.reduce((count, step) => {
      if (step.award && step.award.status) return count + 1
      return count
    }, 0)
    const totalSteps = steps.length
    const completion =
      goalAwardData && goalAwardData.completed
        ? 100
        : totalSteps > 0 ? completedSteps / totalSteps * 100 : 0
    return (
      <React.Fragment>
        <View style={[globalStyles.titleContainer, styles.titleContainer]}>
          <Text style={[globalStyles.goalScreenSubtitle, styles.title]}>
            {title}
          </Text>
          <Text style={[globalStyles.goalScreenTypes, styles.goalScreenTypes]}>
            {goalTypes}
          </Text>
        </View>
        <View style={globalStyles.container}>
          <View
            style={[
              globalStyles.goalReviewTextBlock,
              globalStyles.goalReviewIndent,
              styles.goalReviewTextBlock,
              styles.goalReviewIndent,
            ]}
          >
            <Text style={globalStyles.goalScreenContent}>
              This goal was deleted at: {deletionDate}
            </Text>
            <View style={[globalStyles.goalReviewIndent]}>
              <Text style={globalStyles.goalScreenContent}>
                Checkin: {frequency}
              </Text>
            </View>
            <View
              style={[
                globalStyles.goalReviewTextBlock,
                globalStyles.goalReviewIndent,
              ]}
            >
              <Text style={globalStyles.goalScreenContent}>ETC: {time}</Text>
            </View>
            <View
              style={[
                globalStyles.goalReviewTextBlock,
                globalStyles.goalReviewIndent,
              ]}
            >
              <Text style={globalStyles.goalScreenContent}>
                Expected date: {completionDate}
              </Text>
            </View>
            <View style={globalStyles.goalReviewTextBlock}>
              <View style={[globalStyles.totalProgress]}>
                <Text style={globalStyles.goalScreenContent}>
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
            <View style={globalStyles.goalReviewTextWithMargin}>
              <Text style={globalStyles.goalScreenContent}>
                Steps to complete this goal
              </Text>
            </View>
            <View style={globalStyles.goalReviewTextBlock}>
              {steps &&
                steps.map(step => <GoalSubstep key={step._id} step={step} />)}
            </View>
          </View>
          <View style={globalStyles.optionsContainer}>
            <TouchableOpacity
              style={[globalStyles.optionButton, styles.optionButton]}
              onPress={this._onReopen}
            >
              <Text
                style={[globalStyles.optionButtonText, styles.optionButtonText]}
              >
                Reopen
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[globalStyles.optionButton, styles.optionButton]}
              onPress={this._deleteGoal}
            >
              <Text
                style={[globalStyles.optionButtonText, styles.optionButtonText]}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default GoalReview
