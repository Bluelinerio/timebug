import React                        from 'react'
import { Picker }                   from 'react-native'
import { connectedComponentStyles } from '../../../styles'

const Select = ({
  value,
  onChange,
  component: { content, options },
}: {
  value: string,
  onChange: string => any,
  component: {
    content: {
      items: Array<{ text: string, value: string }>,
    },
    options?: {
      default: string,
    },
  },
}) => (
  <React.Fragment>
    <Picker
      selectedValue={value ? value : options.value}
      style={[connectedComponentStyles.pickerStyle]}
      onValueChange={itemValue => onChange(itemValue)}
      itemStyle={connectedComponentStyles.pickerItemStyle}
    >
      {content &&
        content.items.map(({ value, text }) => (
          <Picker.Item key={value} value={value} label={text} />
        ))}
    </Picker>
  </React.Fragment>
)

export default Select
