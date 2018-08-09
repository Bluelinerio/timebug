//@flow
import React                           from 'react'
import StepComponents, { formEntries } from './containers'

const FormComponent = (props: any) => <StepComponents {...props} />

export const Entries = formEntries

export default FormComponent
