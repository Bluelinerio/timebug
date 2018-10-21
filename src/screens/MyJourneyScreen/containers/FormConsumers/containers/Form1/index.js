//@flow
import React       from 'react'
import { compose } from 'recompose'

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

const transformPropsForPresentation = props => props

const componentPropsHandler = compose(transformPropsForPresentation)

const Form1Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => (
    <Component
      {...props}
      mapDataToPayload={mapDataToPayload}
      {...componentPropsHandler(props)}
    />
  )
  return Consumer
}

export default Form1Consumer
