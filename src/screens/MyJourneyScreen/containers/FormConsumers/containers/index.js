//@flow
import React from 'react'
import { compose } from 'recompose'
import GenericFormConsumer from '../../../../../HOC/GenericFormConsumer'
import AwardProvider from '../../../../../HOC/AwardProvider'
import { STEP2, STEP4, STEP5, STEP11 } from '../../Forms'
import type { STEP } from '../../Forms'
/**
 * Presentational Components
 */
import Form2Component from '../components/Form2Component'
import Form4Component from '../components/Form4/FormComponent'
import Form5Component from '../components/Form5/FormComponent'
import Form11Component from '../components/Form11/FormComponent'
/**
 * Form consumer HOCS
 */
import Form2HOC, { handler as form2Handler } from './Form2Consumer'
import Form4HOC, { handler as form4Handler } from './Form4'
import Form5HOC, { handler as form5Handler } from './Form5'
import Form11HOC, { handler as form11Handler } from './Form11'

export type FormEntry = {
  title: string,
  render: React.ComponentType<any>
}

export type FormEntriesType = {
  [STEP]: FormEntry
}

/**
 * import ExampleFormComponent            from '../components/FormComponentEx'
 * import ExampleFormHOC                  from './FormConsumerEx'
 * ...
 * 
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
    render: compose(GenericFormConsumer, Form2HOC)(Form2Component)
  },
  [STEP4]: {
    title: 'Your board of advisors',
    render: compose(GenericFormConsumer, AwardProvider, Form4HOC)(
      Form4Component
    )
  },
  [STEP5]: {
    title: 'Your goals',
    render: compose(GenericFormConsumer, AwardProvider, Form5HOC)(
      Form5Component
    )
  },
  [STEP11]: {
    title: 'Your goal progress',
    render: compose(GenericFormConsumer, AwardProvider, Form11HOC)(
      Form11Component
    )
  }
}

export default (props: any): React.ComponentType<any> => {
  const { step } = props
  const { render: Component } = formEntries[step]
  return Component ? <Component {...props} /> : null
}
