import { connect }     from 'react-redux'
import PrototypeScreen from '../components/PrototypeScreen'
import {
  goToGoalFormScreen,
  goToGoalProtoScreen
}                      from '../../../redux/actions/nav.actions'

const mapDispatchToProps = (dispatch: any) => ({
  goToGoalFormScreen: () => dispatch(goToGoalFormScreen()),
  goToPrototypeGoalScreen: () => dispatch(goToGoalProtoScreen())
})

export default connect(null, mapDispatchToProps)(PrototypeScreen)
