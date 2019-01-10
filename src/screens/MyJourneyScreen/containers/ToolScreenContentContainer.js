//@flow
import invariant           from 'invariant'
import { connect }         from 'react-redux'
import { compose }         from 'recompose'
import ToolScreenContent   from '../components/ToolScreenContent'
import selectors           from '../../../redux/selectors'
import { isStepCompleted } from '../../../services/cms'

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  const stepColors = selectors.statefullStepColors(state)
  const tools = selectors.getAllTools()
  const user = selectors.user(state)

  if (__DEV__) {
    invariant(
      stepColors,
      `the colors for completed-uncompleted steps is not defined`
    )
  }

  const unlockedTools = Object.values(steps)
    .filter(step => user && isStepCompleted(step.number, user))
    .reduce((allTools, step) => {
      const { number } = step
      const toolsForStep = tools[`${number}`]
      if (toolsForStep) return [...allTools, ...toolsForStep]
      return allTools
    }, [])

  return {
    steps,
    stepColors,
    tools: unlockedTools,
  }
}

export default compose(connect(mapStateToProps))(ToolScreenContent)
