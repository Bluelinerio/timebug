// @flow
import React from 'react'
import { View } from 'react-native'
import ChartArea from '../containers/ChartAreaContainer'
import styles from '../styles'

type Props = {
  data: any,
  tool: any,
  storeAwardData: (value: any, tool: any) => any,
}

class WeeklyLogScreen extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.container, styles.fullWidth]}>
        <ChartArea {...this.props} />
      </View>
    )
  }
}

export default WeeklyLogScreen
