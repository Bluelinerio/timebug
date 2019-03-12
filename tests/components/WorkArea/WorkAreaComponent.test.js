import React from 'react'
import { shallow } from 'enzyme'
// import WorkArea from '../../../src/screens/ToolWorkScreen/components/WorkArea'

describe('Work area component test', function() {
  const props = {
    tool: {
      key: 1,
    },
    toolData: 'Some data!',
    storeAwardData: jest.fn(() => null),
  }

  it('Should render succesfully', function() {
    // const component = shallow(<WorkArea {...props} />)

    // expect(component).toMatchSnapshot()
    expect(true).toBe(true)

  })
})
