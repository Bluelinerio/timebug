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
      value: props.value || [],
      currentValue: {}
    }
  }

  _onChange = (value: any, element: string) => {
    tron.log('value changed!')
    tron.log(value)
    tron.log(element)
  }

  _onAddPress = () => {
    tron.log('Added something!')
    const { value, currentValue } = this.state
    this.setState({ value: [...value, currentValue], currentValue: {} })
  }

  _onDeletePress = () => {
    tron.log('Deleted something')
  }

  render() {
    const { currentValue } = this.state
    const { field: { content, options } } = this.props
    const { childTypes } = options
    tron.log(this.state)
    return (
      <React.Fragment>
        <Text style={formStyles.textInputLabelStyle}>{content.text}</Text>
        <View style={formStyles.listFormContainer}>
          <View>
            {childTypes &&
              Object.keys(childTypes).map(key => {
                const field = childTypes[key]
                const inValue = currentValue[key]
                return (
                  <FormPicker
                    key={field.key}
                    field={field}
                    value={inValue}
                    onChange={value => this._onChange(value, key)}
                  />
                )
              })}
          </View>
          <Button
            buttonStyle={formStyles.buttonComponentStyle}
            title={'add'}
            onPress={() => this._onAddPress()}
          />
        </View>
        <View style={formStyles.listContentContainer}>
          <Text style={formStyles.listContentElement}>
            There should be elements here
          </Text>
          <Text style={formStyles.listContentElement}>
            There should be elements here
          </Text>
          <Text style={formStyles.listContentElement}>
            There should be elements here
          </Text>
        </View>
      </React.Fragment>
    )
  }
}

export default ListComponent
