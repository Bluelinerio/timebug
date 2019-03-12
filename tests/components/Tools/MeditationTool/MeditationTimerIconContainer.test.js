import React from 'react'
import { shallow } from 'enzyme'
import MeditationTimerIconContainer from '../../../../src/screens/ToolworkScreen/Tools/step1/MeditationTool/containers/MeditationTimerIconContainer'

describe('Meditation Timer Icon container Tests', function() {
  const props = {
    timerStatus: 'any_status',
    onPress: jest.fn(() => null),
  }

  it('It should render', function() {
    const component = shallow(<MeditationTimerIconContainer {...props} />)
    expect(component).toMatchSnapshot()
  })
})