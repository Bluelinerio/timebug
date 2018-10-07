import { connect }       from 'react-redux'
import selectors         from '../../../redux/selectors'
import GoalListComponent from '../components/GoalListComponent'

const mapStateToProps = (state: any) => {
  const step = selectors
    .sortedSteps(state)
    .find(step => `${step.number}` === `${5}`)
  return {
    step
  }
}

export default connect(mapStateToProps)(GoalListComponent)
