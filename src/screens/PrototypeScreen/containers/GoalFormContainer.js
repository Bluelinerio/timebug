import { connect }           from 'react-redux'
import GoalForm              from '../components/GoalForm'
import { changeUI }          from '../../../redux/actions/ui.actions'
import { goBack }            from '../../../redux/actions/nav.actions'
import selectors             from '../../../redux/selectors'
import models                from '../forms'
import { withNavigation }    from 'react-navigation'
import { compose, mapProps } from 'recompose'

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

const merge = ({ navigation, data, models, setScreenStatus, back }) => {
  const { state: { params: { step } } } = navigation
  return {
    data,
    models,
    setScreenStatus,
    back,
    step
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  mapProps(merge)
)(GoalForm)
