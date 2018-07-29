import React            from 'react'
import StepComponents, { formEntries }   from './containers'

const FormComponent = (props) => <StepComponents {...props}/>

export const Entries = formEntries

export default FormComponent