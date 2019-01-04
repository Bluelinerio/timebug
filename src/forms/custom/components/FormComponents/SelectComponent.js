import React                      from 'react'
import { Picker, Platform, View } from 'react-native'
import ModalSelector              from 'react-native-modal-selector'
import FormElementHeader          from './FormElementHeader'
import styles                     from '../../styles'
import { DISABLE }                from './../../forms/constants'

const AndroidPicker = (props: any) => {
  const { options, items, onChange, formStyles, value } = props
  return (
    <View style={[styles.pickerBackground, formStyles.elementContainerStyle]}>
      <Picker
        selectedValue={value ? value : options.default}
        style={[styles.pickerStyle]}
        onValueChange={onChange}
        itemStyle={styles.pickerItemStyle}
      >
        {items &&
          items.map(({ value, text }) => (
            <Picker.Item key={value} value={value} label={text} />
          ))}
      </Picker>
    </View>
  )
}

const IOSPicker = (props: any) => {
  const { items, onChange, formStyles, value } = props

  const data =
    items &&
    items.map(({ value, text }) => ({
      key: value,
      label: text,
    }))

  return (
    data && (
      <View style={[styles.pickerStyle, formStyles.elementContainerStyle]}>
        <ModalSelector
          initValue={value ? value : data[0].key}
          data={data}
          onChange={onChange}
        />
      </View>
    )
  )
}

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
  const onValueChange = itemValue => {
    onChange(itemValue)
  }

  const onIosChange = item => {
    onChange(item.key)
  }

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
        {Platform.OS === 'ios' ? (
          <IOSPicker
            value={value}
            formStyles={formStyles}
            items={filteredItems}
            options={options}
            onChange={onIosChange}
          />
        ) : (
          <AndroidPicker
            value={value}
            formStyles={formStyles}
            items={filteredItems}
            options={options}
            onChange={onValueChange}
          />
        )}
      </View>
    </React.Fragment>
  )
}

export default Select
