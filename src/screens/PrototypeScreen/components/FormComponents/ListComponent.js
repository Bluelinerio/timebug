import React from 'react'
import { View, Text, Alert } from 'react-native'
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

type ValueElement = {
  _id: string,
  _model: any,
  [x: string]: {
    value: any,
    key: string
  }
}

type State = {
  value: Array<ValueElement>,
  currentValue: ValueElement
}

const _stripKeys = (val: ValueElement) => {
  const metaKeys = ['_id', '_model']
  return Object.keys(val).reduce((prev, key) => {
    if (metaKeys.find(k => k === key)) return prev
    return {
      ...prev,
      [key]: val[key]
    }
  }, {})
}

const TextElement = ({
  element,
  index
}: {
  index: number,
  element: ValueElement
}) => {
  const strippedObject = _stripKeys(element)
  return (
    <React.Fragment>
      {Object.values(strippedObject).map(value => {
        return (
          value &&
          value.value && (
            <Text
              key={value._id}
              style={[formStyles.textElementText]}
            >{`\t\t\t\t${index + 1})${value.value}`}</Text>
          )
        )
      })}
    </React.Fragment>
  )
}

class ListComponent extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      currentValue: {}
    }
  }

  _onChange = (value: any, element: string) => {
    const { currentValue } = this.state
    this.setState({
      currentValue: { ...currentValue, [element]: { value, key: element } }
    })
  }

  _onAddPress = () => {
    const { value, currentValue } = this.state
    // Test if input's blank
    // const err = Object.keys(currentValue).find(k => {
    //   const val = currentValue[k]
    //   if (val.value === null || val.value === '') return true
    //   return false
    // }) || true
    // if (err) {
    //   Alert.alert('Error', 'Please input a valid step', [
    //     { text: 'OK', onPress: () => null }
    //   ])
    //   return
    // }
    const { field: { options } } = this.props
    const { childTypes } = options
    const valueToSave = Object.keys(currentValue).reduce((prev, key) => {
      const _model = childTypes[key]
      return {
        [key]: {
          ...currentValue[key],
          _model,
          _id: uuid()
        }
      }
    }, {})
    this.setState({
      value: [
        ...value,
        {
          ...valueToSave,
          _id: uuid()
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
            textStyle={formStyles.listButtonTextStyle}
            onPress={() => this._onAddPress()}
          />
        </View>
        <View style={formStyles.listContentContainer}>
          {value && (
            <Text style={[formStyles.textElementText]}>
              {`${content.listText}`}:
            </Text>
          )}
          {value.map((val, index) => (
            <TextElement key={val._id} element={val} index={index} />
          ))}
        </View>
      </React.Fragment>
    )
  }
}

export default ListComponent
