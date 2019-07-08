// @flow
import { connect }                     from 'react-redux'
import { compose, mapProps }           from 'recompose'
import selectors                       from '2020_redux/selectors'
import { goToV2WorkbookScreen }        from '2020_redux/actions/nav.actions'
import type { GoToWorkbookParams }     from '2020_redux/actions/nav.actions'
import { FORM_KEYS }                   from '2020_forms/forms/goals'
import { stepEnum }                    from '2020_services/cms'
import mapNavigationDispatch           from '2020_HOC/NavigationServiceHOC'
import { translateCMSPhaseToStandard } from '2020_services/cms'
import type { Goal }                   from '../types'
import ReopenButton                    from '../components/ReopenGoalButton'

type OwnProps = {
  goal: Goal,
}

type StateProps = {
  steps: Array<any>,
}

type DispatchProps = {
  reopenGoalScreen: GoToWorkbookParams => void,
}

type Props = OwnProps | StateProps | DispatchProps

const mapStateToProps = (state: any): StateProps => {
  const steps = selectors.steps(state)
  return {
    steps,
  }
}

const mapNavigationDispatchToProps = (dispatch: any): DispatchProps => ({
  reopenGoalScreen: (payload: GoToWorkbookParams) =>
    dispatch(goToV2WorkbookScreen(payload)),
})

const merge = (props: Props) => {
  const { steps, reopenGoalScreen, goal } = props

  const step = steps[stepEnum.STEP_5]
  const phase = translateCMSPhaseToStandard(step.type)

  const reopen = () =>
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

  return {
    reopen,
  }
}

export default compose(
  connect(mapStateToProps),
  mapNavigationDispatch(mapNavigationDispatchToProps),
  mapProps(merge)
)(ReopenButton)
