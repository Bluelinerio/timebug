// @flow
import { mapProps }        from 'recompose'
import GoalListElement     from '../components/GoalListElement'
import { extractGoalData } from '../utils/extractGoalData'
import type { Props }      from '../components/GoalListElement'
import type { Goal }       from '../types'

type MergeProps = {
  goal: Goal,
  setGoal: Goal => any,
}

const merge = (props: MergeProps): Props => {
  const { setGoal, goal } = props
  const onPress = () => setGoal(goal)
  const { toolData = {} } = goal

  const {
    name = '',
    goalName = '',
    estimate = '',
    completed = false,
    deleted = false,
  } = extractGoalData(goal, toolData)

  return {
    name,
    goalName,
    estimate,
    completed,
    onPress,
    deleted,
  }
}
export default mapProps(merge)(GoalListElement)
