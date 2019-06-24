//@flow
import invariant                         from 'invariant'
import { connect }                       from 'react-redux'
import { connectContext }                from 'react-connect-context'
import { compose, mapProps }             from 'recompose'
import selectors                         from '2020_redux/selectors'
import { getUnlockedTools, getAllTools } from '2020_services/tools'
import { PhaseConsumer }                 from '../context/PhaseContext'
import type { ContextState }             from '../context/PhaseContext'
import ToolScreenContent                 from '../components/ToolScreenContent'

type MappedProps = {
  steps: Array<any>,
  stepColors: any,
  tools: Array<any>,
  lockedTools: Array<any>,
}

const mapStateToProps = (state: any): MappedProps => {
  const steps = selectors.steps(state)
  const stepColors = selectors.statefullStepColors(state)

  if (__DEV__) {
    invariant(
      stepColors,
      `the colors for completed-uncompleted steps is not defined`
    )
  }

  const completedSteps = selectors.getCompletedSteps(state)

  const tools = getUnlockedTools(completedSteps)

  return {
    steps,
    stepColors,
    tools,
  }
}

const merge = (props: MappedProps & ContextState) => {
  const { steps, stepColors, tools: allUnlockedTools, selectedPhase } = props

  const tools = allUnlockedTools.filter(tool => tool.phase === selectedPhase)

  const allTools = getAllTools()

  const lockedTools = allTools
    .filter(tool => tool.phase === selectedPhase)
    .filter(tool => !tools.find(t => t.key === tool.key))

  return {
    steps,
    stepColors,
    tools,
    lockedTools,
  }
}

export default compose(
  connectContext(PhaseConsumer),
  connect(mapStateToProps),
  mapProps(merge)
)(ToolScreenContent)
