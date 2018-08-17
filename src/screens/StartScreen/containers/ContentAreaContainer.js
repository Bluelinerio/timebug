//@flow
import invariant   from 'invariant'
import { connect } from 'react-redux'
import ContentArea from '../components/ContentArea'
import selectors   from '../../../redux/selectors'

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  const stepColors = selectors.statefullStepColors(state)

  if (__DEV__) {
    invariant(
      stepColors,
      `the colors for completed-uncompleted steps is not defined`
    )
  }

  return {
    steps,
    stepColors
  }
}

export default connect(mapStateToProps)(ContentArea)
