import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../styles'

class GoalSubstep extends React.PureComponent {
  _onPress = () => {
    const { step, onPress } = this.props
    onPress(step)
  }

  render() {
    const { step } = this.props
    return (
      <View style={styles.elementContainer} onPress={this._onPress}>
        <TouchableOpacity style={[styles.leftBlock, styles.leftIcon]}>
          <Icon
            name={
              step.extra && step.extra.completed
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline'
            }
            size={32}
            color={
              step.extra && step.extra.completed
                ? completedColor
                : incompleteColor
            }
          />
        </TouchableOpacity>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>{step['0'].value}</Text>
        </View>
      </View>
    )
  }
}

export default GoalSubstep