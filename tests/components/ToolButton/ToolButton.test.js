import React from 'react'
import { TouchableOpacity } from 'react-native'
import { shallow } from 'enzyme'
import ToolButton from '../../../src/screens/MyJourneyScreen/components/Tools/ToolButton'

describe('Connected Tool screen content component', function() {
  const props = {
    title: 'Some title',
    subtitle: 'Some subtitle',
    content: 'Some content',
    source: {
      uri: 'some image',
    },
    containerBackgroundColor: '#212121',
    textStyle: {
      color: 'red',
    },
    tool: {
      key: 1,
    },
    onPress: jest.fn(() => null),
  }

  it('Should render succesfully', function() {
    const component = shallow(<ToolButton {...props} />)

    expect(component).toMatchSnapshot()
  })

  it('Should call onPress with the right parameters', function() {
    const component = shallow(<ToolButton {...props} />)
    component
      .find(TouchableOpacity)
      .first()
      .simulate('press')
    expect(props.onPress).toBeCalledWith({ tool: props.tool })
  })
})
