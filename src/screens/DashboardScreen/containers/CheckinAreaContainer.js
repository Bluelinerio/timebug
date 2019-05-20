// @flow

import { connect }           from 'react-redux'
import { mapProps, compose } from 'recompose'
import CheckinAreaComponent  from '../components/CheckinAreaComponent'
import type {
  Props as ComponentProps,
}                            from '../components/CheckinAreaComponent'
import selectors             from '2020_redux/selectors'
import { getUnlockedTools }  from '2020_services/tools'
import { TOOL_KEYS }         from '2020_static/tools'

type Props = {
  tools: Array<any>
}

const mapStateToProps = (state: any) => {
  const completedSteps = selectors.getCompletedSteps(state)

  const tools = getUnlockedTools(completedSteps)

  return {
    tools,
  }
}

const merge = (props: Props): ComponentProps => {
  const { tools } = props

  const energyLevelsTool = tools.find(({key}) => key === TOOL_KEYS.EnergyLevelsTrackerKey)

  const goalsTool = tools.find(({key}) => key === TOOL_KEYS.GoalTrackerKey)

  const timebugTool = tools.find(({key}) => key === TOOL_KEYS.DailyTimebugPlannerKey)

  return {
    energyLevelsTool,
    goalsTool,
    timebugTool,
    tools,
  }
}

export default compose(connect(mapStateToProps), mapProps(merge))(CheckinAreaComponent)
