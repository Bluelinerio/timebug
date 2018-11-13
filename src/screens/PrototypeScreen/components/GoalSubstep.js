import React                                       from 'react'
import { View, TouchableOpacity, Text }            from 'react-native'
import Icon                                        from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../styles'

type Step = {
  [x: String]: {
    _id: String,
    value: any
  },
  _id: String,
  extra?: {
    completed?: Boolean
  }
}

type Props = {
  step: Step,
  onPress: Step => {}
}

class GoalSubstep extends React.PureComponent<Props> {
  _onPress = () => {
    const { step, onPress } = this.props
    const completed = (step.extra && step.extra.completed) || false
    const newStep = {
      ...step,
      extra: {
        ...step.extra,
        completed: !completed
      }
    }
    onPress(newStep)
  }

  render() {
    const { step } = this.props
    const substepTitleIndex = '0'
    return (
      <View style={styles.elementContainer}>
        <TouchableOpacity
          style={[styles.leftBlock, styles.leftIcon]}
          onPress={this._onPress}
        >
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
          <Text style={styles.elementText}>{step[substepTitleIndex].value}</Text>
        </View>
      </View>
    )
  }
}

export default GoalSubstep
