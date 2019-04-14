// @flow
import React from 'react'
import { View, Text } from 'react-native'
import ChartComponent from './ChartComponent'

type Props = {}

class WeeklyLogScreen extends React.PureComponent<Props> {
  render() {
    return (
      <View>
        <ChartComponent />
      </View>
    )
  }
}

export default WeeklyLogScreen
