// @flow
import React from 'react'
import ChartArea from '../containers/ChartAreaContainer'

type Props = {
  data: any,
  tool: any,
  storeAwardData: (value: any, tool: any) => any,
}

class WeeklyLogScreen extends React.PureComponent<Props> {
  render() {
    return <ChartArea {...this.props} />
  }
}

export default WeeklyLogScreen
