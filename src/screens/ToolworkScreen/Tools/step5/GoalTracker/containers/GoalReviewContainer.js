// @flow
import moment                            from 'moment'
import { connect }                       from 'react-redux'
import { withNavigation }                from 'react-navigation'
import { compose }                       from 'recompose'
import selectors                         from '2020_redux/selectors'
import { FORM_KEYS }                     from '2020_forms/forms/goals'
import { DATE_FORMAT, TEXT_DATE_FORMAT } from '2020_constants/constants'
import { timeToCompleteGoal }            from '2020_forms/forms/content'
import GoalReview                        from '../components/GoalReview'
import { frequencies }                   from '2020_services/checkins'
import { getDueDate }                    from '../utils/getDueDateFromFrequency'

// TODO: Refactor methods that change goals award data to a single one

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
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: Array<any>, _id?: string, date?: string },
  goal: any,
  type: string,
  unsetGoal: () => any,
}

const mapStateToProps = (state: any): StateProps => {
  const formData = selectors.formData(state)
  return {
    formData,
  }
}

const buildNewAwardValueForSubstep = ({ goal, substep, oldData, payload }) => {
  if (!oldData)
    return {
      goalId: goal._id,
      substeps: [
        {
          substepId: substep._id,
          ...payload,
        },
      ],
      createdAt: moment().format(DATE_FORMAT),
    }
  else {
    const oldSubsteps = oldData.substeps || []
    const hasPreviouslyCreatedSubstep = oldSubsteps.find(
      sub => sub.substepId === substep._id
    )
    if (hasPreviouslyCreatedSubstep) {
      const newSubsteps = oldSubsteps.reduce((allSubsteps, currSubstep) => {
        if (currSubstep.substepId === substep._id)
          return [
            ...allSubsteps,
            {
              ...currSubstep,
              ...payload,
            },
          ]
        return [...allSubsteps, currSubstep]
      }, [])
      return {
        ...oldData,
        updatedAt: moment().format(DATE_FORMAT),
        substeps: newSubsteps,
      }
    } else
      return {
        ...oldData,
        updatedAt: moment().format(DATE_FORMAT),
        substeps: [
          ...oldSubsteps,
          {
            substepId: substep._id,
            ...payload,
          },
        ],
      }
  }
}

const updateSubstep = (currentAwardData, tool, storeAwardData) => {
  return ({ goal, substep, payload }) => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []

    const oldData =
      value.find(goalAwardData => goalAwardData.goalId === _id) || null

    const newGoalAwardValue = buildNewAwardValueForSubstep({
      goal,
      substep,
      oldData,
      payload,
    })

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]
    storeAwardData(newData, tool)
  }
}

const textEvent = (goal, currentAwardData, tool, storeAwardData) => {
  return text => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []

    const oldData =
      value.find(goalAwardData => goalAwardData.goalId === _id) || {
        createdAt: moment().format(DATE_FORMAT),
        goalId: _id,
      }

    const newGoalAwardValue = {
      ...oldData,
      updatedAt: moment().format(DATE_FORMAT),
      text,
    }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]
    storeAwardData(newData, tool)
  }
}

const switchGoal = (goal, currentAwardData, tool, storeAwardData) => {
  return () => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []

    const oldData =
      value.find(goalAwardData => goalAwardData.goalId === _id) || {
        createdAt: moment().format(DATE_FORMAT),
        goalId: _id,
      }

    const newGoalAwardValue = {
      ...oldData,
      updatedAt: moment().format(DATE_FORMAT),
      completed: !oldData.completed,
      completionDate:
        !oldData.completed === true ? moment().format(TEXT_DATE_FORMAT) : null,
    }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]

    storeAwardData(newData, tool)
  }
}

const softDelete = (
  goal,
  currentAwardData,
  tool,
  storeAwardData,
  unsetGoal
) => {
  const fn = () => {
    const { _id } = goal
    const value = currentAwardData ? currentAwardData.value || [] : []

    const oldData =
      value.find(goalAwardData => goalAwardData.goalId === _id) || {
        createdAt: moment().format(DATE_FORMAT),
        goalId: _id,
      }

    const newGoalAwardValue = {
      ...oldData,
      updatedAt: moment().format(DATE_FORMAT),
      deleted: !oldData.deleted,
    }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]

    unsetGoal()
    storeAwardData(newData, tool)
  }
  return fn
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
  const update = updateSubstep(data, tool, storeAwardData)
  const onTextChange = textEvent(goal, data, tool, storeAwardData)
  const goalAwardData =
    data && data.value ? data.value.find(v => v.goalId === goal._id) : {}
  const toggleGoal = switchGoal(goal, data, tool, storeAwardData)
  const deleteGoal = softDelete(goal, data, tool, storeAwardData, unsetGoal)
  const dialogElements = timeToCompleteGoal[time].estimate
  const frequency = timeToCompleteGoal[time].frequency
  const disableETC = frequency === frequencies.DAILY
  const [daysLeft, completionDate] = getDueDate(
    goal,
    timeToCompleteGoal[time].moment
  )
  return {
    goal,
    updateSubstep: update,
    onTextChange,
    goalAwardData,
    toggleGoal,
    deleteGoal,
    title,
    types,
    steps: substepsMerged,
    frequency,
    time: timeText,
    dialogElements,
    status: STATUS,
    disableETC,
    daysLeft,
    completionDate,
  }
}

export default compose(withNavigation, connect(mapStateToProps, null, merge))(
  GoalReview
)
