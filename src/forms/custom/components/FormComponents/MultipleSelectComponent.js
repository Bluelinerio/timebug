import React from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Text } from 'react-native-elements'
import styles, { checkboxColor, uncheckedColor } from '../../styles'

type Props = {
  value: Array<string>,
  onChange: string => any,
  field: {
    content: {
      text: string,
      items: Array<{ text: string, value: string }>
    },
    options?: {
      default: string
    }
  }
}

const Check = ({
  onChange,
  checked,
  title
}: {
  onChange: () => any,
  checked: Boolean,
  title: string
}) => (
  <CheckBox
    iconType="ionicon"
    checkedIcon="ios-checkbox"
    uncheckedIcon="ios-checkbox-outline"
    checkedColor={checkboxColor}
    uncheckedColor={uncheckedColor}
    checked={checked}
    title={title}
    onPress={onChange}
    containerStyle={{ backgroundColor: 'transparent' }}
  />
)

class MultipleSelect extends React.PureComponent<Props> {
  _onChange = item => {
    const { onChange, value = [] } = this.props
    const { value: itemValue } = item
    const valueSet = new Set(value)
    if (valueSet.has(itemValue)) valueSet.delete(itemValue)
    else valueSet.add(itemValue)
    onChange([...valueSet])
  }

  render() {
    const { value = [], field: { content } } = this.props
    const valueSet = new Set(value)
    return (
      <React.Fragment>
        <Text style={styles.textInputLabelStyle}>{content.text}</Text>
        <View style={styles.pickerContainer}>
          <View style={styles.pickerBackground}>
            {content &&
              content.items.map(item => (
                <Check
                  key={item.id}
                  onChange={() => this._onChange(item)}
                  checked={valueSet.has(item.value)}
                  title={item.text}
                />
              ))}
          </View>
        </View>
      </React.Fragment>
    )
  }
}
export default MultipleSelect
