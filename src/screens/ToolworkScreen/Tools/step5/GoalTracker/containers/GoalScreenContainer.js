// @flow
import { withNavigation }    from 'react-navigation'
import { compose, mapProps } from 'recompose'
import { FORM_KEYS }         from '2020_forms/forms/goals'
import { stepEnum }          from '2020_services/cms'
import StepDataProvider      from '2020_HOC/ToolStepDataProvider'
import GoalScreen            from '../components/GoalScreenComponent'

type Props = {
  navigationState: any,
  stepData: any,
  openArchiveScreen: () => any,
}

const merge = (props: Props) => {
  const { navigation, stepData, ...rest } = props
  const { state: navigationState } = navigation
  const { params = {} } = navigationState
  const { payload = {} } = params
  const { goalId = null } = payload
  const formDataStep5 = stepData[stepEnum.STEP_5] || { value: [] }
  const { value } = formDataStep5
  const goal = goalId ? value.find(g => goalId === g._id) : null
  const types = goal ? goal[FORM_KEYS.form_5_areas_of_life].value || null : null
  const type = types ? types[0] : null
  return {
    ...rest,
    goal,
    type,
    goalId,
    navigation,
  }
}

export default compose(withNavigation, StepDataProvider, mapProps(merge))(
  GoalScreen
)
