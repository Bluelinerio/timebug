// @flow
import React                                   from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import globalStyles                            from '../../common/styles'
import styles                                  from '../styles'
import type { GoalWithToolData }               from '../../common/types'

type Props = {
  goal: GoalWithToolData,
  toggleGoal: () => any,
  deleteGoal: () => any,
  unsetGoal: () => any,
  title: string,
  dialogElements: Array<any>,
  deletionDate: string,
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
    const { toggleGoal } = this.props
    Alert.alert(
      'Do you want to edit this goal before reopening?',
      '',
      [
        {
          text: 'Ok',
          onPress: () => toggleGoal(true),
        },
        {
          text: 'Cancel',
          onPress: () => toggleGoal(false),
        },
      ],
      { cancelable: false }
    )
  }

  render() {
    const { title, deletionDate } = this.props
    return (
      <React.Fragment>
        <View style={[globalStyles.titleContainer, styles.titleContainer]}>
          <Text style={[globalStyles.goalScreenSubtitle, styles.title]}>
            {title}
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
