//@flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import moment                           from 'moment'
import { DATE_FORMAT }                  from '2020_constants/constants'
import styles                           from '../styles'

type Props = {
  name: string,
  goalName: string,
  estimate: string,
  plan: string,
  completed: boolean,
  completedAt: string,
  toggleGoalAction: string => any,
  actions: {
    DELETE: string,
    COMPLETE: string,
  },
}

class GoalReview extends React.PureComponent<Props> {
  _onComplete = () => {
    const { toggleGoalAction, actions } = this.props
    toggleGoalAction(actions.COMPLETE)
  }

  _onDelete = () => {
    const { toggleGoalAction, actions } = this.props
    toggleGoalAction(actions.DELETE)
  }

  render() {
    const {
      goalName,
      name,
      estimate,
      plan,
      completed,
      completedAt,
    } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.goalReviewContainer]}>
          <View style={styles.goalNameContainer}>
            <Text style={styles.goalName}>{goalName}</Text>
          </View>
          <View style={styles.goalOwnerContainer}>
            <Text style={styles.goalOwner}>Person To Help: {name}</Text>
          </View>
          <View style={styles.estimateContainer}>
            <Text style={styles.estimate}>
              {completed
                ? `Completed at: ${moment(completedAt).format(DATE_FORMAT)}`
                : `Estimated time to complete: ${estimate}`}
            </Text>
          </View>
          <View style={styles.planContainer}>
            <Text style={styles.planHeader}>
              Your plan to complete this goal is:
            </Text>
            <Text style={styles.plan}>{`${plan}`}</Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={this._onComplete}
          >
            <Text style={styles.actionButtonText}>
              {completed ? `Not-Complete` : 'Complete'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={this._onDelete}
          >
            <Text style={styles.actionButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default GoalReview
