//@flow
import { connect }  from 'react-redux'
import selectors    from '../../../redux/selectors'
import DisplaySteps from '../components/DisplaySteps'

const DisplayStepsContainer = connect(
  state => ({
    steps: selectors
      .completedFormsChronologically(state)
      .sort((a, b) => a.stepId - b.stepId)
  }),
  null
)(DisplaySteps)

export default DisplayStepsContainer
