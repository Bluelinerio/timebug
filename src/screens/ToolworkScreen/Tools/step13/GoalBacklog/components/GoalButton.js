// @flow
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Goal } from '../../types'
import styles from '../styles'

type Props = {
  goal: Goal,
}

class GoalButton extends React.PureComponent<Props> {
  render() {
    const { goal } = this.props
    return (
      <TouchableOpacity style={styles.goalButton}>
        <Text style={styles.goal}>{goal.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default GoalButton
