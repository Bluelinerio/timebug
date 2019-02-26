// @flow
import { connect }              from 'react-redux'
import { withNavigation }       from 'react-navigation'
import { compose, mapProps }    from 'recompose'
import { FORM_KEYS }            from '2020_forms/forms/goals'
import selectors                from '2020_redux/selectors'
import { getCurrentRouteState } from '2020_utils/currentRouteState'
import GoalScreen               from '../components/GoalScreenComponent'

const mapStateToProps = (state: any) => {
  const formData = selectors.formData(state)
  const navigationState = selectors.navigationState(state)
  return {
    formData,
    navigationState,
  }
}

const merge = (props: any) => {
  const { formData, navigationState, step, ...rest } = props
  const state = getCurrentRouteState(navigationState)
  const { params = {} } = state
  const { payload = {} } = params
  const { goalId = null } = payload
  const formDataStep5 = formData[`${step.number}`] || { value: [] }
  const { value } = formDataStep5
  const goal = goalId ? value.find(g => goalId === g._id) : null
  const types = goal ? goal[FORM_KEYS.form_5_areas_of_life].value || null : null
  const type = types ? types[0] : null
  return {
    ...rest,
    step,
    goal,
    type,
    goalId,
  }
}

export default compose(
  connect(mapStateToProps),
  withNavigation,
  mapProps(merge)
)(GoalScreen)
