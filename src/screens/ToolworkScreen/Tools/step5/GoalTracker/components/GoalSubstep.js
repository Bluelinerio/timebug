//@flow
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { CHILDREN_KEYS } from '2020_forms/forms/goals'
import styles, { completedColor, incompleteColor } from '../../common/styles'

type Step = {
  [x: string]: {
    _id: string,
    value: any,
  },
  _id: string,
  award: {
    estimate?: string,
    status: boolean,
  },
}

type Props = {
  step: Step,
  onPress: Step => {},
  onSubstepPress: Step => any,
  disableETC: boolean,
}

// TODO: Fix Text displaying that substep is due today even though the goal already expired
class GoalSubstep extends React.PureComponent<Props> {
  _onPress = () => {
    const { step, onPress } = this.props
    onPress(step)
  }

  _onContainerPress = () => {
    const { onSubstepPress, step } = this.props
    onSubstepPress(step)
  }

  render() {
    const { step, disableETC } = this.props
    return (
      <TouchableOpacity
        style={styles.elementContainer}
        onPress={this._onContainerPress}
      >
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
          <Text style={[styles.elementText, styles.subtextFootnote]}>
            {disableETC
              ? `Due: Today`
              : `Estimated completion: ${
                step.award && step.award.estimate
                  ? step.award.estimate
                  : 'Not set'
              }`}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalSubstep
