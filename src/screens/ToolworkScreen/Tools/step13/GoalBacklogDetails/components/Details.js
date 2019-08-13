// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Goal } from '../../types'
import { screens } from '../../context/ScreenContext'
import styles from '../styles'

type Props = {
  goal: Goal,
  screen: string,
}

class BackloggedGoalDetails extends React.PureComponent<Props> {
  render() {
    const { goal } = this.props
    return (
      <View style={styles.container}>
        <Text>{goal.name}</Text>
      </View>
    )
  }
}

export default BackloggedGoalDetails
