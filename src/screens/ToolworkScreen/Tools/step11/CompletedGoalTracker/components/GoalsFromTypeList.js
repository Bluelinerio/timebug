// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import GoalElement    from '../containers/GoalElementContainer'
import type { Goal }  from '../types'
import styles         from '../styles'

type Props = {
  onSelect: Goal => any,
  goals: Array<Goal>,
}

class GoalsFromTypeList extends React.PureComponent<Props> {
  render() {
    const { goals, onSelect } = this.props
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>Top goals</Text>
          <Text style={styles.goalScreenSubtitle}>
            These are your top goals from the past 5 years
          </Text>
        </View>
        <View style={[styles.container, styles.goalListContainer]}>
          {goals.map(goal => (
            <GoalElement key={goal.id} goal={goal} onSelect={onSelect} />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalsFromTypeList
