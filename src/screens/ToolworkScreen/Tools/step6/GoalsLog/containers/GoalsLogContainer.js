// @flow
import { withNavigation }               from 'react-navigation'
import { mapProps, compose }            from 'recompose'
import { stepEnum }                     from '2020_services/cms'
import GoalsLog                         from '../components/GoalsLog'
import type { Props as ComponentProps } from '../components/GoalsLog'
import StepDataProvider                 from '2020_HOC/ToolStepDataProvider'

type Props = {
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  stepData: {
    [x: string]: {
      value: any,
    },
  },
}

const merge = (props: Props): ComponentProps => {
  const { stepData, data, ...rest } = props
  const stepFormData = stepData[stepEnum.STEP_6] || { value: [] }
  const { value } = stepFormData
  const toolValue = data && data.value ? data.value : []
  const mergedData = value.map(goal => {
    const { _id } = goal
    const toolData = toolValue.find(g => g.goalId === _id)
    return {
      ...goal,
      toolData,
    }
  })
  return {
    ...rest,
    data,
    goals: mergedData,
  }
}

export default compose(
  withNavigation,
  StepDataProvider,
  mapProps(merge)
)(GoalsLog)
