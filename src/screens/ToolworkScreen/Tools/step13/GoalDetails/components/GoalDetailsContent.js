// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Goal } from '../../types'
import styles from '../styles'

type Props = {
  goal: Goal,
}

class GoalDetailsContent extends React.PureComponent<Props> {
  render() {
    const { goal } = this.props
    return (
      <View style={[styles.container, styles.detailsContainer]}>
        <Text style={[styles.text, styles.title]}>
          Goal: <Text style={styles.goalText}>{goal.name}</Text>
        </Text>
        <Text style={[styles.text, styles.category]}>
          Category: <Text style={styles.goalText}>{goal.category.name}</Text>
        </Text>
        <Text style={[styles.text, styles.dueTime]}>
          Estimated duration:{' '}
          <Text style={styles.goalText}>{goal.timeToComplete.text}</Text>
        </Text>
        {goal.steps.map(s => (
          <Text key={s.id} style={[styles.text]}>
            {s.name}
          </Text>
        ))}
      </View>
    )
  }
}

export default GoalDetailsContent
