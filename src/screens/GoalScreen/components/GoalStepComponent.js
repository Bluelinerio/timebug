// @flow
import React from 'react'
import { View, Text, Switch } from 'react-native'
import styles from '../styles'

export type GoalStepComponentProps = {
  id: string,
  title: string,
  completed: boolean
}

const GoalStepComponent = (props: GoalStepComponentProps) => (
  <View style={styles.goalStepContainer}>
    <View style={styles.stepTitleContainer}>
      <Text style={styles.stepTitle}>{props.title}</Text>
    </View>
    <View style={styles.stepSwitchContainer}>
      <Switch value={props.completed} />
    </View>
  </View>
)

export default GoalStepComponent
