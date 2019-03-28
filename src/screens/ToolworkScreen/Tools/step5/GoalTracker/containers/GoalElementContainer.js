import { mapProps, compose } from 'recompose'
import GoalElement           from '../components/GoalElement'
import { getIcon }           from '../utils/getIconFromArea'

type Props = {
  goal: any,
  onSelect: String => any,
  title: string,
}

type MergeProps = {
  goal: any,
  onSelect: String => any,
  title: string,
  icon: string,
}

const merge = (props: Props): MergeProps => {
  const { type, ...rest } = props
  const icon = getIcon(type)

  return {
    ...rest,
    icon,
  }
}

export default compose(mapProps(merge))(GoalElement)
