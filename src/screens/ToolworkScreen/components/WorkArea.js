import React      from 'react'
import ToolSwitch from './ToolSwitch'

export type Props = {
  step: any,
  tool: any,
  storeAwardValue: () => any,
  toolData: any,
}

class WorkArea extends React.PureComponent<Props> {
  _storeAward = (value: any, tool?: any) => {
    const { storeAwardValue, step } = this.props
    const { key } = tool
    storeAwardValue({ stepId: `${step.number}`, element: { value, key, tool } })
  }

  render() {
    const { step, tool, toolData } = this.props
    return (
      <ToolSwitch
        step={step}
        tool={tool}
        data={toolData}
        storeAwardData={this._storeAward}
      />
    )
  }
}

export default WorkArea
