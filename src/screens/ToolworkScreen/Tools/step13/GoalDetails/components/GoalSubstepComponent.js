// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../styles'
import { Substep } from '../../types'

type Props = {
  substep: Substep,
  storeStepCompletion: () => void
}

class GoalSubstepComponent extends React.PureComponent<Props> {
  toggle = () => {
    const { storeStepCompletion } = this.props
    storeStepCompletion()
  }

  render() {
    const { substep } = this.props
    return (
      <View style={styles.substepContainer}>
        <TouchableOpacity style={styles.checkContainer} onPress={this.toggle}>
          <Icon
            name={
              substep.toolData && substep.toolData.completed
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline'
            }
            size={32}
            color={substep.toolData && substep.toolData.completed ? completedColor : incompleteColor}
          />
        </TouchableOpacity>
        <View style={styles.substepTextContainer}>
          <Text key={substep.id} style={[styles.text, styles.substepName]}>
            - {substep.name}
          </Text>
        </View>
      </View>
    )
  }
}

export default GoalSubstepComponent
