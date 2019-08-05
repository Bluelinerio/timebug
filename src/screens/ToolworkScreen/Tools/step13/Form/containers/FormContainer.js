import React, { useEffect, useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import Form from '../components/FormComponent'

const FormContainer = () => {
  const { newFormMounted } = useContext(FormContext)
  useEffect(() => newFormMounted(), [])
  return <Form />
}

export default FormContainer
