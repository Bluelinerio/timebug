// @flow
import React from 'react'

type State = {
  baseValues: any,
  isFinished: false,
  onFormFinished: () => void,
  setBaseValues: () => void,
  newFormMounted: () => void,
}

export type ProvidedProps = State

type Props = {
  children: Array<React.Node>,
}

const initialState = {
  baseValues: null,
  isFinished: false,
  onFormFinished: () => null,
  setBaseValues: () => null,
  newFormMounted: () => null,
}

const FormContext = React.createContext(initialState)

class FormProvider extends React.PureComponent<Props, State> {
  state = {
    ...initialState,
  }

  newFormMounted = () => {
    this.setState({ isFinished: false, baseValues: null })
  }

  onFormFinished = () => {
    this.setState({ isFinished: true, baseValues: null })
  }

  setBaseValues = (value: any) => {
    this.setState({ baseValues: value })
  }

  render() {
    return (
      <FormContext.Provider
        value={{
          ...this.state,
          setBaseValues: this.setBaseValues,
          onFormFinished: this.onFormFinished,
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    )
  }
}

export { FormProvider, FormContext }
