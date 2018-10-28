import { connect } from 'react-redux'
import PrototypeScreen from '../components/PrototypeScreen'
import { goToGoalFormScreen } from '../../../redux/actions/nav.actions'

const mapDispatchToProps = (dispatch: any) => ({
  goToGoalFormScreen: () => dispatch(goToGoalFormScreen())
})

export default connect(null, mapDispatchToProps)(PrototypeScreen)
