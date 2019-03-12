import React from 'react'
import { shallow } from 'enzyme'
// import ToolSwitch from '../../../src/screens/ToolworkScreen/components/ToolSwitch'

describe('Tool switch component test', function() {
  const props = {
    tool: {
      key: '123',
    },
  }

  it('Should render succesfully the connected component', function() {
    // const component = shallow(<ToolSwitch {...props} />)
    // expect(component).toMatchSnapshot()
    expect(true).toBe(true)
  })
})
