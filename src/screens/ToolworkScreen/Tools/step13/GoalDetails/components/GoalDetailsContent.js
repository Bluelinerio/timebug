// @flow
import React, { useState, useCallback, useMemo } from 'react'
import moment from 'moment'
import { View, Text, TouchableOpacity } from 'react-native'
import { FormInput } from 'react-native-elements'
import Slider from 'react-native-slider'
import OptionsDialog from '2020_components/OptionsDialog'
import { debounce } from '2020_utils/debounce'
import { CommonGoalOutcomesArray }       from '2020_forms/forms/content'
import SubstepList from '../containers/SubstepListContainer'
import { Goal, SubstepToolData } from '../../types'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'

type Props = {
  goal: Goal,
  storeNotes: string => void,
  notes: string,
  completed?: boolean,
  steps: Array<SubstepToolData>,
  onCompletePress: () => void,
  onDeletePress: () => void,
}

const calculateDueDate = (goal: Goal) => {
  const { creation, timeToComplete: { moment: momentOps } } = goal
  const then = moment(creation)
  for (const operator of momentOps) {
    then.add(operator.value, operator.unit)
  }
  const dueDays = then.diff(moment(), 'days')
  return [dueDays, then.format('MM/DD/YYYY')]
}

const GoalDetailsContent = (props: Props) => {
  const {
    goal,
    notes,
    storeNotes,
    completed,
    steps,
    onCompletePress: onComplete,
    onDeletePress,
  } = props
  const [stateNotes, setNotes] = useState(notes ? notes : '')
  const [openDialog, setOpenDialog] = useState(false)
  const totalSteps = goal.steps.length
  const completedSteps = steps ? steps.filter(s => s.completed).length : 0
  const completion = completed
    ? 100
    : totalSteps > 0 ? completedSteps / totalSteps * 100 : 0
  const debouncedStoreNotes = useMemo(() => debounce(storeNotes, 1500), [
    storeNotes,
  ])
  const onTextChange = useCallback((notes: string) => {
    setNotes(notes)
    debouncedStoreNotes(notes)
  })
  const formattedDate = moment(goal.creation).format('MM/DD/YYYY')

  const [daysLeft, dueDate] = useMemo(() => calculateDueDate(goal), [goal.id])

  const onCompletePress = useCallback(() => {
    setOpenDialog(true)
  }, [setOpenDialog])

  const onClose = useCallback(() => {
    setOpenDialog(false)
  }, [setOpenDialog])

  const onSelect = useCallback(({ value }) => {
    onComplete(value)
  }, [onComplete])

  return (
    <View style={[styles.container, styles.detailsContainer]}>
      <OptionsDialog
        dialogVisible={openDialog}
        onClose={onClose}
        elements={CommonGoalOutcomesArray}
        onSelect={onSelect}
        text={'Please select a goal outcome for your goal'}
      />
      <Text style={[styles.text, styles.title]}>
        Goal: <Text style={styles.goalText}>{goal.name}</Text>
      </Text>
      <Text style={[styles.text, styles.category]}>
        Category: <Text style={styles.goalText}>{goal.category.name}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard]}>
        Created on: <Text style={styles.goalText}>{formattedDate}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard]}>
        Estimated duration:{' '}
        <Text style={styles.goalText}>{goal.timeToComplete.text}</Text>
      </Text>
      <Text style={[styles.text, styles.detailsStandard]}>
        Due date: <Text style={styles.goalText}>{dueDate}</Text>
      </Text>
      <Text
        style={[styles.text, styles.detailsStandard, styles.completionProgress]}
      >
        Completion Progress: {completion.toFixed(2)}%
      </Text>
      <View style={styles.goalReviewTextBlock}>
        <View style={[styles.totalProgress]}>
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
      <Text style={[styles.text, styles.goalTimeLeft]}>
        {completed
          ? 'Congratulations on completing this goal!'
          : daysLeft < 0
            ? 'This goal is past due.'
            : daysLeft === 0
              ? `Today is `
              : `You have ${daysLeft} ${
                  daysLeft === 1 ? 'day' : 'days'
                } left to complete this goal!`}
      </Text>
      <Text style={[styles.text, styles.subsectionTitle]}>
        Steps to complete goal
      </Text>
      <SubstepList goal={goal} />
      <Text style={[styles.text, styles.subsectionTitle]}>
        Additional notes
      </Text>
      <View style={styles.textAreaContainer}>
        <FormInput
          inputStyle={styles.additionalInput}
          underlineColorAndroid="transparent"
          placeholder="Add any additional notes here..."
          multiline={true}
          value={stateNotes}
          onChangeText={onTextChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.goalButton, styles.borderedButton]}
          onPress={onCompletePress}
        >
          <Text style={styles.goalButtonText}>Complete goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goalButton} onPress={onDeletePress}>
          <Text style={styles.goalButtonText}>Backlog goal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default React.memo(GoalDetailsContent)
