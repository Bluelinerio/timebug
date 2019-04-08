// @flow
import moment                            from 'moment'
import { connect }                       from 'react-redux'
import { withNavigation }                from 'react-navigation'
import { compose }                       from 'recompose'
import selectors                         from '2020_redux/selectors'
import { deleteSingleFormElement }       from '2020_redux/actions/formData.actions'
import type { DeleteFormValuePayload }   from '2020_redux/actions/formData.actions'
import { goToV2WorkbookScreen }          from '2020_redux/actions/nav.actions'
import type { GoToWorkbookParams }       from '2020_redux/actions/nav.actions'
import { timeToCompleteGoal }            from '2020_forms/forms/content'
import { FORM_KEYS }                     from '2020_forms/forms/goals'
import { DATE_FORMAT, TEXT_DATE_FORMAT } from '2020_constants/constants'
import { stepEnum }                      from '2020_services/cms'
import { translateCMSPhaseToStandard }   from '2020_services/cms'
import BackloggedGoalDetails             from '../components/BackloggedGoalDetails'
import { getDueDate }                    from '../../common/utils/getDueDateFromFrequency'

type StateProps = {
  formData: {
    [x: string]: {
      _id: string,
      value: Array<any>,
    },
  },
}

const CLEARED = true

const NOT_CLEARED = false

export const STATUS = {
  CLEARED,
  NOT_CLEARED,
}

type OwnProps = {
  tool: any,
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
  return (shouldReopen: boolean) => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []

    const oldData = value.find(
      goalAwardData => goalAwardData.goalId === _id
    ) || {
        createdAt: moment().format(DATE_FORMAT),
        goalId: _id,
      }

    const newData = [...value.filter(val => val.goalId !== _id)]

    if (!shouldReopen) {
      const newGoalAwardValue = {
        ...oldData,
        updatedAt: moment().format(DATE_FORMAT),
        deleted: !oldData.deleted,
        deletionDate:
          !oldData.deleted === true ? moment().format(TEXT_DATE_FORMAT) : null,
      }

      newData.push(newGoalAwardValue)
    }

    storeAwardData(newData, tool)
    unsetGoal()
    if (shouldReopen) reopen()
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

const mergeSubstepFormDataWithAwards = (substepFormData, goal, awardData) => {
  const awardValue = awardData ? awardData.value || [] : []
  const awardDataForGoal = awardValue.find(g => g.goalId === goal._id) || {}
  const awardSubstepsForGoal = awardDataForGoal.substeps || []
  const mergedSteps = substepFormData.map(substep => {
    const awardDataForSubstep =
      awardSubstepsForGoal.find(s => s.substepId === substep._id) || null
    return {
      ...substep,
      award: awardDataForSubstep,
    }
  })
  return mergedSteps
}

const merge = (
  stateProps: StateProps,
  dispatchProps: any,
  ownProps: OwnProps
) => {
  const { goal, data, storeAwardData, tool, unsetGoal } = ownProps
  const title = goal[FORM_KEYS.form_5_recent_life_goals].value || ''
  const types = goal[FORM_KEYS.form_5_areas_of_life].value || []
  const steps = goal[FORM_KEYS.form_5_steps].value || []
  const substepsMerged = mergeSubstepFormDataWithAwards(steps, goal, data)
  const time = goal[FORM_KEYS.form_5_how_long].value
  const timeText = timeToCompleteGoal[time].text
  const goalAwardData =
    data && data.value ? data.value.find(v => v.goalId === goal._id) : {}
  const dialogElements = timeToCompleteGoal[time].estimate
    ? timeToCompleteGoal[time].estimate.map(e => ({
      key: e,
      text: e,
    }))
    : null
  const frequency = timeToCompleteGoal[time].frequency
  const { deleteGoal: callDeleteGoal, reopenGoalScreen } = dispatchProps
  const { steps: formSteps, formData } = stateProps
  const step = formSteps[stepEnum.STEP_5]
  const phase = translateCMSPhaseToStandard(step.type)
  const formDataForStep = formData[stepEnum.STEP_5].value
  const editionIndex = formDataForStep.reduce((currentIndex, f, index) => {
    if (f._id === goal._id) return index
    return currentIndex
  }, -1)
  const reopen = reopenGoalScreen({ step, phase, editionIndex })
  const deletionDate = goal.toolData.deletionDate
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
  /* eslint-disable-next-line no-unused-vars */
  const [_, completionDate] = getDueDate(goal, timeToCompleteGoal[time].moment)
  return {
    goal,
    toggleGoal,
    unsetGoal,
    deleteGoal,
    title,
    dialogElements,
    deletionDate,
    goalOutcome,
    goalAwardData,
    types,
    steps: substepsMerged,
    frequency,
    time: timeText,
    status: STATUS,
    completionDate,
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps, merge)
)(BackloggedGoalDetails)
