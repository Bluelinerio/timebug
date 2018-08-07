//@flow
import React                                  from 'react'
import { compose }                            from 'recompose'
import { SelectedKeys }                       from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                             from '../../../../../../HOC/GenericFormConsumer'
import getDataFromForm                        from '../../utils/DataFromForm'
import { STEP4, getFormRequestedKeysForStep } from '../../../Forms'
import { buildHeader, buildElements }         from '../../utils/FormModelToElement'

type ComponentDataForForm = {
  boardOfAdvisors: any
}

type PresentationProps = {
  componentData: ComponentDataForForm | {},
  award: {
    data: any,
    model: any
  }
}

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP4)

export const handler: HandlerFunction = ({
  formData,
  ...rest
}: FormDataForExercise) => {
  const componentData = getDataFromForm(formData, wantedKeys)
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

  const { boardOfAdvisors } = componentData

  const componentDataArray = [boardOfAdvisors]

  const elements = buildElements({ header, componentDataArray, data })

  return {
    header,
    elements,
    ...rest
  }
}

const componentPropsHandler = compose(transformPropsForPresentation, handler)

const Form4Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => (
    <Component {...props} {...componentPropsHandler(props)} />
  )
  return Consumer
}

export default Form4Consumer
