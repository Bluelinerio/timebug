// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../styles'
import { Substep } from '../../types'

type Props = {
  substep: Substep,
  storeStepCompletion: () => void,
  completed?: boolean,
  due?: string,
  onPress: () => void,
}

class GoalSubstepComponent extends React.PureComponent<Props> {
  toggle = () => {
    const { storeStepCompletion } = this.props
    storeStepCompletion()
  }

  render() {
    const { substep, completed = false, onPress, due = null } = this.props
    return (
      <TouchableOpacity style={styles.substepContainer} onPress={onPress}>
        <TouchableOpacity style={styles.checkContainer} onPress={this.toggle}>
          <Icon
            name={
              completed
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline'
            }
            size={32}
            color={completed ? completedColor : incompleteColor}
          />
        </TouchableOpacity>
        <View style={styles.substepTextContainer}>
          <Text key={substep.id} style={[styles.text, styles.substepName]}>
            {substep.name}
          </Text>
          {due && <Text>{due}</Text>}
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoalSubstepComponent
