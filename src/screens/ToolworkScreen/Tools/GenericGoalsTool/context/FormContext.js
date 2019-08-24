// @flow
import React, { useState, useCallback } from 'react'

type State = {
  baseValues: any,
  isFinished: false,
  editionId: string,
  onFormFinished: () => void,
  setBaseValues: () => void,
  newFormMounted: () => void,
  onFormClosed: () => void,
  setFormEdition: () => void,
}

export type ProvidedProps = State

type Props = {
  children: Array<React.Node>,
  FORM_KEYS: any,
  CHILDREN_KEYS: any,
  model: any,
}

const initialState: State = {
  baseValues: null,
  editionId: null,
  isFinished: false,
  FORM_KEYS: null,
  CHILDREN_KEYS: null,
  model: null,
  onFormFinished: () => null,
  setBaseValues: () => null,
  newFormMounted: () => null,
  onFormClosed: () => null,
  setFormEdition: () => null,
}

const FormContext = React.createContext(initialState)

const FormProvider = (props: Props) => {
  const { FORM_KEYS, CHILDREN_KEYS, model } = props
  const [isFinished, setIsFinished] = useState(false)
  const [baseValues, setBaseValues] = useState(null)
  const [editionId, setEditionId] = useState(null)

  const newFormMounted = useCallback(
    () => {
      setIsFinished(false)
    },
    [setIsFinished]
  )

  const onFormFinished = useCallback(
    () => {
      setIsFinished(true)
      setBaseValues(null)
      setEditionId(null)
    },
    [setIsFinished, setBaseValues, setEditionId]
  )

  const onFormClosed = useCallback(
    () => {
      setIsFinished(false)
      setBaseValues(null)
      setEditionId(null)
    },
    [setIsFinished, setBaseValues, setEditionId]
  )

  const setFormEdition = useCallback(
    (editionId: string) => {
      setEditionId(editionId)
    },
    [setEditionId]
  )

  return (
    <FormContext.Provider
      value={{
        model,
        FORM_KEYS,
        CHILDREN_KEYS,
        baseValues,
        isFinished,
        editionId,
        setBaseValues,
        onFormFinished,
        onFormClosed,
        setFormEdition,
        newFormMounted,
      }}
    >
      {this.props.children}
    </FormContext.Provider>
  )
}

export { FormProvider, FormContext }
