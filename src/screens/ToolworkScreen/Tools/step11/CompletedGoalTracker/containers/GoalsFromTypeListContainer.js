// @flow
import { mapProps, compose }        from 'recompose'
import GoalsFromTypeList            from '../components/GoalsFromTypeList'
import StepDataHOC                  from '2020_HOC/ToolStepDataProvider'
import { stepEnum }                 from '2020_services/cms'
import { FORM_KEYS, CHILDREN_KEYS } from '2020_forms/forms/step11'
import { GoalType }                 from '2020_forms/forms/content'
import {
  getDataFromForm,
  parseDataFromType,
}                                   from '2020_utils/getDataFromFormValue'
import type { Goal }                from '../types'

type Props = {
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  onSelect: Goal => any,
}

const parseDataAsGoals = (
  goalData = [],
  completionData = [],
  effortData = []
): Array<Goal> => {
  const mergeData: Array<Goal> = goalData.map(goal => {
    const { id } = goal
    const completionLevel = completionData.find(s => s.parent.id === id)
    const effortForThisGoal = effortData.find(e => e.parent.id === id)
    const goalName = goal[CHILDREN_KEYS.form_11_goal.goalName].value
    const goalType =
      goal[CHILDREN_KEYS.form_11_goal.type] &&
      goal[CHILDREN_KEYS.form_11_goal.type].value
        ? goal[CHILDREN_KEYS.form_11_goal.type].value
        : GoalType[0]
    const goalOutcome = goal[CHILDREN_KEYS.form_11_goal.goalType].value

    const completion =
      completionLevel && completionLevel.value !== ''
        ? completionLevel.value
        : 50
    return {
      id,
      name: goalName,
      type: goalType,
      outcome: goalOutcome,
      completion,
      effort: effortForThisGoal ? effortForThisGoal.value : 'unspecified',
    }
  })

  return mergeData
}

const merge = (props: Props) => {
  /* eslint-disable-next-line */
  const { dispatch, stepData, onSelect, ...rest } = props
  const data = stepData[stepEnum.STEP_11]
  const formValue = data.value[0]
  const parsedData = getDataFromForm(formValue, Object.values(FORM_KEYS))
  const goalData = parseDataFromType(parsedData[FORM_KEYS.form_11_goal], {
    childKeys: Object.values(CHILDREN_KEYS.form_11_goal),
  })
  const completionData = parseDataFromType(
    parsedData[FORM_KEYS.form_11_goal_satisfaction]
  )
  const effortData = parseDataFromType(parsedData[FORM_KEYS.form_11_goal_time])
  const goals = parseDataAsGoals(goalData, completionData, effortData)
  return {
    ...rest,
    onSelect,
    goals,
  }
}

export default compose(StepDataHOC, mapProps(merge))(GoalsFromTypeList)
