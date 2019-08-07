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
    onFormFinished,
    newFormMounted,
  } = useContext(FormContext)
  const { data, storeData } = useContext(ToolDataContext)
  const { openGoalList } = useContext(ScreenContext)

  const value = data ? data.value : null

  useEffect(() => {
    newFormMounted()
  }, [])

  const onFinish = (d: any) => {
    storeData(d)
    setBaseValues(null)
    openGoalList()
  }

  return (
    <FormWrapper value={value} onFinish={onFinish} baseValues={baseValues} />
  )
}

export default FormWrapperContainer
