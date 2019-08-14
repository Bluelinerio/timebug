import React               from 'react'
import state               from '../../dummy.state.json'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore    from '../../shallowWithStore'
import FormTestContainer   from './FormTestContainer'

describe('Form complex behavior tests', function() {
  it('should render initially', function() {
    const store = createMockStore(state)
    const onFinish = jest.fn(() => null)
    const component = shallowWithStore(
      <FormTestContainer onFinish={onFinish} />,
      store
    )
    expect(component).toMatchSnapshot()
  })

  it('should render with edition index with a blank value', function() {
    const store = createMockStore(state)
    const onFinish = jest.fn(() => null)
    const component = shallowWithStore(
      <FormTestContainer onFinish={onFinish} />,
      store
    )
    const props = component.dive().props()
    const childState = component
      .dive()
      .shallow()
      .state()
    expect(childState.formIteration).toBe(2)
    expect(Object.keys(childState.value).length).toBe(0)
    expect(props.editionId).toBe(null)
  })

  it('should render with edition index as it is', function() {
    const store = createMockStore(state)
    const onFinish = jest.fn(() => null)
    const component = shallowWithStore(
      <FormTestContainer onFinish={onFinish} editionId={1} />,
      store
    )
    const props = component.dive().props()
    const childState = component
      .dive()
      .shallow()
      .state()
    expect(props.editionId).toBe(1)
    expect(childState.formIteration).toBe(1)
    expect(Object.keys(childState.value).length).toBeGreaterThan(0)
  })

  it('should finish dealing with edition index after being updated', function() {
    const store = createMockStore(state)
    const onFinish = jest.fn(() => null)
    const component = shallowWithStore(
      <FormTestContainer onFinish={onFinish} editionId={1} />,
      store
    )
    const props = component.dive().props()
    const childState = component
      .dive()
      .shallow()
      .state()
    expect(props.editionId).toBe(1)
    expect(childState.formIteration).toBe(1)
    expect(Object.keys(childState.value).length).toBeGreaterThan(0)

    component.setProps({ editionId: undefined })
    const newProps = component.dive().props()
    const newChildState = component
      .dive()
      .shallow()
      .state()
    expect(newProps.editionId).toBe(null)
    expect(Object.keys(newChildState.value).length).toBe(0)
  })
})
