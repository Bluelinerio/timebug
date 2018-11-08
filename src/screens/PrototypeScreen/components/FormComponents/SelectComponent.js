import React            from 'react'
import { View, Picker } from 'react-native'
import { Text }         from 'react-native-elements'
import { formStyles }   from '../../styles'

const Select = ({
  value,
  onChange,
  field: { content, options }
}: {
  value: string,
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
}) => (
  <React.Fragment>
    <Text style={formStyles.textInputLabelStyle}>{content.text}</Text>
    <View style={formStyles.pickerContainer}>
      <View style={formStyles.pickerBackground}>
        <Picker
          selectedValue={value ? value : options.value}
          style={[formStyles.pickerStyle]}
          onValueChange={itemValue => onChange(itemValue)}
          itemStyle={formStyles.pickerItemStyle}
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
