// @flow
import React                  from 'react'
import { View, Text, Switch } from 'react-native'
import styles                 from '../styles'
import tron                   from 'reactotron-react-native'

export type GoalStepComponentProps = {
  id: string,
  title: string,
  completed: boolean,
  onGoalSwitch: any => any,
  formId: string,
  goalId: string,
}

class GoalStepComponent extends React.PureComponent<GoalStepComponentProps> {
  _onGoalSwitch = value => {
    const { onGoalSwitch, formId, goalId, id } = this.props
    tron.log(this.props)
    onGoalSwitch({ id, formId, goalId, value })
  }

  render() {
    const { title, completed } = this.props
    return (
      <View style={styles.goalStepContainer}>
        <View style={styles.stepTitleContainer}>
          <Text style={styles.stepTitle}>{title}</Text>
        </View>
        <View style={styles.stepSwitchContainer}>
          <Switch value={completed} onValueChange={this._onGoalSwitch} />
        </View>
      </View>
    )
  }
}

export default GoalStepComponent
