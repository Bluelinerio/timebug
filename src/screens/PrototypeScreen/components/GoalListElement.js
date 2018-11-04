// @flow
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'
import { icon } from '../../../resources/images'

type Props = {
  goals: Array<any>,
  model: any,
  goal: any
}

class GoalListElement extends React.PureComponent<Props> {
  render() {
    const { goals, goal } = this.props
    return (
      <View style={styles.elementContainer}>
        <View style={styles.leftBlock}>
          <Image style={styles.elementIcon} source={icon} />
        </View>
        <View style={styles.rightBlock}>
          <Text>
            {goal}{' '}
            {goals
              ? goals.length > 0
                ? `(${goals.reduce((completedGoals, g) => {
                  const { _data = {} } = g
                  const completed = _data.completed || false
                  if (completed) return completedGoals + 1
                  return completedGoals
                }, 0)}/${goals.length})`
                : `(0)`
              : ''}
          </Text>
        </View>
        <View>
          <Text />
        </View>
      </View>
    )
  }
}

export default GoalListElement
