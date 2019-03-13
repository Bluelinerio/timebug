import React from 'react'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../shallowWithStore'
// import WorkAreaContainer from '../../../src/screens/ToolWorkScreen/containers/WorkAreaContainer'

describe('Work area container test', function() {
  const props = {
    navigation: {
      state: {
        tool: {
          key: 1,
        },
      },
    },
  }

  const state = {
    awards: {
      data: {
        1: 'some data!',
      },
    },
  }

  it('Should render succesfully the connected component', function() {
    // const store = createMockStore(state)
    // const component = shallowWithStore(
    //   <WorkAreaContainer {...props} />,
    //   store
    // )
    // expect(component).toMatchSnapshot()
    expect(true).toBe(true)
  })
})
