// @flow
import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import SvgIcon from '2020_components/SvgIcon'
import styles from '../styles'

type Props = {
  goal: any,
  onPress: any => void,
  color: string,
  iconName: string,
  iconStyle: any,
}

class GoalComponent extends React.PureComponent<Props> {
  _onPress = () => {
    const { onPress } = this.props
    if (onPress) onPress()
  }

  render() {
    const { goal, color, iconName, iconStyle } = this.props
    return (
      <TouchableOpacity style={styles.goalContainer} onPress={this._onPress}>
        <View style={styles.leftBlock}>
          <SvgIcon name={iconName} {...iconStyle} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={[styles.goalText, { color }]}>{goal.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalComponent
