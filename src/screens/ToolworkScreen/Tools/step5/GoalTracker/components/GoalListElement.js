// @flow
import React                                   from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import SvgIcon                                 from '2020_components/SvgIcon'
import styles, { iconStyle }                   from '../../common/styles'

type Props = {
  goals: Array<any>,
  type: any,
  onSelect: String => any,
  iconName: string,
}

// TODO: Update the .extra behavior
class GoalListElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { type, goals, onSelect } = this.props
    const totalGoals = goals.reduce((totalGoals, g) => {
      const awardData = g.award || {}
      const deleted = awardData.deleted || false
      if (!deleted) return totalGoals + 1
      return totalGoals
    }, 0)
    if (totalGoals > 0) onSelect(type)
    else
      Alert.alert('No goals', 'No goals have been added to this type category')
  }

  render() {
    const { goals = [], type, iconName } = this.props
    const totalGoals = goals.reduce((totalGoals, g) => {
      const awardData = g.award || {}
      const deleted = awardData.deleted || false
      if (!deleted) return totalGoals + 1
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
              ? goals.length > 0 && totalGoals > 0
                ? `(${goals.reduce((completedGoals, g) => {
                  const awardData = g.award || {}
                  const deleted = awardData.deleted || false
                  const completed = awardData.completed || false
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
