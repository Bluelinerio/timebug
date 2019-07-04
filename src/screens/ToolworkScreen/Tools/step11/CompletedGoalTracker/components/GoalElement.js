// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgIcon                          from '2020_components/SvgIcon'
import type { Goal }                    from '../types'
import styles, { iconStyle }            from '../styles'

export type Props = {
  goal: Goal,
  onPress: Goal => any,
  icon: string,
}

class GoalElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress, goal } = this.props
    onPress(goal)
  }

  render() {
    const { goal, icon = 'Book' } = this.props
    return (
      <TouchableOpacity
        style={styles.goalElementContainer}
        onPress={this._onPress}
      >
        <View style={styles.iconContainer}>
          <SvgIcon name={icon} {...iconStyle} />
        </View>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalLabel}>{goal.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalElement
