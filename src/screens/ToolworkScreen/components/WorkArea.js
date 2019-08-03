// @flow
import React      from 'react'
import ToolSwitch from './ToolSwitch'

export type Props = {
  tool: any,
  storeAwardValue: () => any,
  toolData: any,
}

class WorkArea extends React.PureComponent<Props> {
  _storeAward = (value: any, tool?: any) => {
    const { storeAwardValue } = this.props
    const { key } = tool
    storeAwardValue({ element: { value, key, tool } })
  }

  render() {
    const { tool, toolData } = this.props
    return (
      <ToolSwitch
        tool={tool}
        data={toolData}
        storeAwardData={this._storeAward}
      />
    )
  }
}

export default WorkArea
