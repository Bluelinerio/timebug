// @flow
import { mapProps }                     from 'recompose'
import GoalElement                      from '../components/GoalElement'
import type { Props as ComponentProps } from '../components/GoalElement'
import { getIcon }                      from '../utils/getIcon'

type Props = {
  goal: Goal,
  onSelect: Goal => void,
}

const merge = (props: Props): ComponentProps => {
  const { goal, onSelect } = props
  const { type } = goal
  const icon = getIcon(type)
  return {
    icon,
    goal,
    onPress: onSelect,
  }
}

export default mapProps(merge)(GoalElement)
