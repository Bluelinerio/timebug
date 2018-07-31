import React from 'react'

export const handler = stuff => {
  // Dummy handler, required by genericFormConsumer
  return {
    stuff
  }
}

const FormExampleConsumer = injectedProps => Component => {
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
