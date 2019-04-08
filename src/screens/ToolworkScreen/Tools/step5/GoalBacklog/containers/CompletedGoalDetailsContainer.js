// @flow
import moment                            from 'moment'
import { connect }                       from 'react-redux'
import { withNavigation }                from 'react-navigation'
import { compose }                       from 'recompose'
import selectors                         from '2020_redux/selectors'
import { FORM_KEYS }                     from '2020_forms/forms/goals'
import { DATE_FORMAT, TEXT_DATE_FORMAT } from '2020_constants/constants'
import { CommonGoalOutcomesArray }       from '2020_forms/forms/content'
import { timeToCompleteGoal }            from '2020_forms/forms/content'
import CompletedGoalDetails              from '../components/CompletedGoalDetails'
import type { Props as ComponentProps }  from '../components/CompletedGoalDetails'
import { getDueDate }                    from '../utils/getDueDateForGoal'

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
  return {
    formData,
  }
}

const switchGoal = (
  goal,
  currentAwardData,
  tool,
  storeAwardData,
  unsetGoal
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
      completed: !oldData.completed,
      goalOutcome: null,
      completionDate:
        !oldData.completed === true ? moment().format(TEXT_DATE_FORMAT) : null,
    }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]

    storeAwardData(newData, tool)
    unsetGoal()
  }
}

const addGoalCGO = (goal, currentAwardData, tool, storeAwardData) => {
  return (goalOutcome: string) => {
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
      goalOutcome,
    }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]

    storeAwardData(newData, tool)
  }
}

const merge = (
  stateProps: StateProps,
  dispatchProps: any,
  ownProps: OwnProps
): ComponentProps => {
  const { goal, data, storeAwardData, tool, unsetGoal } = ownProps
  const toolData =
    data && data.value ? data.value.find(v => v.goalId === goal._id) : null
  const completionDate = toolData.completionDate
  const time = goal[FORM_KEYS.form_5_how_long].value
  const expectedDate = getDueDate(goal, timeToCompleteGoal[time].moment)
  const title = goal[FORM_KEYS.form_5_recent_life_goals].value || ''
  const toggleGoal = switchGoal(goal, data, tool, storeAwardData, unsetGoal)
  const setCGO = addGoalCGO(goal, data, tool, storeAwardData)
  const goalOutcome = toolData.goalOutcome
  const goalOutcomeText = goalOutcome
    ? (CommonGoalOutcomesArray.find(o => o.key === goalOutcome) || {}).text
    : null
  const dialogElements = CommonGoalOutcomesArray
  return {
    goal,
    toggleGoal,
    unsetGoal,
    setCGO,
    title,
    dialogElements,
    completionDate,
    expectedDate,
    goalOutcome,
    goalOutcomeText,
  }
}

export default compose(withNavigation, connect(mapStateToProps, null, merge))(
  CompletedGoalDetails
)
