import React from 'react'
import { View, Picker } from 'react-native'
import { Text } from 'react-native-elements'
import { formStyles } from '../../styles'
import { widthPercentage } from '../../../../utils/viewportCalculation'

// const options = locals.options.map(({ value, text }) => (
//     <Picker.Item key={value} value={value} label={text} />
// ))
// content: {
//     text: 'What are of life does this goal belong to ?',
//     items: AreaOfLife.map(area => ({
//       value: area,
//       label: area
//     }))
//   },

const Select = ({
  value,
  onChange,
  field: { content }
}: {
  value: string,
  onChange: string => any,
  field: {
    content: {
      text: string,
      items: Array<{ text: string, value: string }>
    },
    options?: any
  }
}) => (
  <React.Fragment>
    <Text style={formStyles.textInputLabelStyle}>{content.text}</Text>
    <View style={formStyles.pickerContainer}>
      <View style={formStyles.pickerBackground}>
        <Picker
          selectedValue={value}
          style={[
            {
              width: widthPercentage(70),
              maxWidth: widthPercentage(70)
            },
            formStyles.pickerStyle
          ]}
          onValueChange={itemValue => onChange(itemValue)}
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
