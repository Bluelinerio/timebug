// @flow
import React, { useState, useCallback, useMemo } from 'react'
import moment from 'moment'
import { View, Text, TouchableOpacity } from 'react-native'
import { Goal } from '../../types'
import OptionsDialog from '2020_components/OptionsDialog'
import { CommonGoalOutcomesArray } from '2020_forms/forms/content'
import styles from '../styles'

type Props = {
  goal: Goal,
  outcome: string,
  storeOutcome: string => void,
  onReopen: () => void,
  completedAt: () => void,
  color: string,
  textContrastColor: string,
  containerBackgroundColor: string,
}

const BackloggedGoalDetails = (props: Props) => {
  const [openDialog, setOpenDialog] = useState(false)
  const {
    goal,
    outcome,
    storeOutcome,
    onReopen,
    completedAt,
    color,
    textContrastColor,
    containerBackgroundColor,
  } = props
  const formattedDate = moment(goal.creation).format('MM/DD/YYYY')
  const formattedCompletion = moment(completedAt).format('MM/DD/YYYY')

  const onOpen = useCallback(() => {
    setOpenDialog(true)
  }, [])

  const onClose = useCallback(() => {
    setOpenDialog(false)
  }, [])

  const onSelect = useCallback(
    ({ value }) => {
      setOpenDialog(false)
      storeOutcome(value)
    },
    [outcome]
  )

  const goalOutcomeText = useMemo(
    () => {
      return outcome
        ? (CommonGoalOutcomesArray.find(o => o.key === outcome) || {}).text
        : null
    },
    [outcome]
  )

  return (
    <View style={[styles.container, styles.backloggedDetailsContainer]}>
      <OptionsDialog
        dialogVisible={openDialog}
        onClose={onClose}
        elements={CommonGoalOutcomesArray}
        onSelect={onSelect}
        text={'Please select a goal outcome for your goal'}
        value={outcome}
      />
      <View style={styles.titleContainer}>
        <Text style={[styles.detailsTitle, { color }]}>{goal.name}</Text>
      </View>
      <Text style={[styles.text, styles.category, { color }]}>
        Category: <Text style={styles.goalText}>{goal.category.name}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color }]}>
        Created on: <Text style={styles.goalText}>{formattedDate}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color }]}>
        Estimated duration:{' '}
        <Text style={styles.goalText}>{goal.timeToComplete.text}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color }]}>
        Completed on: <Text style={styles.goalText}>{formattedCompletion}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard, { color }]}>
        Outcome for this goal:{' '}
      </Text>
      <View style={styles.outcomeContainer}>
        <TouchableOpacity
          style={[
            styles.goalOutcomeSelectorContainer,
            { borderColor: containerBackgroundColor },
          ]}
          onPress={onOpen}
        >
          <Text style={styles.goalOutcomeSelector}>
            {outcome ? goalOutcomeText : 'Not selected - Press to select!'}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.actionsContainer,
          { backgroundColor: containerBackgroundColor },
        ]}
      >
        <TouchableOpacity
          onPress={onReopen}
          style={[
            styles.actionButton,
            { backgroundColor: containerBackgroundColor },
          ]}
        >
          <Text style={[styles.actionText, { color: textContrastColor }]}>
            Set as incomplete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BackloggedGoalDetails
