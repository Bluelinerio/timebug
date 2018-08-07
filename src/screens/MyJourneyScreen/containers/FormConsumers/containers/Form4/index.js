//@flow
import React                                  from 'react'
import { SelectedKeys }                       from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                             from '../../../../../../containers/GenericFormConsumer'
import getDataFromForm                        from '../../utils/DataFromForm'
import { STEP4, getFormRequestedKeysForStep } from '../../../Forms'

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP4)

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
  const { boardOfAdvisors } = getDataFromForm(formData, wantedKeys)
  return {
    boardOfAdvisors
  }
}

const Form4Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => <Component {...props} />
  return Consumer
}

export default Form4Consumer
