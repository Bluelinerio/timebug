// @flow
import { withNavigation }    from 'react-navigation'
import { compose, mapProps } from 'recompose'
import { stepEnum }          from '2020_services/cms'
import StepDataProvider      from '../../../../HOC/ToolStepDataProvider'
import ArchiveScreen         from '../components/ArchiveScreenComponent'

type Props = {
  navigationState: any,
  stepData: any,
  data: any, //Tool 5 data
  openGoalsScreen: () => any,
}

const merge = (props: Props) => {
  const { stepData, data, ...rest } = props
  const formDataStep5 = stepData[stepEnum.STEP_5] || { value: [] }
  const { value: goals } = formDataStep5
  const mapGoalsWithToolData = goals.reduce((filteredGoals, goal) => {
    const toolData =
      data && data.value ? data.value.find(v => v.goalId === goal._id) : null
    return [
      ...filteredGoals,
      {
        ...goal,
        toolData,
      },
    ]
  }, [])
  return {
    ...rest,
    data,
    goals: mapGoalsWithToolData,
  }
}

export default compose(withNavigation, StepDataProvider, mapProps(merge))(
  ArchiveScreen
)
