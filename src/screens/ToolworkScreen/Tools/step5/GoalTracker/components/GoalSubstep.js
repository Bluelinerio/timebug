import React                                       from 'react'
import { View, TouchableOpacity, Text }            from 'react-native'
import Icon                                        from 'react-native-vector-icons/Ionicons'
import { CHILDREN_KEYS }                           from '2020_forms/forms/goals'
import styles, { completedColor, incompleteColor } from '../styles'

type Step = {
  [x: String]: {
    _id: String,
    value: any,
  },
  _id: String,
  extra?: {
    completed?: Boolean,
  },
}

type Props = {
  step: Step,
  onPress: Step => {},
}

class GoalSubstep extends React.PureComponent<Props> {
  _onPress = () => {
    const { step, onPress } = this.props
    onPress(step)
  }

  render() {
    const { step } = this.props
    return (
      <View style={styles.elementContainer}>
        <TouchableOpacity
          style={[styles.leftBlock, styles.leftIcon]}
          onPress={this._onPress}
        >
          <Icon
            name={
              step.award && step.award.status
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline'
            }
            size={32}
            color={
              step.award && step.award.status ? completedColor : incompleteColor
            }
          />
        </TouchableOpacity>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>
            {step[CHILDREN_KEYS.form_5_steps.step_to_life_goal].value}
          </Text>
        </View>
      </View>
    )
  }
}

export default GoalSubstep
