// @flow
import { connect } from 'react-redux'
import selectors from '../../../redux/selectors'
import GoalListElement from '../components/GoalListElement'
import models from '../forms'

const screen = 'GoalPrototypeScreen'
const step = '5'

type StateProps = {
  model: any,
  data: Array<any>
}

const mapStateToProps = (state: any): StateProps => {
  const screenData = selectors.stateForScreen(state)(screen)
  return {
    data: screenData[step],
    model: models[step]
  }
}

type MergeProps = {
  goals: Array<any>,
  goal: String,
  onSelect: String => any
}

const mergeProps = (stateProps, _, ownProps): MergeProps => {
  const { goal, onSelect } = ownProps
  const { data = [] } = stateProps
  const goals = data.filter(goalData => {
    return goal === goalData['2'].value
  })
  return {
    goals,
    goal,
    onSelect
  }
}

export default connect(mapStateToProps, null, mergeProps)(GoalListElement)
