import React from 'react'
import { shallow } from 'enzyme'
import BackloggedGoalsDetails from '../../../../src/screens/ToolworkScreen/Tools/step5/GoalBacklog/components/BackloggedGoalDetails'

describe('Backlogged goals details component', function() {
  const props = {
    title: 'Some goal title',
    dialogElements: [
      {
        key: 'some_key',
        text: 'some_text',
      },
      {
        key: 'some_key2',
        text: 'some_text2',
      },
    ],
    deletionDate: '123456789',
    goalOutcome: 'some_outcome',
  }

  it('it should render the component', function() {
    const component = shallow(<BackloggedGoalsDetails {...props} />)
    expect(component).toMatchSnapshot()
  })
})
