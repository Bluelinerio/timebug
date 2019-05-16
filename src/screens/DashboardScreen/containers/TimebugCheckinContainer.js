// @flow

import React                            from 'react'
import { compose, mapProps }            from 'recompose'
import { connect }                      from 'react-redux'
import selectors                        from '2020_redux/selectors'
import { key }                          from '2020_static/tools/WeeklyTimebugPlanner'
import toolStepDataProvider             from '2020_HOC/ToolStepDataProvider'
import CheckinComponent                 from '../components/CheckinComponent'
import type { Props as ComponentProps } from '../components/CheckinComponent'
import type { GoToToolParams }          from '2020_redux/actions/nav.actions'
import { goToTool }                     from '2020_redux/actions/nav.actions'
import { stepEnum }                     from '2020_services/cms'
import {
  findWeeklyToolValue,
  getIdealWeek,
  getCurrentWeekAndReduce,
}                                       from '2020_utils/timebugHelpers'

type Props = {
  tool: any,
  toolData: any,
  stepData: any,
  goToTool: () => void,
  step: any,
}

const mapStateToProps = (state: any) => {
  const getDataForStepAndTool = selectors.awardDataForTool(state)
  const steps = selectors.steps(state)
  const step = steps[stepEnum.STEP_2]
  return {
    getDataForStepAndTool,
    step,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const merge = (props: Props): ComponentProps => {
  const { tool, stepData, goToTool, getDataForStepAndTool, step } = props

  const dailyToolData = getDataForStepAndTool({
    tool,
  })
  const weeklyToolData = getDataForStepAndTool({
    tool: { key },
  })

  const { icon } = step
  const source = icon && icon.uri

  const formDataStep2 = stepData[stepEnum.STEP_2]
    ? stepData[stepEnum.STEP_2]
    : {}

  const dailyToolValue = dailyToolData ? dailyToolData.value : []
  const dailyToolTimeStamp = dailyToolData ? dailyToolData.timestamp : null

  const weeklyToolValueForThisWeek = findWeeklyToolValue(weeklyToolData)
  const idealWeek = getIdealWeek(formDataStep2)
  const idealTimestamp = formDataStep2.timeStamp
  const currentWeek = getCurrentWeekAndReduce(
    dailyToolValue,
    dailyToolTimeStamp
  )

  const weeklyToolValue = weeklyToolValueForThisWeek
    ? weeklyToolValueForThisWeek.value
    : null

  const comparableToolValue = weeklyToolValue ? weeklyToolValue : currentWeek
  const timestamp = weeklyToolValue
    ? weeklyToolData.timestamp
    : dailyToolTimeStamp

  const link = 'Log your time'

  const onLinkPress = goToTool({ tool })

  return {
    title: 'Timebug',
    link,
    onLinkPress,
    timestamp,
    idealTimestamp,
    idealWeek,
    value: comparableToolValue,
    source,
  }
}

type ContainerProps = {
  title: string,
  link: string,
  timestamp: number,
  idealTimestamp: number,
  onLinkPress: () => void,
  value: any,
  idealWeek: any,
  source: string,
}

type State = {
  text: string,
}

class TimebugCheckinContainer extends React.Component<ContainerProps, State> {
  state = { text: '' }

  shouldComponentUpdate(nextProps, nextState) {
    const { timestamp, idealTimestamp } = this.props
    const { timestamp: nextTimestamp, idealTimestamp: nextIdeal } = nextProps
    const { text } = this.state
    const { text: nextText } = nextState
    if (text !== nextText) return true
    if (timestamp !== nextTimestamp) return true
    if (idealTimestamp !== nextIdeal) return true
    return false
  }

  setText = () => {
    const { idealWeek, value } = this.props
    if (!idealWeek) {
      const text = `It appears we do not have enough data yet, use the timebug tool to track your time and enhance your productivity!`
      this.setState({ text })
      return
    }
    const randomIndex = Math.floor(
      Math.random() * Object.keys(idealWeek).length
    )
    const randomKey = Object.keys(idealWeek)[randomIndex]

    const idealValue = idealWeek[randomKey].value
    const keyText = idealWeek[randomKey].text
    const currentValue = value[randomKey].value

    const text = `This week you've spent a total of ${currentValue} hours in ${keyText}. You've set a goal of ${idealValue} hours in your ideal week`
    this.setState({ text })
  }

  componentDidUpdate(prevProps) {
    const { timestamp, idealTimestamp } = this.props
    const { timestamp: oldTimestamp, idealTimestamp: oldIdeal } = prevProps
    if (timestamp !== oldTimestamp || idealTimestamp !== oldIdeal)
      this.setText()
  }

  componentDidMount() {
    this.setText()
  }

  onLinkPress = () => {
    const { onLinkPress } = this.props
    onLinkPress()
  }

  render() {
    const { title, link, source } = this.props
    const { text } = this.state
    return (
      <CheckinComponent
        title={title}
        link={link}
        onLinkPress={this.onLinkPress}
        text={text}
        source={source}
      />
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  toolStepDataProvider,
  mapProps(merge)
)(TimebugCheckinContainer)
