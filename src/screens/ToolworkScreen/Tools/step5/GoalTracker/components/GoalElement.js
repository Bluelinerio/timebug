// @flow
import React                                       from 'react'
import { View, Text, TouchableOpacity }            from 'react-native'
import Icon                                        from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../../common/styles'

type Props = {
  goal: any,
  onSelect: String => any,
  title: string,
}

// TODO: Fix .extra property and update with award data
class GoalElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goal, onSelect } = this.props
    onSelect(goal)
  }

  render() {
    const { goal, title } = this.props
    const awardData = goal.award || {}
    return (
      !awardData.deleted && (
        <TouchableOpacity
          style={styles.elementContainer}
          onPress={this._onPress}
        >
          <View style={[styles.leftBlock, styles.leftIcon]}>
            <Icon
              name={
                awardData.completed
                  ? 'ios-checkmark-circle'
                  : 'ios-checkmark-circle-outline'
              }
              size={32}
              color={awardData.completed ? completedColor : incompleteColor}
            />
          </View>
          <View style={styles.rightBlock}>
            <Text style={styles.elementText}>{title}</Text>
          </View>
        </TouchableOpacity>
      )
    )
  }
}

export default GoalElement
