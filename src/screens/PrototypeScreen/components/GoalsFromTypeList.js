// @flow
import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

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
    const { goal, goals } = this.props
    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.goalScreenTitle}>{goal}</Text>
        </View>
        <View style={styles.container}>
          {Object.values(goals).map(goal => (
            <Text key={goal['1'].value}>{goal['1'].value}</Text>
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default GoalsFromTypeList
