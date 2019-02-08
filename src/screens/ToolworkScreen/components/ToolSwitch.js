import React           from 'react'
import { TOOL_KEYS }   from '2020_static/tools'
import DailyPlanner    from '../Tools/step2/DailyPlanner'
import WeeklyPlanner   from '../Tools/step2/WeeklyPlanner'
import DailyMeditation from '../Tools/step1/MeditationTool'
import BoardOfAdvisors from '../Tools/step4/BoardOfAdvisors'

type Props = {
  step: any,
  tool: any,
  data: any,
  storeAwardData: (value: any, tool: any) => any,
}

const ToolSwitch = (props: Props) => {
  const { tool: { key } } = props
  switch (key) {
  case TOOL_KEYS.DailyTimebugPlannerKey:
    return <DailyPlanner {...props} />
  case TOOL_KEYS.WeeklyTimebugPlannerKey:
    return <WeeklyPlanner {...props} />
  case TOOL_KEYS.DailyMeditationKey:
    return <DailyMeditation {...props} />
  case TOOL_KEYS.BoardOfAdvisorsKey:
    return <BoardOfAdvisors {...props} />
  default:
    return null
  }
}

class ToolSwitchContainer extends React.PureComponent<Props> {
  render() {
    return <ToolSwitch {...this.props} />
  }
}

export default ToolSwitchContainer
