import React             from 'react'
import { View, Picker }  from 'react-native'
import FormElementHeader from './FormElementHeader'
import styles            from '../../styles'
import { _stripKeys }    from './ListComponent'
import { DISABLE }       from './../../forms/constants'

const Select = ({
  value,
  onChange,
  field: { content, options },
  formStyles = {},
  formValue,
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
}) => {
  const getFormItems = () => {
    const mappedObjects =
      formValue &&
      formValue.map(val => {
        const strippedObject = _stripKeys(val)
        const mappedObject = Object.values(strippedObject).map(value => {
          return (
            value &&
            value.value && {
              _id: value._id,
              value: value.value,
            }
          )
        })

        return mappedObject[0]
      })

    return mappedObjects
  }

  const currentItems = getFormItems()

  const filteredItems =
    options && options.repeats && options.repeats === DISABLE
      ? content &&
        content.items.filter(item => {
          const isSelected =
            currentItems && currentItems.find(ci => ci.value === item.value)
          return !isSelected
        })
      : content.items

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
            {content &&
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
