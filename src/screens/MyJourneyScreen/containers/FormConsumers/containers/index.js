//@flow
import React                                         from 'react'
import { compose }                                   from 'recompose'
import GenericFormConsumer                           from '../../../../../containers/GenericFormConsumer'
import AwardProvider                                 from '../../../../../HOC/AwardProvider'
import type, { STEP, STEP1, STEP2, STEP3, STEP4, STEP5 }    from '../../Forms'
/**
 * Presentational Components
 */
import Form2Component                                from '../components/Form2Component'
import ExampleFormComponent                          from '../components/FormComponentEx'
import Form4Component                                from '../components/Form4/FormComponent'
import Form5Component                                from '../components/Form5/FormComponent'
/**
 * Form consumer HOCS
 */
import Form2HOC, { handler as form2Handler }         from './Form2Consumer'
import ExampleFormHOC, { handler as exampleHandler } from './FormConsumerEx'
import Form4HOC, { handler as form4Handler }         from './Form4'
import Form5HOC, { handler as form5Handler }         from './Form5'

export type FormEntry = {
  title: string,
  render: React.ComponentType<any>
}

export type FormEntriesType = {
  [STEP]: FormEntry
}

/**
 * [STEP1]: {
    title: 'Component 1',
    render: compose(
      ExampleFormHOC({ injected: 'This is step 1' }),
      GenericFormConsumer(exampleHandler)
    )(ExampleFormComponent)
  }
 */

export const formEntries: FormEntriesType = {
  [STEP2]: {
    title: 'Your weekly timetable',
    render: compose(GenericFormConsumer(form2Handler), Form2HOC())(
      Form2Component
    )
  },
  [STEP4]:{
    title: 'Your board of advisors',
    render: compose(GenericFormConsumer(form4Handler), Form4HOC)(
      Form4Component
    )
  },
  [STEP5]: {
    title: 'Your goals',
    render: compose(GenericFormConsumer(form5Handler), AwardProvider, Form5HOC)(
      Form5Component
    )
  }
}

export default (props: any): React.ComponentType<any> => {
  const { step } = props
  const { render: Component } = formEntries[step]
  return Component ? <Component {...props} /> : null
}
