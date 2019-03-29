// @flow
import { mapProps }     from 'recompose'
import { FORM_KEYS }    from '2020_forms/forms/goals'
import { GoalToolData } from '../../common/types'
import { getIcon }      from '../../common/utils'

type Props = {
  goal: GoalToolData,
  title: string,
  icon: string,
}

const merge = (props: Props): Props => {
  const { goal } = props
  const title = goal[FORM_KEYS.form_5_recent_life_goals].value || ''
  const types = goal ? goal[FORM_KEYS.form_5_areas_of_life].value || null : null
  const type = types ? types[0] : null

  const icon = getIcon(type)

  return {
    goal,
    title,
    icon,
  }
}

export default mapProps(merge)
