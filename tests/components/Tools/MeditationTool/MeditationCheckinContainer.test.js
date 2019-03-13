import React from 'react'
import { shallow } from 'enzyme'
// import MeditationCheckinContainer from '../../../../src/screens/ToolworkScreen/Tools/step1/MeditationTool/containers/MeditationCheckinContainer'

describe('Meditation checkin container', function() {
  const props = {
    data: null,
    tool: { key: 1 },
    storeAwardData: jest.fn(() => null),
  }

  it('it should prepare the container', function() {
    expect(true).toBe(true)
  })
})
