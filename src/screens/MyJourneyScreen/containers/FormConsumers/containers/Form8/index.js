// @flow
import React                                     from 'react'
import selectors                                 from '../../../../../../redux/selectors'
import { connect }                               from 'react-redux'
import type { ExtendedSubmitAwardAnswerPayload } from '../../../../../../redux/actions/award.actions'

const STEP_TO_CHECK = '8'

const mapDataToPayload = (
  step: string,
  awardKey: String,
  fieldKey: String,
  value: any,
  { fields }: { fields: any }
): ExtendedSubmitAwardAnswerPayload => {
  const field = fields[fieldKey]
  const { type, meta } = field
  return {
    stepId: step,
    element: {
      awardKey,
      fieldKey,
      type,
      value,
      meta
    }
  }
}

type ConsumerStateProps = {
  hasCompletedStep: boolean
}

const mapStateToProps = (state: any): ConsumerStateProps => {
  const completedStepIds = selectors.completedStepIds(state) || []
  const hasCompletedStep = completedStepIds.find(step => `${step}` === STEP_TO_CHECK)
    ? true
    : false
  return {
    hasCompletedStep
  }
}

const Form8Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => (
    <Component {...props} mapDataToPayload={mapDataToPayload} />
  )
  return connect(mapStateToProps, null)(Consumer)
}

export default Form8Consumer
