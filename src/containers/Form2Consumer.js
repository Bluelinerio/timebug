import React from 'react'
import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import selectors from '../redux/selectors';
import FormConsumer from './FormConsumer'

const mapStateToProps = state => {
  const modelsAndDataForExercise = selectors.modelsAndDataForExercise(state)
  return { modelsAndDataForExercise }
}

const STEP2 = '2'

const merge = ({
    modelsAndDataForExercise
}) => {
    const formData = modelsAndDataForExercise(STEP2)
    return {
        step: formData
    }
}

const Form2Consumer = compose(
    connect(mapStateToProps),
    mapProps(merge),
)(({ children, step }) => {
    console.log(children)
    console.log(step ? true : false)

    return children 
        ? children({ step })
        : null
})

const FormContainer = ({ children }) => {
    return (
        <Form2Consumer>
            {
                ({ step }) => {
                    return children({step})
                }
            }
        </Form2Consumer>
    )
}

export default FormContainer