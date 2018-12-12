import { connect }           from 'react-redux'
import WorkbookForm          from '../components/WorkbookForm'
import { changeUI }          from '../../../../redux/actions/ui.actions'
import selectors             from '../../../../redux/selectors'
import models                from '../../../../forms/custom/forms'
import { compose, mapProps } from 'recompose'

const mapStateToProps = (state: any) => {
  const stateForScreen = selectors.stateForScreen(state)
  return {
    stateForScreen,
    models,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setScreen: (screen: string) => (params: any) =>
      dispatch(changeUI({ screen, params })),
  }
}

const merge = ({
  screen = 'someRandomScreen',
  stateForScreen,
  setScreen,
  stepNumber,
  ...props
}) => {
  const setScreenStatus = setScreen(screen)
  const data = stateForScreen(screen)
  const model = models[stepNumber]
  const formData = data[stepNumber]
  return {
    ...props,
    data: formData,
    model,
    setScreenStatus,
    stepNumber,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(WorkbookForm)
