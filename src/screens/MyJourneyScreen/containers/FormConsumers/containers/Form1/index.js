//@flow
import React       from 'react'
import selectors   from '../../../../../../redux/selectors'
import { connect } from 'react-redux'

const mapDataToPayload = (
  step: string,
  awardKey: String,
  fieldKey: String,
  value: any,
  { fields }: { fields: any }
) => {
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

const mapStateToProps = (state: any) => {
  const completedStepIds = selectors.completedStepIds(state) || []
  const hasCompletedStep = completedStepIds.find(step => `${step}` === '1')
    ? true
    : false
  return {
    hasCompletedStep
  }
}

const Form1Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => (
    <Component {...props} mapDataToPayload={mapDataToPayload} />
  )
  return connect(mapStateToProps, null)(Consumer)
}

export default Form1Consumer
