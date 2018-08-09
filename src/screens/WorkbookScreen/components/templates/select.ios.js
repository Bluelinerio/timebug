import React                  from 'react';
import PropTypes              from 'prop-types';
import { View, Text, Picker } from 'react-native';
import PickerIOS              from './ios/PickerIOS';

const composeStyles = (...overrideStyles) => (...styles) => 
  [
    ...styles,
    ...overrideStyles
  ]

export default function select(props) {
  if (props.hidden) {
    return null;
  }
  const {
    stylesheet,
    hasError,
    label,
    help,
    error,
    options,
    value,
    onChange,
    config
  } = props;

  const children = options.map(({ value, text }) => (
    <Picker.Item key={value} value={value} label={text} />
  ));

  const labelStyles = composeStyles({
    color: config.stepColor
  })(hasError
    ? stylesheet.controlLabel.error
    : stylesheet.controlLabel.normal
  )
  
  const text = options.find(option => option.value === value).text;
  return (
    <View
      style={
        hasError ? stylesheet.formGroupStyle.normal : stylesheet.formGroupStyle.error
      }
    >
      {label && (
        <Text
          style={labelStyles}
        >
          {label}
        </Text>
      )}
      <PickerIOS
        accessibilityLabel={label}
        value={value}
        text={text}
        onBeginEditing={() => null}
        onCancel={() => null}
        onChange={onChange}
        styles={{
          container: [
            hasError
              ? stylesheet.pickerContainer.error
              : stylesheet.pickerContainer.normal,
            {
              backgroundColor: config.color
            }
          ],
          touchable: [
            hasError
              ? stylesheet.pickerTouchable.error
              : stylesheet.pickerTouchable.normal,
            stylesheet.pickerTouchable.active
          ],
          text: hasError
            ? stylesheet.pickerValue.error
            : stylesheet.pickerValue.normal
        }}
      >
        {children}
      </PickerIOS>
      {help && (
        <Text
          style={
            hasError ? stylesheet.helpBlock.error : stylesheet.helpBlock.normal
          }
        >
          {help}
        </Text>
      )}
      {hasError &&
        error && (
          <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>
            {error}
          </Text>
        )}
    </View>
  );
}
