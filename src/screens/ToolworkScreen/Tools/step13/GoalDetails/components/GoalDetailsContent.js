// @flow
import React, { useState, useCallback, useMemo } from 'react'
import moment from 'moment'
import { View, Text } from 'react-native'
import { FormInput } from 'react-native-elements'
import Slider from 'react-native-slider'
import SubstepList from '../containers/SubstepListContainer'
import { Goal } from '../../types'
import { debounce } from '2020_utils/debounce'
import styles, { minimumTrackColor, maximumTrackColor } from '../styles'

type Props = {
  goal: Goal,
  storeNotes: string => void,
  notes: string,
  completed?: boolean,
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
  const { goal, notes, storeNotes, completed } = props
  const [stateNotes, setNotes] = useState(notes ? notes : '')
  const totalSteps = goal.steps.length
  // TODO: Hook to get steps as well as goal
  const completedSteps = 1
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

  return (
    <View style={[styles.container, styles.detailsContainer]}>
      <Text style={[styles.text, styles.title]}>
        Goal: <Text style={styles.goalText}>{goal.name}</Text>
      </Text>
      <Text style={[styles.text, styles.category]}>
        Category: <Text style={styles.goalText}>{goal.category.name}</Text>
      </Text>
      <Text style={[styles.text, styles.dueTime]}>
        Created on: <Text style={styles.goalText}>{formattedDate}</Text>
      </Text>
      <Text style={[styles.text, styles.dueTime]}>
        Estimated duration:{' '}
        <Text style={styles.goalText}>{goal.timeToComplete.text}</Text>
      </Text>
      <Text style={[styles.text, styles.dueTime]}>
        Due date: <Text style={styles.goalText}>{dueDate}</Text>
      </Text>
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
          {completed
            ? 'Congratulations on completing this goal!'
            : daysLeft < 0
              ? 'This goal is past due.'
              : daysLeft === 0
                ? `Today is `
                : `You have ${daysLeft} ${
                    daysLeft === 1 ? 'day' : 'days'
                  } to complete this goal!`}
        </Text>
      </View>
      <Text style={[styles.text, styles.subsectionTitle]}>
        Steps to complete goal
      </Text>
      <SubstepList goal={goal} />
      <Text style={[styles.text, styles.subsectionTitle]}>
        Additional notes
      </Text>
      <View style={styles.textAreaContainer}>
        <FormInput
          containerStyle={styles.textArea}
          inputStyle={styles.additionalInput}
          underlineColorAndroid="transparent"
          placeholder="Add any additional notes here..."
          multiline={true}
          value={stateNotes}
          onChangeText={onTextChange}
        />
      </View>
    </View>
  )
}

export default React.memo(GoalDetailsContent)
