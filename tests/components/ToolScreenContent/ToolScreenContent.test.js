import React from 'react'
import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../shallowWithStore'
import ToolScreenContentContainer from '../../../src/screens/MyJourneyScreen/containers/ToolScreenContentContainer'
import ToolScreenContent from '../../../src/screens/MyJourneyScreen/components/ToolScreenContent'

describe('Connected Tool screen content component', function() {
  it('Should render succesfully the connected component', function() {
    const dummyData = {
      cms: {
        steps: {
          1: {
            number: 1,
            icon: {
              uri:
                'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
            },
          },
          2: {
            number: 2,
            icon: {
              uri:
                'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
            },
          },
          3: {
            number: 3,
            icon: {
              uri:
                'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
            },
          },
          4: {
            number: 4,
            icon: {
              uri:
                'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
            },
          },
          5: {
            number: 5,
            icon: {
              uri:
                'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
            },
          },
          6: {
            number: 6,
            icon: {
              uri:
                'https://images.ctfassets.net/6h184bey8vl3/Rknt0PorAIG4uoMQAg4KM/d697d93618b298ce10d1606c7d3f573a/TimeBug-Icons-_Step-1_.svg',
            },
          },
        },
      },
    }
    const store = createMockStore(dummyData)
    const component = shallowWithStore(<ToolScreenContentContainer />, store)
    expect(component).toMatchSnapshot()
  })

  it('Should render the component itself', function() {
    const steps = {
      1: 'step_1',
      2: 'step_2',
      3: 'step_3',
    }
    const tools = [
      {
        number: 1,
      },
      {
        number: 2,
      },
      {
        number: 3,
      },
    ]
    const stepColors = {}
    const component = shallow(
      <ToolScreenContent steps={steps} tools={tools} stepColors={stepColors} />
    )
    expect(component.dive().find('View').first().prop('children').length).toBe(3)
    expect(component).toMatchSnapshot()
  })
})
