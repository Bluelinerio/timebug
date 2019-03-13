import React from 'react'
import shallowWithStore from '../../../shallowWithStore'
import { createMockStore } from 'redux-test-utils'
import MeditationTimerContainer from '../../../../src/screens/ToolworkScreen/Tools/step1/MeditationTool/containers/MeditationTimerContainer'

describe('Tests related to the meditation timer container', function() {
  const props = {
    daysInRowCount: 2,
    onTimerFinish: jest.fn(() => null),
    disableTimer: false,
    meditationData: {},
  }

  const state = {}

  it('should render', function() {
    const store = createMockStore(state)
    const component = shallowWithStore(
      <MeditationTimerContainer {...props} />,
      store
    )
    expect(component).toMatchSnapshot()
  })
})
