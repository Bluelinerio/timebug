import { connect }     from 'react-redux'
import PrototypeScreen from '../components/PrototypeScreen'
import {
  goToGoalFormScreen,
  goToGoalProtoScreen
}                      from '../../../redux/actions/nav.actions'
import { debounce }    from '../../../utils/debounce'

const step = '5'
const screen = 'GoalPrototypeScreen'

const mapDispatchToProps = (dispatch: any) => ({
  goToGoalFormScreen: debounce(
    () => dispatch(goToGoalFormScreen({ step, screen })),
    250
  ),
  goToPrototypeGoalScreen: debounce(
    () => dispatch(goToGoalProtoScreen({ step, screen })),
    250
  )
})

export default connect(null, mapDispatchToProps)(PrototypeScreen)
