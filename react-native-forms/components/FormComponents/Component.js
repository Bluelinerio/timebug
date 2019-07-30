// @flow
import React from 'react'

type BaseProps = {
  onChange: any => void,
  value: any,
  baseValue?: {
    value: any,
  },
  isEditing?: any,
  color: string,
  formStyles: any,
  field: {
    content?: Object,
    options?: Object,
    style?: Object,
  },
}

type BaseState = {
  value?: any,
}

const isValueUnset = value => value === null || value === undefined

class Component<
  P = BaseProps,
  S = BaseState,
  SS = {}
> extends React.PureComponent<P, S, SS> {
  state: BaseState = {
    value: null,
  }

  componentDidMount() {
    const {
      onChange,
      value = null,
      baseValue = null,
      field: { options },
    } = this.props
    // If the component has no value, we have to report the initial value, either the default or the base value provided
    if (isValueUnset(value)) {
      if (baseValue && !isValueUnset(baseValue.value)) onChange(baseValue.value)
      else if (options && options.default) onChange(options.default)
    }
  }

  componentDidUpdate(prevProps: BaseProps) {
    const {
      onChange,
      value = null,
      baseValue = null,
      field: { options },
    } = this.props
    const { previousBase = null } = prevProps
    // If the component has no value, we have to report the initial value, either the default or the base value provided
    if (isValueUnset(value)) {
      if (baseValue && !isValueUnset(baseValue.value)) onChange(baseValue.value)
      else if (options && options.default) onChange(options.default)
    } else if (
      value &&
      baseValue &&
      !isValueUnset(baseValue.value) &&
      previousBase &&
      !isValueUnset(previousBase.value)
    ) {
      // If the component does have a value but a base value has been inserted, update with the new base
      onChange(baseValue.value)
    }
  }

  onChange = () => {
    const { onChange } = this.props
    if (onChange) onChange()
  }

  render() {
    return null
  }
}

export default Component
