//@flow
import React                              from 'react'
import { SelectedKeys } from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                         from '../../../../../../containers/GenericFormConsumer'
import getDataFromForm                    from '../../utils/DataFromForm'
import Reactotron                         from 'reactotron-react-native'

const wantedKeys: SelectedKeys = {
    recentGoals: {
        form: '1',
        key: 'recentGoals'
    }
}

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
    const { recentGoals } = getDataFromForm(formData, wantedKeys)
    return {
        recentGoals
    }
}

const transformPropsForPresentation = (props) => {
    const { recentGoals, award: { data, model }, ...rest } = props
    const header = {
        elements: Object.keys(model).map(key => ({
            text: key,
            type: model[key].type
        }))
    }
    //Continue here
    const rows = {
        elements: Object.keys(model).map(key => {
            const column = model[key]
            return {
                type: column.type,
                value: null
            }
        })
    }
    return {
        ...rest
    }

}

const Form5Consumer = (Component: React.ComponentType<any>) => {
    const Consumer = props => {
        Reactotron.log(props)
        return <Component {...props}/>
    }
    return Consumer
}

export default Form5Consumer