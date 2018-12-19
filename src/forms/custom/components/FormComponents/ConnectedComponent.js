import React                        from 'react'
import { View, Text }               from 'react-native'
import types                        from '../../forms/types'
import ConnectedSelect              from './Connected/Select'
import { connectedComponentStyles } from '../../styles'
import uuid                         from 'uuid/v4'
import FormElementHeader            from './FormElementHeader'

type Props = {
  onChange: () => any,
  value: any,
  field: any,
  buttonHandler: () => any,
  currentFormValue: any,
  allFields: any,
  component: any,
  header: string,
  dataElement: {
    text: string,
    value: Array<any>,
    type: string,
  },
  formStyles: any,
}

const SwitchComponent = (props: { component: any, props: any }) => {
  const { component: { type } } = props
  switch (type) {
  case types.string:
    return null
  case types.select:
    return <ConnectedSelect {...props} />
  default:
    return null
  }
}

class ConnectedComponent extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    const { dataElement: { text, value: values }, component } = this.props

    const storableValue = props.value || []
    const currentValue = values.map(val => {
      const listValues = val.values
      const parentId = val.listElementId

      const match = storableValue.find(
        savedValue => savedValue.parentId === parentId
      ) || {
          value: component.options.default || null,
          _id: uuid(),
        }

      return {
        ...match,
        parentId: match.parentId || parentId,
        model: component,
        parentValues: {
          text,
          values: listValues,
        },
      }
    })

    this.state = {
      currentValue,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.field.key !== prevProps.field.key) {
      const { onChange } = this.props
      const currentValue = this._getCurrentValue()
      this.setState({ currentValue }, () => {
        onChange(this.state.currentValue)
      })
    }
  }

  componentDidMount() {
    const { onChange } = this.props
    const { currentValue } = this.state
    onChange(currentValue)
  }

  _getCurrentValue = () => {
    const { dataElement: { text, value: values }, component } = this.props
    const storableValue = this.props.value || []

    const currentValue = values.map(val => {
      const listValues = val.values
      const parentId = val.listElementId

      const match = storableValue.find(
        savedValue => savedValue.parentId === parentId
      ) || {
          value: component.options.default || null,
          _id: uuid(),
        }

      return {
        ...match,
        parentId: match.parentId || parentId,
        model: component,
        parentValues: {
          text,
          values: listValues,
        },
      }
    })
    return currentValue
  }

  _onChange = (value: any, _id: string) => {
    const { onChange } = this.props
    const { currentValue } = this.state
    const storableValue = currentValue.reduce(
      (allValueElements, valueElement) => {
        if (valueElement._id !== _id) return [...allValueElements, valueElement]
        return [
          ...allValueElements,
          {
            ...valueElement,
            value,
          },
        ]
      },
      []
    )
    this.setState({ currentValue: storableValue }, () => {
      onChange(storableValue)
    })
  }

  render() {
    const { currentValue } = this.state
    const { header, component, formStyles = {} } = this.props
    return (
      <React.Fragment>
        <FormElementHeader text={header} textStyle={formStyles.textStyle} />
        {currentValue &&
          currentValue.map(val => {
            return (
              <React.Fragment key={val._id}>
                <View style={connectedComponentStyles.connectedRow}>
                  <View
                    style={connectedComponentStyles.elementIdentifierContainer}
                  >
                    <Text
                      style={[
                        connectedComponentStyles.text,
                        connectedComponentStyles.identifierText,
                        formStyles.textStyle,
                      ]}
                    >
                      {val.parentValues.text}:
                    </Text>
                  </View>
                  <View style={connectedComponentStyles.contentContainer}>
                    {val.parentValues &&
                      val.parentValues.values.map((val, index) => (
                        <Text
                          style={[
                            connectedComponentStyles.text,
                            formStyles.textStyle,
                          ]}
                          key={index}
                        >
                          {val}
                        </Text>
                      ))}
                    <SwitchComponent
                      component={component}
                      value={val.value}
                      onChange={value => this._onChange(value, val._id)}
                      formStyles={formStyles}
                    />
                  </View>
                </View>
              </React.Fragment>
            )
          })}
      </React.Fragment>
    )
  }
}

export default ConnectedComponent
