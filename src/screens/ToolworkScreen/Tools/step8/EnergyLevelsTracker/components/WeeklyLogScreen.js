// @flow
import React from 'react'
import ChartArea from '../containers/ChartAreaContainer'
import type { ToolProps } from '../../../types'

type Props = ToolProps & {
  setAwardData: undefined,
  tool: undefined,
}

class WeeklyLogScreen extends React.PureComponent<Props> {
  render() {
    return <ChartArea {...this.props} />
  }
}

export default WeeklyLogScreen
