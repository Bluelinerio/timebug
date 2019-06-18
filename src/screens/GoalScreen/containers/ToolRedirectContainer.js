//@flow
import { connect }             from 'react-redux'
import { compose, mapProps }   from 'recompose'
import { withNavigation }      from 'react-navigation'
import { goToTool }            from '2020_redux/actions/nav.actions'
import type { GoToToolParams } from '2020_redux/actions/nav.actions'
import selectors               from '2020_redux/selectors'
import tool                    from '2020_static/tools/GoalTracker'
import ToolRedirect            from '../components/ToolRedirect'
import mapNavigationDispatch   from '2020_HOC/NavigationServiceHOC'

const STEP_NUMBER = '5'

type ToolButtonDispatchProps = {
  goToTool: GoToToolParams => any,
}

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  return {
    steps,
  }
}

const mapDispatchToProps = (dispatch: any): ToolButtonDispatchProps => ({
  goToTool: (params: GoToToolParams) => dispatch(goToTool(params)),
})

const merge = (props: any) => {
  const { steps, goToTool } = props
  const step = steps[STEP_NUMBER]
  return {
    onPress: goToTool,
    tool,
    step,
  }
}

export default compose(
  connect(mapStateToProps),
  mapNavigationDispatch(mapDispatchToProps),
  mapProps(merge),
  withNavigation
)(ToolRedirect)
