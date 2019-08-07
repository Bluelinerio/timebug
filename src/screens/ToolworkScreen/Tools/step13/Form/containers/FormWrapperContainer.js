// @flow
import React, { useContext, useEffect } from 'react'
import { ScreenContext } from '../../context/ScreenContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import { FormContext } from '../../context/FormContext'
import FormWrapper from '../components/FormWrapper'

const FormWrapperContainer = () => {
  const {
    baseValues,
    setBaseValues,
    newFormMounted,
  } = useContext(FormContext)
  const { data, storeData } = useContext(ToolDataContext)
  const { openGoalList } = useContext(ScreenContext)

  const value = data ? data.value : {}
  const formValue = value ? value.form : null

  useEffect(() => {
    newFormMounted()
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
    />
  )
}

export default FormWrapperContainer
