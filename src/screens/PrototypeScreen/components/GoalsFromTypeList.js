// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'
import GoalElement    from './GoalElement'

type Props = {
  onSelect: String => any,
  goals: any,
  goal: string,
  model: any
}

class GoalsFromTypeList extends React.PureComponent<Props> {
  render() {
    const { goal, goals, onSelect } = this.props
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
          <Text style={styles.goalScreenSubtitle}>{goal}</Text>
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
