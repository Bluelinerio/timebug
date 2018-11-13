// @flow
import { connect }           from 'react-redux'
import selectors             from '../../../redux/selectors'
import GoalListElement       from '../components/GoalListElement'
import models                from '../../../forms/custom/forms'
import { withNavigation }    from 'react-navigation'
import { compose, mapProps } from 'recompose'

type StateProps = {
  model: any,
  data: Array<any>
}

const mapStateToProps = (state: any): StateProps => {
  const stateForScreen = selectors.stateForScreen(state)
  return {
    stateForScreen
  }
}

type MergeProps = {
  goals: Array<any>,
  goal: String,
  onSelect: String => any
}

const mergeProps = (props): MergeProps => {
  const { goal, onSelect, stateForScreen } = props
  const { navigation: { state: { params: { step, screen } } } } = props
  const screenData = stateForScreen(screen)
  const data = screenData[step] || []
  const goals = data.filter(goalData => {
    return goal === goalData['2'].value
  })
  return {
    goals,
    goal,
    onSelect,
    model: models[step]
  }
}

export default compose(
  connect(mapStateToProps),
  withNavigation,
  mapProps(mergeProps)
)(GoalListElement)
