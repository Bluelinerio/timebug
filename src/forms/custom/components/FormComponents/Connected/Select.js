import React from 'react'
import { Picker, Platform } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import { connectedComponentStyles } from '../../../styles'

const Select = ({
  value,
  onChange,
  component: { content, options },
  formStyles = {},
}: {
  value: string,
  onChange: string => any,
  formStyles: any,
  component: {
    content: {
      items: Array<{ text: string, value: string }>,
    },
    options?: {
      default: string,
    },
  },
}) => {
  const onValueChange = itemValue => {
    onChange(itemValue)
  }

  const onChangeIosSelector = item => {
    onChange(item.key)
  }

  const renderAndroidPicker = () => (
    <Picker
      selectedValue={value ? value : options.value}
      style={[
        connectedComponentStyles.pickerStyle,
        formStyles.elementContainerStyle,
      ]}
      onValueChange={onValueChange}
      itemStyle={connectedComponentStyles.pickerItemStyle}
    >
      {content &&
        content.items.map(({ value, text }) => (
          <Picker.Item key={value} value={value} label={text} />
        ))}
    </Picker>
  )

  const renderiOSPicker = () => {
    const data =
      content &&
      content.items.map(({ value, text }) => ({
        key: value,
        label: text,
      }))

    const textValue =
      value && data
        ? data.find(element => element.key === value).label
        : data[0].label

    return (
      data && (
        <ModalSelector
          initValue={textValue}
          data={data}
          onChange={onChangeIosSelector}
          selectStyle={connectedComponentStyles.modalPicker}
          selectTextStyle={connectedComponentStyles.modalText}
        />
      )
    )
  }

  return (
    <React.Fragment>
      {Platform.OS === 'ios' ? renderiOSPicker() : renderAndroidPicker()}
    </React.Fragment>
  )
}

export default Select
