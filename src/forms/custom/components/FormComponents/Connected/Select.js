import React from 'react'
import { View, Picker } from 'react-native'
import { Text } from 'react-native-elements'
import { connectedComponentStyles } from '../../../connectedComponentStyles'

const Select = ({
  value,
  onChange,
  field: { content, options },
}: {
  value: string,
  onChange: string => any,
  field: {
    content: {
      text: string,
      items: Array<{ text: string, value: string }>,
    },
    options?: {
      default: string,
    },
  },
}) => (
  <React.Fragment>
    <Text style={connectedComponentStyles.textInputLabelStyle}>
      {content.text}
    </Text>
    <View style={connectedComponentStyles.pickerContainer}>
      <View style={connectedComponentStyles.pickerBackground}>
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
      </View>
    </View>
  </React.Fragment>
)

export default Select