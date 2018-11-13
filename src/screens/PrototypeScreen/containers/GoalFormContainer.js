import { connect }           from 'react-redux'
import GoalForm              from '../components/GoalForm'
import { changeUI }          from '../../../redux/actions/ui.actions'
import { goBack }            from '../../../redux/actions/nav.actions'
import selectors             from '../../../redux/selectors'
import models                from '../forms'
import { withNavigation }    from 'react-navigation'
import { compose, mapProps } from 'recompose'

const mapStateToProps = (state: any) => {
  const stateForScreen = selectors.stateForScreen(state)
  return {
    stateForScreen,
    models
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setScreen: (screen: string) => (params: any) =>
      dispatch(changeUI({ screen, params })),
    back: () => dispatch(goBack())
  }
}

const merge = ({ navigation, stateForScreen, models, setScreen, back }) => {
  const { state: { params: { step, screen } } } = navigation
  const setScreenStatus = setScreen(screen)
  const data = stateForScreen(screen)
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
