import React                        from 'react'
import { Picker, Platform, View }   from 'react-native'
import ModalSelector                from 'react-native-modal-selector'
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
  const onValueChange = (itemValue) => {
    onChange(itemValue)
  };

  const onChangeIosSelector = (item) => {
    onChange(item.key)
  };

  const renderAndroidPicker = () => (
    <Picker
      selectedValue={value ? value : options.value}
      style={[connectedComponentStyles.pickerStyle, formStyles.elementContainerStyle]}
      onValueChange={onValueChange}
      itemStyle={connectedComponentStyles.pickerItemStyle}
    >
      {content &&
        content.items.map(({ value, text }) => (
          <Picker.Item key={value} value={value} label={text} />
        ))}
    </Picker>
  );

  const renderiOSPicker = () => {
    const data = content && content.items.map(({ value, text }) => ({
      key: value,
      label: text,
    }));

    return data && (
      <View style={[connectedComponentStyles.pickerStyle, formStyles.elementContainerStyle]}>
        <ModalSelector
          initValue={value ? value : data[0].key}
          data={data}
          onChange={onChangeIosSelector}
        />
      </View>
    );
  }

  return (
    <React.Fragment>
      { Platform.OS === 'ios' ? renderiOSPicker() : renderAndroidPicker()}
    </React.Fragment>
  );
}

export default Select
