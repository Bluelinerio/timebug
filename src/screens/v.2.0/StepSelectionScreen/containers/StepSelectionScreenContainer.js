import { connect } from 'react-redux'
import selectors from '../../../../redux/selectors'
import { goToPrototypeWorkbookScreen } from '../../../../redux/actions/nav.actions'
import StepSelectionScreen from './../components/StepSelectionScreen'

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  return {
    steps
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  goToForm: (params: any) => dispatch(goToPrototypeWorkbookScreen(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepSelectionScreen)