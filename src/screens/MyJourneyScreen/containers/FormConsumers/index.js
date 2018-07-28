import React            from 'react'
import Form2Component from './containers/Form2Consumer'

const mapStepsToComponents = {
    "2" : Form2Component
}

const FormComponent = (props) => {
    const { step } = props
    const Component = mapStepsToComponents[step]
    return Component 
        ? (<Component {...props} />)
        : null
}

export default FormComponent