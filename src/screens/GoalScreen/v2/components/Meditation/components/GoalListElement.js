// @flow
import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import SvgIcon from '2020_components/SvgIcon'
import styles, { iconStyle } from '../styles'

type Props = {
  goals: Array<any>,
  type: any,
  onPress: () => void,
  iconName: string,
}

class GoalListElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goals, onPress } = this.props
    const totalGoals = goals.reduce((totalGoals, g) => {
      const awardData = g.award || {}
      const removed = awardData.deleted || awardData.completed || false
      if (!removed) return totalGoals + 1
      return totalGoals
    }, 0)
    if (totalGoals > 0) onPress()
    else
      Alert.alert('No goals', 'No goals have been added to this type category')
  }

  render() {
    const { goals = [], type, iconName } = this.props
    const totalGoals = goals.reduce((totalGoals, g) => {
      const awardData = g.award || {}
      const removed = awardData.deleted || awardData.completed || false
      if (!removed) return totalGoals + 1
      return totalGoals
    }, 0)
    return (
      <TouchableOpacity style={styles.elementContainer} onPress={this._onPress}>
        <View style={styles.leftBlock}>
          <SvgIcon name={iconName} {...iconStyle} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>
            {type}{' '}
            {goals
              ? goals.length > 0 && totalGoals > 0 ? `(${totalGoals})` : `(0)`
              : ''}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalListElement
