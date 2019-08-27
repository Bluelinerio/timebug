// @flow
import React                 from 'react'
import { TOOL_KEYS }         from '2020_static/tools'
import DailyPlanner          from '../Tools/step2/DailyPlanner'
import WeeklyPlanner         from '../Tools/step2/WeeklyPlanner'
import DailyMeditation       from '../Tools/step1/MeditationTool'
import BoardOfAdvisors       from '../Tools/step4/BoardOfAdvisors'
import GoalTracker           from '../Tools/step5/GoalTracker'
import GoalsLog              from '../Tools/step6/GoalsLog'
import EnergyLevelsTracker   from '../Tools/step8/EnergyLevelsTracker'
import CompletedGoalsTracker from '../Tools/step11/CompletedGoalTracker'
import CareerGoalsTracker    from '../Tools/step13/index'
import Dummy                 from '../Tools/dummyTool'

type Props = {
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
  case TOOL_KEYS.GoalTrackerKey:
    return <GoalTracker {...props} />
  case TOOL_KEYS.GoalsLogKey:
    return <GoalsLog {...props} />
  case TOOL_KEYS.EnergyLevelsTrackerKey:
    return <EnergyLevelsTracker {...props} />
  case TOOL_KEYS.CompletedGoalsTrackerKey:
    return <CompletedGoalsTracker {...props} />
  case TOOL_KEYS.CareerGoalsTrackerKey:
    return <CareerGoalsTracker {...props} />
  case TOOL_KEYS.DummyKey:
    return <Dummy {...props} />
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
