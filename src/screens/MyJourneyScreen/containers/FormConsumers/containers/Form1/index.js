//@flow
import React                                  from 'react'
import { compose }                            from 'recompose'

import tron from 'reactotron-react-native'

const transformPropsForPresentation = (props) => {
  tron.log(props)
  return props
}

const componentPropsHandler = compose(transformPropsForPresentation)

const Form1Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => (
    <Component {...props} {...componentPropsHandler(props)} />
  )
  return Consumer
}

export default Form1Consumer
