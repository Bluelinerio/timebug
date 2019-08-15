// @flow
import React, { useContext, useEffect } from 'react'
import { ScreenContext } from '../../context/ScreenContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import { FormContext } from '../../context/FormContext'
import FormWrapper from '../components/FormWrapper'

const FormWrapperContainer = () => {
  const {
    baseValues,
    editionId,
    setBaseValues,
    newFormMounted,
    setFormEdition,
  } = useContext(FormContext)
  const { data, storeData } = useContext(ToolDataContext)
  const { openGoalList } = useContext(ScreenContext)

  const value = data ? data.value : {}
  const formValue = value ? value.form : null

  useEffect(() => {
    newFormMounted()
    return () => {
      setFormEdition(null)
    }
  }, [])

  const onFinish = (d: any) => {
    storeData({
      ...value,
      form: d,
    })
    setBaseValues(null)
    openGoalList()
  }

  return (
    <FormWrapper
      value={formValue}
      onFinish={onFinish}
      baseValues={baseValues}
      editionId={editionId}
    />
  )
}

export default FormWrapperContainer
