// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Goal, GoalStep }          from '../types'
import styles                           from '../styles'
import { hashCode }                     from '../../../utils/hash'
import Icon                             from 'react-native-vector-icons/FontAwesome'
import GoalStepComponent                from './GoalStepComponent'

type GoalComponentProps = {
  goal: Goal,
  onPress: () => any,
  steps: Array<GoalStep>,
  goalIndex: string,
  formId: string
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
    const { goal, steps } = this.props
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
                20%
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
        {showList && (
          <View style={[styles.hiddenView]}>
            {steps.map(step => {
              return (
                <View key={hashCode(JSON.stringify(step))}>
                  <GoalStepComponent
                    title={step.title}
                    completed={step.completed}
                    id={step.id}
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
