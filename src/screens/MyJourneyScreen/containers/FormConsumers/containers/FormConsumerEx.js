//@flow
import React from 'react'
import type, {
  HandlerFunction,
  FormDataForExercise
}            from '../../../../../HOC/GenericFormConsumer'

type FormConsumerExampleData = any

export const handler: HandlerFunction  = (stuff: FormDataForExercise): FormConsumerExampleData => {
  // Dummy handler, required by genericFormConsumer
  return {
    stuff
  }
}

const FormExampleConsumer = (injectedProps: any) => (Component: React.ComponentType<any>): React.ComponentType<any> => {
  const data = {
    subtitle: 'This is a dummy subtitle',
    text: 'This is dummy text'
  }
  const Consumer = props => (
    <Component data={data} {...injectedProps} {...props} />
  )
  return Consumer
}

export default FormExampleConsumer
