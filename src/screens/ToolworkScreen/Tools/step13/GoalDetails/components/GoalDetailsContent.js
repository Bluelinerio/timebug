// @flow
import React, { useState, useCallback, useMemo } from 'react'
import moment from 'moment'
import { View, Text } from 'react-native'
import { FormInput } from 'react-native-elements'
import SubstepList from '../containers/SubstepListContainer'
import { Goal } from '../../types'
import { debounce } from '2020_utils/debounce'
import styles from '../styles'

type Props = {
  goal: Goal,
  storeNotes: string => void,
  notes: string,
}

const calculateDueDate = (goal: Goal) => {
  const { creation, timeToComplete: { moment: momentOps } } = goal
  const then = moment(creation)
  for (const operator of momentOps) {
    then.add(operator.value, operator.unit)
  }
  return then.format('MM/DD/YYYY')
}

const GoalDetailsContent = (props: Props) => {
  const { goal, notes, storeNotes } = props
  const [stateNotes, setNotes] = useState(notes ? notes : '')
  const debouncedStoreNotes = useMemo(() => debounce(storeNotes, 1500), [
    storeNotes,
  ])
  const onTextChange = useCallback((notes: string) => {
    setNotes(notes)
    debouncedStoreNotes(notes)
  })
  const formattedDate = moment(goal.creation).format('MM/DD/YYYY')
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
        Due date: <Text style={styles.goalText}>{calculateDueDate(goal)}</Text>
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
