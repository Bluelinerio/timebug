// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Goal } from '../../../step6/GoalsLog/types'

type Props = {
  goal: Goal,
}

class BackloggedGoalDetails extends React.PureComponent<Props> {
  render() {
    return (
      <View>
        <Text>Backlogged</Text>
      </View>
    )
  }
}

export default BackloggedGoalDetails
