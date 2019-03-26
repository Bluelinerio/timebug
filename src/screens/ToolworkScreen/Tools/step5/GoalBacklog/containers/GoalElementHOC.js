// @flow
import { mapProps }     from 'recompose'
import { FORM_KEYS }    from '2020_forms/forms/goals'
import { GoalToolData } from '../../common/types'

type Props = {
  goal: GoalToolData,
  title: string,
}

const merge = (props: Props): Props => {
  const { goal } = props
  const title = goal[FORM_KEYS.form_5_recent_life_goals].value || ''
  return {
    goal,
    title,
  }
}

export default mapProps(merge)
