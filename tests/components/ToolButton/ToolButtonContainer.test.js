import React from 'react'
import { createMockStore } from 'redux-test-utils'
import selectors from '../../../src/redux/selectors'
import shallowWithStore from '../../shallowWithStore'
import ToolButtonContainer from '../../../src/screens/MyJourneyScreen/containers/Tools/ToolButtonContainer'

describe('Connected Tool screen content component', function() {
  it('Should render succesfully the connected component', function() {
    const state = {}
    const store = createMockStore(state)
    const stepColors = selectors.statefullStepColors(state)
    const dummyData = {
      step: {
        number: 1,
        icon: {
          uri:
            'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
        },
      },
      tool: {
        title: 'Some title',
        subtitle: 'Some subtitle',
        content: 'Some content',
        phase: 'Some phase',
      },
      stepColors,
    }
    const component = shallowWithStore(
      <ToolButtonContainer {...dummyData} />,
      store
    )
    expect(component).toMatchSnapshot()
  })
})
