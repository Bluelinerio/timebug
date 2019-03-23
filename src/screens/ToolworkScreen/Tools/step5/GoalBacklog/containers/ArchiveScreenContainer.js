// @flow
import { withNavigation } from 'react-navigation'
import { compose, mapProps } from 'recompose'
import { stepEnum } from '2020_services/cms'
import StepDataProvider from '../../../../HOC/ToolStepDataProvider'
import ArchiveScreen from '../components/ArchiveScreenComponent'

type Props = {
  navigationState: any,
  stepData: any,
  data: any, //Tool 5 data
  openGoalsScreen: () => any,
}

const merge = (props: Props) => {
  const { stepData, ...rest } = props
  const formDataStep5 = stepData[stepEnum.STEP_5] || { value: [] }
  const { value: goals } = formDataStep5
  return {
    ...rest,
    goals,
  }
}

export default compose(withNavigation, StepDataProvider, mapProps(merge))(
  ArchiveScreen
)
