import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { formStyles } from '../../styles'
import tron from 'reactotron-react-native'
import FormPicker from './FormPicker'
import uuid from 'uuid/v4'

type Props = {
  value: Array<any>,
  field: {
    content?: any,
    options?: any
  }
}

type State = {
  elements: Array<any>
}

class ListComponent extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      currentValue: {}
    }
  }

  _processElementText = (element: any, index: number) => {
    const { value } = element
    const { field: { content: { listText } } } = this.props
    return `${listText} - ${index}: ${value}`
  }

  _onChange = (value: any, element: string) => {
    const { currentValue } = this.state
    this.setState({
      currentValue: { ...currentValue, [element]: { value, key: element } }
    })
  }

  _onAddPress = () => {
    const { value, currentValue, field: { options } } = this.state
    const { childTypes } = options
    this.setState({
      value: [
        ...value,
        {
          ...currentValue,
          _id: uuid(),
          _model: childTypes[currentValue.element]
        }
      ],
      currentValue: {}
    })
  }

  _onDeletePress = () => {
    tron.log('Deleted something')
  }

  render() {
    const { currentValue, value } = this.state
    const { field: { content, options } } = this.props
    const { childTypes } = options
    tron.log(this.state)
    return (
      <React.Fragment>
        <Text style={formStyles.textInputLabelStyle}>{content.text}</Text>
        <View style={formStyles.listFormContainer}>
          <View style={formStyles.listElementContainer}>
            {childTypes &&
              Object.keys(childTypes).map(key => {
                const field = childTypes[key]
                const inValue = currentValue[key] || {}
                return (
                  <FormPicker
                    key={field.key}
                    field={field}
                    value={inValue.value}
                    onChange={value => this._onChange(value, key)}
                  />
                )
              })}
          </View>
          <Button
            buttonStyle={[
              formStyles.buttonComponentStyle,
              formStyles.listButtonStyle
            ]}
            title={'add'}
            onPress={() => this._onAddPress()}
          />
        </View>
        <View style={formStyles.listContentContainer}>
          {value.map((val, index) => (
            <Text key={val._id} style={formStyles.listContentElement}>
              {this._processElementText(val, index)}
            </Text>
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default ListComponent
