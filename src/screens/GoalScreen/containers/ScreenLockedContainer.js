import { connect }                     from 'react-redux'
import selectors                       from '2020_redux/selectors'
import { goToV2WorkbookScreen }        from '2020_redux/actions/nav.actions'
import { translateCMSPhaseToStandard } from '2020_services/cms'
import ScreenLockedComponent           from '../components/ScreenLockedComponent'

const mapStateToProps = (state: any) => {
  const step = selectors
    .sortedSteps(state)
    .find(step => `${step.number}` === `${5}`)
  return {
    step,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onPress: step =>
    dispatch(
      goToV2WorkbookScreen({
        step,
        phase: translateCMSPhaseToStandard(step.type),
      })
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  ScreenLockedComponent
)
