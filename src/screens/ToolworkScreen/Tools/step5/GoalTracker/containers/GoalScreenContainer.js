// @flow
import { connect }              from 'react-redux'
import { withNavigation }       from 'react-navigation'
import { compose, mapProps }    from 'recompose'
import { FORM_KEYS }            from '2020_forms/forms/goals'
import selectors                from '2020_redux/selectors'
import { stepEnum }             from '2020_services/cms'
import StepDataProvider         from '../../../../HOC/ToolStepDataProvider'
import { getCurrentRouteState } from '2020_utils/currentRouteState'
import GoalScreen               from '../components/GoalScreenComponent'

const mapStateToProps = (state: any) => {
  const navigationState = selectors.navigationState(state)
  return {
    navigationState,
  }
}

const merge = (props: any) => {
  const { navigationState, stepData, ...rest } = props
  const state = getCurrentRouteState(navigationState)
  const { params = {} } = state
  const { payload = {} } = params
  const { goalId = null } = payload
  const formDataStep5 = stepData[stepEnum.STEP_5] || { value: [] }
  const { value } = formDataStep5
  const goal = goalId ? value.find(g => goalId === g._id) : null
  const types = goal ? goal[FORM_KEYS.form_5_areas_of_life].value || null : null
  const type = types ? types[0] : null
  return {
    ...rest,
    goal,
    type,
    goalId,
  }
}

export default compose(
  connect(mapStateToProps),
  withNavigation,
  StepDataProvider,
  mapProps(merge)
)(GoalScreen)
