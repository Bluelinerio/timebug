//@flow
import invariant            from 'invariant'
import { connect }          from 'react-redux'
import { compose }          from 'recompose'
import selectors            from '2020_redux/selectors'
import { getUnlockedTools } from '2020_services/tools'
import ToolScreenContent    from '../components/ToolScreenContent'

// TODO: Work from here on, remove steps and any instance of these from every level
const mapStateToProps = (state: any) => {
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

export default compose(connect(mapStateToProps))(ToolScreenContent)
