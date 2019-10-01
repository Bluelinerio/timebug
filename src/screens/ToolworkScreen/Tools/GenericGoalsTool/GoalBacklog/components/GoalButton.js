// @flow
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Text from '2020_components/Text'
import SvgIcon from '2020_components/SvgIcon'
import { Goal } from '../../types'
import styles from '../styles'

type Props = {
  goal: Goal,
  onPress: () => void,
  iconName: string,
  iconStyle: any,
  color: string,
}

class GoalButton extends React.PureComponent<Props> {
  render() {
    const { goal, onPress, iconName, iconStyle, color } = this.props
    return (
      <TouchableOpacity style={styles.goalButton} onPress={onPress}>
        <View style={styles.leftBlock}>
          <SvgIcon name={iconName} {...iconStyle} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={[styles.goal, { color }]}>{goal.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalButton
