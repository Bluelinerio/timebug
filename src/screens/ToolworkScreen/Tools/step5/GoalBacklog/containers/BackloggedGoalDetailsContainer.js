// @flow
import moment                            from 'moment'
import { connect }                       from 'react-redux'
import { withNavigation }                from 'react-navigation'
import { compose }                       from 'recompose'
import selectors                         from '2020_redux/selectors'
import { FORM_KEYS }                     from '2020_forms/forms/goals'
import { DATE_FORMAT, TEXT_DATE_FORMAT } from '2020_constants/constants'
import { CommonGoalOutcomesArray }       from '2020_forms/forms/content'
import { deleteSingleFormElement }       from '2020_redux/actions/formData.actions'
import type { DeleteFormValuePayload }   from '2020_redux/actions/formData.actions'
import { stepEnum }                      from '2020_services/cms'
import { translateCMSPhaseToStandard }   from '2020_services/cms'
import { goToV2WorkbookScreen }          from '2020_redux/actions/nav.actions'
import type { GoToWorkbookParams }       from '2020_redux/actions/nav.actions'
import BackloggedGoalDetails             from '../components/BackloggedGoalDetails'

type StateProps = {
  formData: {
    [x: string]: {
      _id: string,
      value: Array<any>,
    },
  },
}

type OwnProps = {
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: Array<any>, _id?: string, date?: string },
  goal: any,
  type: string,
  unsetGoal: () => any,
}

const mapStateToProps = (state: any): StateProps => {
  const formData = selectors.formData(state)
  const steps = selectors.steps(state)
  return {
    formData,
    steps,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  deleteGoal: (payload: DeleteFormValuePayload) =>
    dispatch(deleteSingleFormElement(payload)),
  reopenGoalScreen: (payload: GoToWorkbookParams) => () =>
    dispatch(goToV2WorkbookScreen(payload)),
})

const reopenGoal = (
  goal,
  currentAwardData,
  tool,
  storeAwardData,
  unsetGoal,
  reopen
) => {
  return () => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []

    const oldData = value.find(
      goalAwardData => goalAwardData.goalId === _id
    ) || {
        createdAt: moment().format(DATE_FORMAT),
        goalId: _id,
      }

    const newGoalAwardValue = {
      ...oldData,
      updatedAt: moment().format(DATE_FORMAT),
      deleted: !oldData.completed,
      deletionDate:
        !oldData.deleted === true ? moment().format(TEXT_DATE_FORMAT) : null,
    }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]

    storeAwardData(newData, tool)
    unsetGoal()
    reopen()
  }
}

const fullyDeleteGoal = (
  goal,
  currentAwardData,
  tool,
  storeAwardData,
  callDeleteGoal,
  unsetGoal
) => {
  return () => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []
    const step5 = stepEnum.STEP_5

    const newData = [...value.filter(val => val.goalId !== _id)]

    storeAwardData(newData, tool)
    unsetGoal()

    callDeleteGoal({
      stepId: step5,
      id: _id,
    })
  }
}

const merge = (
  stateProps: StateProps,
  dispatchProps: any,
  ownProps: OwnProps
) => {
  const { goal, data, storeAwardData, tool, unsetGoal } = ownProps
  const { deleteGoal: callDeleteGoal, reopenGoalScreen } = dispatchProps
  const { steps, formData } = stateProps
  const step = steps[stepEnum.STEP_5]
  const phase = translateCMSPhaseToStandard(step.phase)
  const formDataForStep = formData[stepEnum.STEP_5].value
  const editionIndex = formDataForStep.reduce((currentIndex, f, index) => {
    if (f._id === goal._id) return index
    return currentIndex
  }, -1)
  const reopen = reopenGoalScreen({ step, phase, editionIndex })
  const completionDate = goal.toolData.completionDate
  const title = goal[FORM_KEYS.form_5_recent_life_goals].value || ''
  const toggleGoal = reopenGoal(
    goal,
    data,
    tool,
    storeAwardData,
    unsetGoal,
    reopen
  )
  const deleteGoal = fullyDeleteGoal(
    goal,
    data,
    tool,
    storeAwardData,
    callDeleteGoal,
    unsetGoal
  )
  const goalOutcome = goal.toolData.goalOutcome
  const dialogElements = CommonGoalOutcomesArray
  return {
    goal,
    toggleGoal,
    unsetGoal,
    deleteGoal,
    title,
    dialogElements,
    completionDate,
    goalOutcome,
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps, merge)
)(BackloggedGoalDetails)
