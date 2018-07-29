import React from 'react'
import { compose } from 'recompose'
import GenericFormConsumer  from '../../../../../containers/GenericFormConsumer'

import {
    STEP1,
    STEP2,
    STEP3
} from '../../Forms'
/**
 * Presentational Components
 */

import Form2Component    from '../components/Form2Component'
import ExampleFormComponent from '../components/FormComponentEx'

/**
 * Form consumer HOCS
 */
import Form2HOC         from './Form2Consumer'
import ExampleFormHOC from './FormConsumerEx'

export const formEntries = {
    [STEP1]: {
        title: "Component 1",
        render: compose(ExampleFormHOC({ injected: "This is step 1" }), GenericFormConsumer)(ExampleFormComponent)
    },
    [STEP2]: {
        title: "Your weekly timetable",
        render: compose(Form2HOC(), GenericFormConsumer)(Form2Component)
    },
    [STEP3]: {
        title: "Component 3"
    }
}


export default (props) => {
    const { step } = props
    const { render: Component } = formEntries[step]
    return Component
        ? (<Component {...props} />)
        : null
}