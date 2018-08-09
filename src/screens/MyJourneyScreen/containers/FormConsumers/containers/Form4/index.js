//@flow
import React                              from 'react'
import { SelectedKeys } from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                         from '../../../../../../containers/GenericFormConsumer'
import getDataFromForm                    from '../../utils/DataFromForm'

const wantedKeys: SelectedKeys = {
    boardOfAdvisors: {
        form: '1',
        key: 'boardOfAdvisors'
    }
}

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
    console.log(formData)
    const { boardOfAdvisors } = getDataFromForm(formData, wantedKeys)
    console.log("BOARD", boardOfAdvisors)
    return {
        formData: {
            boardOfAdvisors
        }
    }
}

const Form4Consumer = (Component: React.ComponentType<any>) => {
    const Consumer = props => <Component {...props}/>
    return Consumer
}

export default Form4Consumer