//@flow
import React from 'react';
import { compose } from 'recompose';
import GenericFormConsumer from '../../../../../HOC/GenericFormConsumer';
import AwardProvider from '../../../../../HOC/AwardProvider';
import { STEP2, STEP4, STEP5, STEP11, STEP1, STEP8 } from '../../Forms';
import type { STEP } from '../../Forms';
/**
 * Presentational Components
 */
import Form2Component from '../components/Form2/FormComponent';
import Form4Component from '../components/Form4/FormComponent';
import Form5Component from '../components/Form5/FormComponent';
import Form11Component from '../components/Form11/FormComponent';
import Form1Component from '../components/Form1/FormComponent';
import Form8Component from '../components/Form8/FormComponent';
/**
 * Form consumer HOCS
 */
import Form2HOC from './Form2';
import Form4HOC from './Form4';
import Form5HOC from './Form5';
import Form11HOC from './Form11';
import Form1HOC from './Form1';
import Form8HOC from './Form8';

export type FormEntry = {
  title: string,
  render: React.ComponentType<any>,
};

export type FormEntriesType = {
  [STEP]: FormEntry,
};

/**
 * import ExampleFormComponent            from '../components/FormExample/FormComponentEx'
 * import ExampleFormHOC                  from './FormExample'
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
  [STEP1]: {
    title: 'Meditation Checkin',
    render: compose(AwardProvider, Form1HOC)(Form1Component),
  },
  [STEP2]: {
    title: 'Your weekly timetable',
    render: compose(GenericFormConsumer, Form2HOC)(Form2Component),
  },
  [STEP4]: {
    title: 'Your board of advisors',
    render: compose(GenericFormConsumer, AwardProvider, Form4HOC)(
      Form4Component
    ),
  },
  [STEP5]: {
    title: 'Your goals',
    render: compose(GenericFormConsumer, AwardProvider, Form5HOC)(
      Form5Component
    ),
  },
  [STEP8]: {
    title: 'Exercise Checkin',
    render: compose(AwardProvider, Form8HOC)(Form8Component),
  },
  [STEP11]: {
    title: 'Your goal progress',
    render: compose(GenericFormConsumer, AwardProvider, Form11HOC)(
      Form11Component
    ),
  },
};

const FormConsumersContainer = (props: any): React.ComponentType<any> => {
  const { step } = props;
  const { render: Component } = formEntries[step];
  return Component ? <Component {...props} /> : null;
};

export default FormConsumersContainer;
