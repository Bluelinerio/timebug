// @flow
import { connect }                      from 'react-redux'
import { compose, mapProps }            from 'recompose'
import selectors                        from '2020_redux/selectors'
import { goToV2WorkbookScreen }         from '2020_redux/actions/nav.actions'
import type { GoToWorkbookParams }      from '2020_redux/actions/nav.actions'
import { deleteInnerFormValue }         from '2020_redux/actions/formData.actions'
import type { DeleteInnerValuePayload } from '2020_redux/actions/formData.actions'
import { FORM_KEYS }                    from '2020_forms/forms/goals'
import { stepEnum }                     from '2020_services/cms'
import mapNavigationDispatch            from '2020_HOC/NavigationServiceHOC'
import { translateCMSPhaseToStandard }  from '2020_services/cms'
import type { Goal }                    from '../types'
import ReopenButton                     from '../components/ReopenGoalButton'

type OwnProps = {
  goal: Goal,
  onBack: () => void,
}

type StateProps = {
  steps: Array<any>,
}

type NavigationDispatchProps = {
  reopenGoalScreen: GoToWorkbookParams => void,
}

type DispatchProps = {
  deleteElement: DeleteFormValuePayload => any,
}

type Props = OwnProps | StateProps | DispatchProps | NavigationDispatchProps

const mapStateToProps = (state: any): StateProps => {
  const steps = selectors.steps(state)
  return {
    steps,
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  deleteElement: (payload: DeleteInnerValuePayload) =>
    dispatch(deleteInnerFormValue(payload)),
})

const mapNavigationDispatchToProps = (
  dispatch: any
): NavigationDispatchProps => ({
  reopenGoalScreen: (payload: GoToWorkbookParams) =>
    dispatch(goToV2WorkbookScreen(payload)),
})

const merge = (props: Props) => {
  const { steps, reopenGoalScreen, goal, deleteElement, onBack } = props

  const step = steps[stepEnum.STEP_5]
  const phase = translateCMSPhaseToStandard(step.type)

  const reopen = () => {
    onBack()
    deleteElement({
      valueId: goal.valueId,
      stepId: stepEnum.STEP_11,
      innerElements: goal.identificationPayload,
    })
    reopenGoalScreen({
      step,
      phase,
      valuesForForm: {
        [FORM_KEYS.form_5_recent_life_goals]: {
          value: goal.name,
        },
      },
      section: 'form',
    })
  }

  return {
    reopen,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapNavigationDispatch(mapNavigationDispatchToProps),
  mapProps(merge)
)(ReopenButton)
