// @flow
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../styles'
import { Substep } from '../../types'

type Props = {
  substep: Substep,
}

class GoalSubstepComponent extends React.PureComponent<Props> {
  render() {
    const { substep } = this.props
    return (
      <View style={styles.substepContainer}>
        <View style={styles.checkContainer}>
          <Icon
            name={
              substep.completed
                ? 'ios-checkmark-circle'
                : 'ios-checkmark-circle-outline'
            }
            size={32}
            color={substep.completed ? completedColor : incompleteColor}
          />
        </View>
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
