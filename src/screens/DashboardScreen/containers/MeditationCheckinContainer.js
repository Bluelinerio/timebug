// @flow

import React                            from 'react'
import { compose, mapProps }            from 'recompose'
import moment                           from 'moment'
import { connect }                      from 'react-redux'
import toolDataProvider                 from '2020_HOC/ToolDataProvider'
import selectors                        from '2020_redux/selectors'
import { goToTool }                     from '2020_redux/actions/nav.actions'
import type { GoToToolParams }          from '2020_redux/actions/nav.actions'
import { stepEnum }                     from '2020_services/cms'
import type { Step }                    from '2020_services/cms'
import { DATE_FORMAT }                  from '2020_constants/constants'
import { key as toolKey }               from '2020_static/tools/DailyMeditation'
import CheckinComponent                 from '../components/CheckinComponent'
import type { Props as ComponentProps } from '../components/CheckinComponent'

type Props = {
  tool: any,
  toolData: any,
  step: Step,
  goToTool: GoToToolParams => () => void,
}

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  const step = steps[stepEnum.STEP_1]
  return {
    step,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const findDataForToday = (
  data: { value: Array<{ value: any, date: string }> } | null
) => {
  if (!data || !data.value) return { value: false }
  const { value } = data
  const today = moment().format(DATE_FORMAT)
  const valueForToday = value.find(val => val.date === today) || {
    value: false,
  }

  return valueForToday
}

const merge = (props: Props): ComponentProps => {
  const { tool, step, toolData, goToTool } = props
  const { value } = findDataForToday(toolData)

  const { icon } = step

  const source = icon && icon.uri

  const title = 'Meditation'
  const text = value
    ? `You have completed your daily meditation, congratulations!`
    : `You haven't meditated today, would you like to do so now?`
  const link = value ? null : `Start meditating`
  const onLinkPress = value ? null : goToTool({ tool })

  return {
    title,
    text,
    link,
    onLinkPress,
    source,
  }
}

type ContainerProps = {
  onLinkPress: () => void,
  link: string,
  title: string,
  text: string,
  source: string,
}

class GoalsCheckinContainer extends React.PureComponent<ContainerProps> {
  onLinkPress = () => {
    const { onLinkPress } = this.props
    onLinkPress()
  }

  render() {
    const { link, title, text, source } = this.props
    return (
      <CheckinComponent
        link={link}
        title={title}
        text={text}
        onLinkPress={this.onLinkPress}
        source={source}
      />
    )
  }
}

export const key = toolKey

export default compose(
  toolDataProvider,
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(GoalsCheckinContainer)