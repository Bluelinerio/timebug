// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Goal, GoalStep }          from '../types'
import styles                           from '../styles'
import Icon                             from 'react-native-vector-icons/FontAwesome'
import GoalStepComponent                from './GoalStepComponent'

type GoalComponentProps = {
  goal: Goal,
  onPress: () => any,
  steps: Array<GoalStep>,
  goalIndex: string,
  formId: string,
  onGoalSwitch: any => any
}

class GoalComponent extends React.PureComponent<GoalComponentProps> {
  constructor(props) {
    super(props)
    this.state = {
      showList: false
    }
  }

  _listTrigger = () => {
    this.setState({ showList: !this.state.showList })
  }

  _onPress = () => {
    const { onPress, goal, goalIndex } = this.props
    onPress(goalIndex, goal)
  }

  render() {
    const { goal, steps, onGoalSwitch, formId, goalIndex } = this.props
    const { showList } = this.state
    return (
      <View style={styles.goalFullContainer}>
        <View style={styles.goalContainer}>
          <TouchableOpacity
            onPress={this._onPress}
            style={styles.goalContainerMainArea}
          >
            <Text style={[styles.goalTitle, styles.text, styles.leftText]}>
              {goal.goal}
            </Text>
            <Text style={[styles.goalType, styles.text, styles.leftText]}>
              {goal.goalTypes}
            </Text>
          </TouchableOpacity>
          <View style={styles.goalContainerSecondaryArea}>
            <View style={styles.goalContainerPercentageContainer}>
              <Text
                style={[
                  styles.percentageText,
                  styles.text,
                  styles.justifiedText
                ]}
              >
                {steps &&
                  steps.length > 0 &&
                  `${(steps.reduce(
                    (total, step) => (step.completed ? total + 1 : total),
                    0
                  ) *
                    100 /
                    steps.length).toFixed(0)}%`}
              </Text>
            </View>
            <TouchableOpacity
              onPress={this._listTrigger}
              style={styles.goalContainerButton}
            >
              <View style={showList ? styles.rotateIcon : {}}>
                <Icon name="caret-right" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {steps &&
          steps.length > 0 &&
          showList && (
            <View style={[styles.hiddenView]}>
              {steps.map(step => {
                return (
                  <View key={step.id}>
                    <GoalStepComponent
                      title={step.step}
                      completed={step.completed}
                      id={step.id}
                      onGoalSwitch={onGoalSwitch}
                      formId={formId}
                      goalId={goalIndex}
                    />
                  </View>
                )
              })}
            </View>
          )}
      </View>
    )
  }
}

export default GoalComponent
