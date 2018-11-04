// @flow
import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import GoalElement from '../containers/GoalElementContainer'
import { GoalType } from '../forms/goals'
import tron from 'reactotron-react-native'

class GoalList extends React.PureComponent {
  render() {
    tron.log(GoalType)
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={styles.goalScreenTitle}>GOALS</Text>
        </View>
        <View style={styles.container}>
          {Object.values(GoalType).map(goal => (
            <GoalElement key={goal} goal={goal} />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalList
