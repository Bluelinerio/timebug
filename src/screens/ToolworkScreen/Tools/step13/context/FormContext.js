// @flow
import React from 'react'

type State = {
  baseValues: any,
  isFinished: false,
  editionId: string,
  onFormFinished: () => void,
  setBaseValues: () => void,
  newFormMounted: () => void,
  onFormClosed: () => void,
}

export type ProvidedProps = State

type Props = {
  children: Array<React.Node>,
}

const initialState = {
  baseValues: null,
  editionId: null,
  isFinished: false,
  onFormFinished: () => null,
  setBaseValues: () => null,
  newFormMounted: () => null,
  onFormClosed: () => null,
}

const FormContext = React.createContext(initialState)

class FormProvider extends React.PureComponent<Props, State> {
  state = {
    ...initialState,
  }

  newFormMounted = () => {
    this.setState({ isFinished: false })
  }

  onFormFinished = () => {
    this.setState({ isFinished: true, baseValues: null, editionId: null })
  }

  setBaseValues = (value: any) => {
    this.setState({ baseValues: value })
  }

  onFormClosed = () => {
    this.setState({ editionId: null, isFinished: false, baseValues: null })
  }

  setFormEdition = (editionId: string) => {
    this.setState({ editionId })
  }

  render() {
    return (
      <FormContext.Provider
        value={{
          ...this.state,
          setBaseValues: this.setBaseValues,
          onFormFinished: this.onFormFinished,
          onFormClosed: this.onFormClosed,
          setFormEdition: this.setFormEdition,
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    )
  }
}

export { FormProvider, FormContext }
