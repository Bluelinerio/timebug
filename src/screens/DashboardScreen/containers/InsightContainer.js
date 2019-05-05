// @flow

import { connect }                      from 'react-redux'
import { compose, mapProps }            from 'recompose'
import getInsight                       from '2020_static/insights'
import selectors                        from '2020_redux/selectors'
import InsightComponent                 from '../components/InsightComponent'
import type { Props as ComponentProps } from '../components/InsightComponent'

const insight = (stepId: string): ComponentProps => {
  const insightText = getInsight(stepId)
  return {
    insightText,
  }
}

type Props = {
  user: any | null,
  completedStepIds: Array<number>,
  steps: {
    [x: string]: {
      number: number,
      stepId: string,
    },
  },
}

const mapStateToProps = (state: any): Props => {
  const user = selectors.user(state)
  const completedStepIds = selectors.completedStepIds(state)
  const steps = selectors.steps(state)
  return {
    user,
    completedStepIds,
    steps,
  }
}

const merge = (props: Props): ComponentProps => {
  const { user, completedStepIds, steps } = props
  if (!user) return {}
  const missingStep = Object.values(steps).find(
    step => completedStepIds.indexOf(step.number) === -1
  )
  if (!missingStep) return {}
  return insight(missingStep.stepId)
}

export default compose(connect(mapStateToProps), mapProps(merge))(
  InsightComponent
)
