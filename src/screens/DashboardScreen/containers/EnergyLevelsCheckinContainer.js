// @flow

import React                            from 'react'
import { compose, mapProps }            from 'recompose'
import moment                           from 'moment'
import { connect }                      from 'react-redux'
import toolDataProvider                 from '2020_HOC/ToolDataProvider'
import CheckinComponent                 from '../components/CheckinComponent'
import type { Props as ComponentProps } from '../components/CheckinComponent'
import { goToTool }                     from '2020_redux/actions/nav.actions'
import type { GoToToolParams }          from '2020_redux/actions/nav.actions'
import { DATE_FORMAT }                  from '2020_constants/constants'
import { FORM_KEYS, CHILDREN_KEYS }     from '2020_static/tools/EnergyLevelsTracker'
import { stepEnum }                     from '2020_services/cms'
import type { Step }                    from '2020_services/cms'
import selectors                        from '2020_redux/selectors'

type Props = {
  tool: any,
  toolData: any,
  goToTool: () => void,
  step: Step,
}

type Data = {
  physicalEnergy: Array<number>,
  emotionalEnergy: Array<number>,
  spiritualEnergy: Array<number>,
}

type Values = {
  physical: number,
  emotional: number,
  spiritual: number,
}

const mapKeysToText = (key: string) => {
  switch (key) {
  case 'physical':
    return 'physical energy'
  case 'emotional':
    return 'emotional energy'
  case 'spiritual':
    return 'spiritual energy'
  default:
    return ''
  }
}

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  const step = steps[stepEnum.STEP_8]
  return {
    step,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const filterOfThisWeek = (data: Array<any>) => {
  const { day } = data
  const then = moment(day, DATE_FORMAT)
  const now = moment()
  const belongs = now.isSame(then, 'isoWeek')
  return belongs
}

const mapValues = (data: { value: Array<any> }) => data.value[0]

const getValues = (data: any) => {
  const physical =
    data[CHILDREN_KEYS.energy_levels_tracker_tool_energy_levels.PhysicalEnergy]
      .value
  const emotional =
    data[CHILDREN_KEYS.energy_levels_tracker_tool_energy_levels.EmotionalEnergy]
      .value
  const spiritual =
    data[CHILDREN_KEYS.energy_levels_tracker_tool_energy_levels.SpiritualEnergy]
      .value
  return {
    physical,
    emotional,
    spiritual,
  }
}

const extractValues = (data: Array<any>): Data => {
  const initialData = {
    physicalEnergy: [],
    emotionalEnergy: [],
    spiritualEnergy: [],
  }

  const result: Data = data.reduce((res, curr) => {
    const parentFormValue =
      curr[FORM_KEYS.energy_levels_tracker_tool_energy_levels].value
    const { physical, spiritual, emotional } = getValues(parentFormValue)
    return {
      physicalEnergy: [...res.physicalEnergy, physical],
      emotionalEnergy: [...res.emotionalEnergy, emotional],
      spiritualEnergy: [...res.spiritualEnergy, spiritual],
    }
  }, initialData)

  return result
}

const reduceValues = (data: Data): Values => {
  const { physicalEnergy, emotionalEnergy, spiritualEnergy } = data
  const physical =
    physicalEnergy.length > 0
      ? physicalEnergy.reduce(
        (res, curr) => (res === 0 ? curr : res + curr),
        0
      ) / physicalEnergy.length
      : 1

  const emotional =
    emotionalEnergy.length > 0
      ? emotionalEnergy.reduce(
        (res, curr) => (res === 0 ? curr : res + curr),
        0
      ) / emotionalEnergy.length
      : 1

  const spiritual =
    spiritualEnergy.length > 0
      ? spiritualEnergy.reduce(
        (res, curr) => (res === 0 ? curr : res + curr),
        0
      ) / spiritualEnergy.length
      : 1

  return {
    physical,
    emotional,
    spiritual,
  }
}

const merge = (props: Props): ComponentProps => {
  const { tool, toolData, goToTool, step } = props

  const value = toolData ? toolData.value : []
  const thisWeeksData = value.filter(filterOfThisWeek)

  const { icon } = step

  const onLinkPress = goToTool({ tool })

  if (thisWeeksData.length === 0)
    return {
      title: 'Your energy Levels',
      link: 'How are you feeling now?',
      onLinkPress,
      fallback: true,
      source: icon && icon.uri,
    }
  const values: Values = compose(reduceValues, extractValues)(
    thisWeeksData.map(mapValues)
  )

  return {
    ...values,
    title: 'Your energy Levels',
    link: 'How are you feeling now?',
    onLinkPress,
    fallback: false,
    source: icon && icon.uri,
  }
}

type ContainerProps = {
  title: string,
  link: string,
  onLinkPress: () => void,
  fallback: boolean,
  physical: number,
  emotional: number,
  spiritual: number,
  source: string,
}

type ContainerState = {
  text: string,
}

class EnergyLevelsCheckinContainer extends React.Component<
  ContainerProps,
  ContainerState
> {
  state = { text: '' }

  recreateText = () => {
    const { physical, emotional, spiritual, fallback } = this.props

    if (fallback) {
      this.setState({
        text: 'Use the My Energy Levels tool to get helpful data and feedback!',
      })
      return
    }
    const values = {
      physical,
      emotional,
      spiritual,
    }

    const keys = Object.keys(values)
    const random = Math.floor(Math.random() * keys.length)

    const randomKey = keys[random]
    const val = values[randomKey]

    const keyName = mapKeysToText(randomKey)

    const text = `This week, your average ${keyName} is at ${val} on a scale of 1-10`
    this.setState({ text })
  }

  componentDidMount() {
    this.recreateText()
  }

  componentDidUpdate(prevProps) {
    const { physical, emotional, spiritual, fallback } = this.props
    const {
      physical: oldPhysical,
      emotional: oldEmotional,
      spiritual: oldSpiritual,
      fallback: oldFallback,
    } = prevProps
    if (
      fallback !== oldFallback ||
      physical !== oldPhysical ||
      emotional !== oldEmotional ||
      spiritual !== oldSpiritual
    )
      this.recreateText()
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
  toolDataProvider,
  mapProps(merge)
)(EnergyLevelsCheckinContainer)
