// @flow
import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
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
    const { goal, goals, onSelect } = this.props
    const totalGoals = goals.reduce((totalGoals, g) => {
      const { extra = {} } = g
      const deleted = extra.deleted || false
      if (!deleted) return totalGoals + 1
      return totalGoals
    }, 0)
    if (totalGoals > 0) onSelect(goal)
    else
      Alert.alert('No goals', 'No goals have been added to this type category')
  }

  render() {
    const { goals = [], goal } = this.props
    const totalGoals = goals.reduce((totalGoals, g) => {
      const { extra = {} } = g
      const deleted = extra.deleted || false
      if (!deleted) return totalGoals + 1
      return totalGoals
    }, 0)
    return (
      <TouchableOpacity style={styles.elementContainer} onPress={this._onPress}>
        <View style={styles.leftBlock}>
          <Image style={styles.elementIcon} source={icon} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>
            {goal}{' '}
            {goals
              ? goals.length > 0 && totalGoals > 0
                ? `(${goals.reduce((completedGoals, g) => {
                  const { extra = {} } = g
                  const completed = extra.completed || false
                  const deleted = extra.deleted || false
                  if (completed && !deleted) return completedGoals + 1
                  return completedGoals
                }, 0)}/${totalGoals})`
                : `(0)`
              : ''}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalListElement
