import React from 'react'
import { compose } from 'recompose'
import GenericFormConsumer  from '../../../../../containers/GenericFormConsumer'

/**
 * Presentational Components
 */
import Form2Component    from '../components/Form2Component'

/**
 * Form consumer HOCS
 */
import Form2HOC         from './Form2Consumer'

export const STEP2 = "2"

export const componentsList = {
    [STEP2]: (props) => compose(Form2HOC(props), GenericFormConsumer)(Form2Component)
}

export default (props) => {
    const { step } = props
    const Component = componentsList[step]
    return Component 
        ? (<Component {...props} />)
        : null
}