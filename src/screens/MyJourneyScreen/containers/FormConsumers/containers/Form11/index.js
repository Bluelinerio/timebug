//@flow
import React                                   from 'react'
import { compose }                             from 'recompose'
import { SelectedKeys }                        from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                              from '../../../../../../HOC/GenericFormConsumer'
import getDataFromForm                         from '../../utils/DataFromForm'
import { buildHeader, buildElements }          from '../../utils/FormModelToElement'
import { STEP11, getFormRequestedKeysForStep } from '../../../Forms'

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP11)

type ComponentDataForForm = {
  topGoalsPast5Years: any
}

type PresentationProps = {
  componentData: ComponentDataForForm | {},
  award: {
    data: any,
    model: any
  }
}

export const handler: HandlerFunction = ({
  formData,
  ...rest
}: FormDataForExercise) => {
  const componentData: ComponentDataForForm = getDataFromForm(formData, wantedKeys)
  return {
    componentData,
    ...rest
  }
}

const transformPropsForPresentation = (props: PresentationProps) => {
  const { componentData, award: { data, model }, ...rest } = props

  const header = {
    elements: buildHeader(model)
  }
  const { topGoalsPast5Years } = componentData

  const componentDataArray = [
    topGoalsPast5Years
  ]

  const elements = buildElements({ header, componentDataArray, data })

  return {
    header,
    elements,
    ...rest
  }
}

const Form11Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => {
    const providedProps = compose(transformPropsForPresentation, handler)(props)
    return <Component {...props} {...providedProps} />
  }
  return Consumer
}

export default Form11Consumer
