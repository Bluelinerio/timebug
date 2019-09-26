// @flow
import { useSelector, shallowCompare } from 'react-redux'
import selectors from '2020_redux/selectors'
import {
  stepEnum,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
} from '2020_services/cms'

const _extractGoalsStep5 = (toolData, formData) => {
  const data = formData[stepEnum.STEP_5]
  const { value } = data
  const goals = value.filter(goal => {
    const goalAwardData =
      toolData && toolData.value
        ? toolData.value.find(v => v.goalId === goal._id)
        : null
    return !goalAwardData || (!goalAwardData.completed && !goalAwardData.deleted)
  })
  return goals
}

const _extractDataGenericTool = (data: any) => {
  const { value = null } = data
  const formValue = value ? value.form : []
  const toolDataValue = value ? (value.toolData ? value.toolData : []) : []

  const goals = formValue
    .map(val => {
      const id = val._id

      const toolDataForGoal = toolDataValue.find(t => t.goalId === id) || null

      const disabled = toolDataForGoal
        ? toolDataForGoal.completed || toolDataForGoal.deleted
        : false
      return {
        ...val,
        disabled,
      }
    })
    .filter(g => !g.disabled)

  return goals
}

const _extractGoalsStep13 = (data: any) => {
  return _extractDataGenericTool(data)
}

const _extractGoalsStep23 = (data: any) => {
  return _extractDataGenericTool(data)
}

export const useGoalsForPhase = (phase: string, tool: any) => {
  const awardDataForTool = useSelector(
    selectors.awardDataForTool,
    shallowCompare
  )
  const formData = useSelector(selectors.formData, shallowCompare)

  if (!tool) return []

  const toolData = awardDataForTool({ tool })

  if (!toolData) return []

  switch (phase) {
    case MEDITATION:
      return _extractGoalsStep5(toolData, formData)
    case SELF_ASSESSMENT:
      return _extractGoalsStep13(toolData)
    case VISION_CREATION:
      return _extractGoalsStep23(toolData)
    default:
      return null
  }
}
