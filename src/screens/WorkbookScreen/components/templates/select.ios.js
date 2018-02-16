import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';
import PickerIOS from './ios/PickerIOS';

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
    onChange
  } = props;

  const children = options.map(({ value, text }) => (
    <Picker.Item key={value} value={value} label={text} />
  ));

  const text = options.find(option => option.value === value).text;
  return (
    <View
      style={
        hasError ? stylesheet.formGroup.normal : stylesheet.formGroup.error
      }
    >
      {label && (
        <Text
          style={
            hasError
              ? stylesheet.controlLabel.error
              : stylesheet.controlLabel.normal
          }
        >
          {label}
        </Text>
      )}
      <PickerIOS
        accessibilityLabel={label}
        value={value}
        text={text}
        onBeginEditing={() => null }
        onCancel={() => null}
        onChange={onChange}
        styles={{
          container: hasError
            ? stylesheet.pickerContainer.error
            : stylesheet.pickerContainer.normal,
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
          <Text accessibilityLiveRegion='polite' style={stylesheet.errorBlock}>
            {error}
          </Text>
        )}
    </View>
  );
}