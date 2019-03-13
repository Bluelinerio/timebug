// @flow
import { connect }           from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation }    from 'react-navigation'
import selectors             from '2020_redux/selectors'
import { key }               from '2020_static/tools/DailyTimebugPlanner'
import { stepEnum }          from '2020_services/cms'
import StepDataProvider      from '../../../../HOC/ToolStepDataProvider'
import WeeklyPlanner         from '../components/WeeklyPlanner'
import {
  getActionsData,
  findWeeklyToolValue,
  getIdealWeek,
  getCurrentWeekAndReduce,
  mapWeekData,
}                            from '../utils'

const mapStateToProps = (state: any) => {
  const getDataForStepAndTool = selectors.awardDataForTool(state)
  return {
    getDataForStepAndTool,
  }
}

const merge = (props: any) => {
  const { getDataForStepAndTool, stepData, tool } = props
  const formDataStep2 = stepData[stepEnum.STEP_2]
  const dailyToolData = getDataForStepAndTool({
    tool: { key },
  })
  const weeklyToolData = getDataForStepAndTool({
    tool,
  })
  const dailyToolValue = dailyToolData ? dailyToolData.value : []
  const dailyToolTimeStamp = dailyToolData ? dailyToolData.timestamp : null
  const weeklyToolValueForThisWeek = findWeeklyToolValue(weeklyToolData)
  const actionData = getActionsData(formDataStep2)
  const idealWeek = getIdealWeek(formDataStep2)
  const currentWeek = getCurrentWeekAndReduce(
    dailyToolValue,
    dailyToolTimeStamp
  )
  const weekData = mapWeekData(idealWeek, currentWeek)
  return {
    ...props,
    weekData,
    actionData,
    overrideWeekData: weeklyToolValueForThisWeek,
    _currentWeek: currentWeek,
    allWeeksData: weeklyToolData ? weeklyToolData.value : [],
  }
}

export default compose(
  connect(mapStateToProps),
  withNavigation,
  StepDataProvider,
  mapProps(merge)
)(WeeklyPlanner)
