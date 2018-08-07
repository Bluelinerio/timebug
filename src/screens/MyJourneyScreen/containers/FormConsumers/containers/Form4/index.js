//@flow
import React                                  from 'react'
import { compose } from 'recompose'
import { SelectedKeys }                       from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                             from '../../../../../../HOC/GenericFormConsumer'
import getDataFromForm                        from '../../utils/DataFromForm'
import { STEP4, getFormRequestedKeysForStep } from '../../../Forms'
import R                                      from 'ramda'

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP4)

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
  const componentData = getDataFromForm(formData, wantedKeys)
  return {
    componentData
  }
}

const transformPropsForPresentation = ({ componentData }) => {
   if (!componentData || R.isEmpty(componentData)) return {}
   else {
    const { boardOfAdvisors } = componentData
    return {
      boardOfAdvisors
    }
   }
}

const componentPropsHandler = compose(transformPropsForPresentation, handler)

const Form4Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => <Component {...props} {...componentPropsHandler(props)}/>
  return Consumer
}

export default Form4Consumer
