import React             from 'react'
import { View, Picker }  from 'react-native'
import FormElementHeader from './FormElementHeader'
import styles            from '../../styles'

const Select = ({
  value,
  onChange,
  field: { content, options },
  formStyles = {},
}: {
  value: string,
  onChange: string => any,
  formStyles: any,
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
    <FormElementHeader text={content.text} textStyle={formStyles.textStyle} />
    <View style={styles.pickerContainer}>
      <View style={[styles.pickerBackground, formStyles.elementContainerStyle]}>
        <Picker
          selectedValue={value ? value : options.value}
          style={[styles.pickerStyle]}
          onValueChange={itemValue => onChange(itemValue)}
          itemStyle={styles.pickerItemStyle}
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
