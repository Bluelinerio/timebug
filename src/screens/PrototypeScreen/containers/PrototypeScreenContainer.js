import { connect }     from 'react-redux'
import PrototypeScreen from '../components/PrototypeScreen'
import {
  goToGoalFormScreen,
  goToGoalProtoScreen
}                      from '../../../redux/actions/nav.actions'

const step = '5'
const screen = 'GoalPrototypeScreen'

const mapDispatchToProps = (dispatch: any) => ({
  goToGoalFormScreen: () => dispatch(goToGoalFormScreen({ step, screen })),
  goToPrototypeGoalScreen: () => dispatch(goToGoalProtoScreen({ step, screen }))
})

export default connect(null, mapDispatchToProps)(PrototypeScreen)
