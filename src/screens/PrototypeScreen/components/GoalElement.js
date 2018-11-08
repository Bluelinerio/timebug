// @flow
import React                                       from 'react'
import { View, Text, TouchableOpacity }            from 'react-native'
import styles, { completedColor, incompleteColor } from '../styles'
import Icon                                        from 'react-native-vector-icons/Ionicons'

type Props = {
  goals: Array<any>,
  model: any,
  goal: any,
  onSelect: String => any
}

class GoalElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goal, onSelect } = this.props
    onSelect(goal)
  }

  render() {
    const { goal } = this.props
    const goalText = goal['1'].value
    const { extra = {} } = goal
    return !extra.deleted && (
      <TouchableOpacity style={styles.elementContainer} onPress={this._onPress}>
        <View style={[styles.leftBlock, styles.leftIcon]}>
          <Icon
            name={
              extra.completed
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline'
            }
            size={32}
            color={extra.completed ? completedColor : incompleteColor}
          />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>{goalText}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalElement
