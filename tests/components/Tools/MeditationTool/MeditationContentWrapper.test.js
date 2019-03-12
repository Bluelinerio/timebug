import React from 'react'
import { shallow } from 'enzyme'
import MeditationContentWrapper from '../../../../src/screens/ToolworkScreen/Tools/step1/MeditationTool/containers/MeditationContentWrapper'

describe('Meditation content wrapper', function() {
  const props = {
    timeLeft: 2345678,
    timerStatus: 'PENDING',
    toggleTimer: jest.fn(() => null),
  }
  it('should render the container', function() {
    const component = shallow(<MeditationContentWrapper {...props} />)
    expect(component).toMatchSnapshot()
  })
})
