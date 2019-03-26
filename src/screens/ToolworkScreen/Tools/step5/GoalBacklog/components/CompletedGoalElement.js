import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles                           from '../../common/styles'
import type { GoalWithToolData }        from '../../common/types'

type Props = {
  goal: GoalWithToolData,
  onPress: (goal: GoalWithToolData) => any,
  title: string,
}

class CompletedGoalElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goal, onPress } = this.props
    onPress(goal)
  }

  render() {
    const { title } = this.props
    return (
      <TouchableOpacity style={styles.elementContainer} onPress={this._onPress}>
        <View style={[styles.leftBlock, styles.leftIcon]}>
          {/* <Icon
                name={
                  awardData.completed
                    ? 'ios-checkmark-circle'
                    : 'ios-checkmark-circle-outline'
                }
                size={32}
                color={awardData.completed ? completedColor : incompleteColor}
              /> */}
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CompletedGoalElement
