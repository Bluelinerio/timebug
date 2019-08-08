// @flow
import React from 'react'
import moment from 'moment'
import { View, Text } from 'react-native'
import GoalSubstep from '../containers/GoalSubstepContainer'
import { Goal } from '../../types'
import styles from '../styles'

type Props = {
  goal: Goal,
}

const calculateDueDate = (goal: Goal) => {
  const { creation, timeToComplete: { moment: momentOps } } = goal
  const then = moment(creation)
  for (const operator of momentOps) {
    then.add(operator.value, operator.unit)
  }
  return then.format('MM/DD/YYYY')
}

class GoalDetailsContent extends React.PureComponent<Props> {
  render() {
    const { goal } = this.props
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
          Due date:{' '}
          <Text style={styles.goalText}>{calculateDueDate(goal)}</Text>
        </Text>
        <Text style={[styles.text, styles.subsectionTitle]}>
          Steps to complete goal
        </Text>
        <View style={styles.stepsContainer}>
          {goal.steps.map(s => <GoalSubstep key={s.id} substep={s} />)}
        </View>
      </View>
    )
  }
}

export default GoalDetailsContent
