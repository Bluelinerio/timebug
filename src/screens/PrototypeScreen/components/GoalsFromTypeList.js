// @flow
import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import GoalElement from './GoalElement'
import tron from 'reactotron-react-native'

type Props = {
  onSelect: String => any,
  goals: any,
  goal: string,
  model: any
}

class GoalsFromTypeList extends React.PureComponent<Props> {
  render() {
    tron.log(this.props)
    const { goal, goals, onSelect } = this.props
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>{goal}</Text>
        </View>
        <View style={styles.container}>
          {Object.values(goals).map(goal => (
            <GoalElement
              key={goal['1'].value}
              goal={goal}
              onSelect={onSelect}
            />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalsFromTypeList
