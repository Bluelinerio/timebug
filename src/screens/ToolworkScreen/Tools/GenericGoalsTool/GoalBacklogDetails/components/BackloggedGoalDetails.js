// @flow
import React, { useCallback } from 'react'
import moment from 'moment'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { Goal } from '../../../step6/GoalsLog/types'
import styles from '../styles'

type Props = {
  goal: Goal,
  deletedAt: deletedAt,
  onReopen: boolean => void,
  onDelete: () => void,
  color: string,
  textContrastColor: string,
  containerBackgroundColor: string,
}

const BackloggedGoalDetails = (props: Props) => {
  const {
    goal,
    deletedAt,
    onReopen,
    onDelete,
    color,
    textContrastColor,
    containerBackgroundColor,
  } = props
  const formattedDate = moment(goal.creation).format('MM/DD/YYYY')
  const formattedDeletion = moment(deletedAt).format('MM/DD/YYYY')

  const onReopenPress = useCallback(() => {
    Alert.alert(
      'Confirmation',
      'Would you like to edit this goal before reopening?',
      [
        {
          text: 'Yes',
          onPress: () => onReopen(true),
        },
        {
          text: 'No',
          onPress: () => onReopen(false),
        },
      ],
      { cancelable: false }
    )
  }, [])

  const onDeletePress = useCallback(() => {
    Alert.alert(
      'Warning',
      'Are you sure you want to delete this goal?',
      [
        {
          text: 'Yes',
          onPress: () => onDelete(),
        },
        {
          text: 'No',
          onPress: () => null,
        },
      ],
      { cancelable: false }
    )
  }, [])

  return (
    <View style={[styles.container, styles.backloggedDetailsContainer]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.detailsTitle, { color: color }]}>{goal.name}</Text>
      </View>
      <Text style={[styles.text, styles.category, { color: color }]}>
        Category: <Text style={styles.goalText}>{goal.category.name}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color: color }]}>
        Created on: <Text style={styles.goalText}>{formattedDate}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color: color }]}>
        Estimated duration:{' '}
        <Text style={styles.goalText}>{goal.timeToComplete.text}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color: color }]}>
        Backlogged on: <Text style={styles.goalText}>{formattedDeletion}</Text>
      </Text>
      <View style={[styles.actionsContainer, styles.multipleActionsContainer]}>
        <TouchableOpacity
          onPress={onReopenPress}
          style={[
            styles.actionButton,
            styles.actionButtonSibling,
            { backgroundColor: containerBackgroundColor },
          ]}
        >
          <Text style={[styles.actionText, textContrastColor]}>
            Reopen goal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDeletePress}
          style={[
            styles.actionButton,
            styles.actionButtonSibling,
            { backgroundColor: containerBackgroundColor },
          ]}
        >
          <Text style={[styles.actionText, { color: textContrastColor }]}>
            Delete goal
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BackloggedGoalDetails
