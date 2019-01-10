// @flow
import { connect }           from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation }    from 'react-navigation'
import selectors             from '2020_redux/selectors'
import { key }               from '2020_static/tools/DailyTimebugPlanner'
import WeeklyPlanner         from '../components/WeeklyPlanner'
import {
  getActionsData,
  findWeeklyToolValue,
  getIdealWeek,
  getCurrentWeekAndReduce,
  mapWeekData,
}                            from '../utils'

const mapStateToProps = (state: any) => {
  const formData = selectors.formData(state)
  const getDataForStepAndTool = selectors.awardDataForStepAndTool(state)
  return {
    formData,
    getDataForStepAndTool,
  }
}

const merge = (props: any) => {
  const { formData, step, getDataForStepAndTool, tool } = props
  const formDataStep2 = formData[`${step.number}`]
  const dailyToolData = getDataForStepAndTool({
    stepNumber: step.number,
    tool: { key },
  })
  const weeklyToolData = getDataForStepAndTool({
    stepNumber: step.number,
    tool,
  })
  const dailyToolValue = dailyToolData ? dailyToolData.value : []
  const weeklyToolValueForThisWeek = findWeeklyToolValue(weeklyToolData)
  const actionData = getActionsData(formDataStep2)
  const idealWeek = getIdealWeek(formDataStep2)
  const currentWeek = getCurrentWeekAndReduce(dailyToolValue)
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
  mapProps(merge)
)(WeeklyPlanner)
