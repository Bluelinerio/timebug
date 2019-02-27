// @flow
import { connect }                      from 'react-redux'
import { withNavigation }               from 'react-navigation'
import selectors                        from '2020_redux/selectors'
import { mapProps, compose }            from 'recompose'
import GoalsLog                         from '../components/GoalsLog'
import type { Props as ComponentProps } from '../components/GoalsLog'

type Props = {
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  step: any,
  formData: {
    [x: string]: {
      value: any,
    },
  },
}

const mapStateToProps = (state: any) => ({
  formData: selectors.formData(state),
})

const merge = (props: Props): ComponentProps => {
  const { formData, step, data, ...rest } = props
  const stepFormData = formData[`${step.number}`] || { value: [] }
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
    step,
    data,
    goals: mergedData,
  }
}

export default compose(
  connect(mapStateToProps),
  withNavigation,
  mapProps(merge)
)(GoalsLog)
