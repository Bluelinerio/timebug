import { connect }  from 'react-redux'
import GoalForm     from '../components/GoalForm'
import { changeUI } from '../../../redux/actions/ui.actions'
import { goBack }   from '../../../redux/actions/nav.actions'
import selectors    from '../../../redux/selectors'
import models       from '../forms'

const screen = 'GoalPrototypeScreen'

const mapStateToProps = (state: any) => {
  const screenData = selectors.stateForScreen(state)(screen)
  return {
    data: screenData,
    models
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setScreenStatus: (params: any) => dispatch(changeUI({ screen, params })),
    back: () => dispatch(goBack())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm)
