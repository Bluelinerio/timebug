// @flow
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles'
import { icon } from '../../../resources/images'

type Props = {
  goals: Array<any>,
  model: any,
  goal: any,
  onSelect: String => any
}

class GoalListElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goal, onSelect } = this.props
    onSelect(goal)
  }

  render() {
    const { goals, goal } = this.props
    return (
      <TouchableOpacity style={styles.elementContainer} onPress={this._onPress}>
        <View style={styles.leftBlock}>
          <Image style={styles.elementIcon} source={icon} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>
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
      </TouchableOpacity>
    )
  }
}

export default GoalListElement
