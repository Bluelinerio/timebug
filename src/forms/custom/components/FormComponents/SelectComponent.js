import React             from 'react'
import { View, Picker }  from 'react-native'
import FormElementHeader from './FormElementHeader'
import styles            from '../../styles'
import { DISABLE }       from './../../forms/constants'

const Select = ({
  value,
  onChange,
  field: { content, options },
  formStyles = {},
  __extraProps = {},
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
      default?: string,
      repeats?: string,
    },
  },
  formValue: any,
  __extraProps: {
    editObjectId: string,
    filterFunction?: (Array<any>) => Array<any>,
  },
}) => {
  const { filterFunction = null } = __extraProps
  const filteredItems =
    content && content.items
      ? options &&
        options.repeats &&
        options.repeats === DISABLE &&
        filterFunction !== null
        ? filterFunction(content.items)
        : content.items
      : []

  return (
    <React.Fragment>
      <FormElementHeader text={content.text} textStyle={formStyles.textStyle} />
      <View style={styles.pickerContainer}>
        <View
          style={[styles.pickerBackground, formStyles.elementContainerStyle]}
        >
          <Picker
            selectedValue={value ? value : options.default}
            style={[styles.pickerStyle]}
            onValueChange={itemValue => onChange(itemValue)}
            itemStyle={styles.pickerItemStyle}
          >
            {filteredItems &&
              filteredItems.map(({ value, text }) => (
                <Picker.Item key={value} value={value} label={text} />
              ))}
          </Picker>
        </View>
      </View>
    </React.Fragment>
  )
}

export default Select
