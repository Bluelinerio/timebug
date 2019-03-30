// @flow
import React                                   from 'react'
import moment                                  from 'moment'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles                                  from '../../common/styles'
import { DATE_FORMAT }                         from '2020_constants/constants'
import type { GoalWithToolData }               from '../../common/types'

type Props = {
  goal: GoalWithToolData,
  toggleGoal: () => any,
  deleteGoal: () => any,
  unsetGoal: () => any,
  title: string,
  dialogElements: Array<any>,
  completionDate: string,
  goalOutcome: string,
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
          text: 'Ok',
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
    const { deleteGoal } = this.props
    Alert.alert(
      'Do you want to edit this goal before reopening?',
      '',
      [
        {
          text: 'Ok',
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

  render() {
    const {
      toggleGoal,
      title,
      dialogElements,
      completionDate,
      goal,
      goalOutcome,
    } = this.props
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenSubtitle}>{title}</Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>
              Completed at: {completionDate}
            </Text>
          </View>
          <View style={[styles.goalReviewTextBlock, styles.goalReviewIndent]}>
            <Text style={styles.goalScreenContent}>
              Created at: {moment(goal.created_at).format(DATE_FORMAT)}
            </Text>
          </View>
          <TouchableOpacity onPress={this._openDialog}>
            <Text>
              Goal Outcome:{' '}
              {goalOutcome
                ? dialogElements.find(e => e.key === goalOutcome).text
                : 'Not selected'}
            </Text>
          </TouchableOpacity>
          <View style={styles.goalReviewTextWithMargin}>
            <Text style={styles.goalTimeLeft}>
              Congratulations completing this goal!
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={toggleGoal}>
              <Text style={styles.optionButtonText}>Re open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={this._deleteGoal}
            >
              <Text style={styles.optionButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default GoalReview
