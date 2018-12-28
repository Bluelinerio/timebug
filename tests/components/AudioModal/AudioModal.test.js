import React from 'react'
import { shallow } from 'enzyme'
import AudioModal from '../../../src/components/AudioModal'

describe('Testing audio modal component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <AudioModal
        isOpen={true}
        close={() => null}
        title={'AudioModal'}
        audio={'https://mocked.com/some_audio'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
