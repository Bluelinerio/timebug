// @flow
import { connect }       from 'react-redux'
import selectors         from '../../../redux/selectors'
import GoalsFromTypeList from '../components/GoalsFromTypeList'
import models            from '../forms'

const screen = 'GoalPrototypeScreen'
const step = '5'

const mapStateToProps = (state: any) => {
  const screenData = selectors.stateForScreen(state)(screen)
  return {
    data: screenData[step],
    model: models[step]
  }
}

const mergeProps = (stateProps, _, ownProps) => {
  const { goal, onSelect } = ownProps
  const { data = [], model } = stateProps
  const goals = data.filter(goalData => {
    return goal === goalData['2'].value
  })
  return {
    goals,
    goal,
    model,
    onSelect
  }
}

export default connect(mapStateToProps, null, mergeProps)(GoalsFromTypeList)
