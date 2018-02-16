import React from 'react';
import { View, Text, Picker } from 'react-native';
import SelectInput from 'react-native-select-input-ios';

function select(locals) {
  if (locals.hidden) {
    return null;
  }

  const stylesheet = locals.stylesheet;
  const pickerLabelStyle = stylesheet.pickerLabelStyle.normal;
  let formGroupStyle = stylesheet.formGroup.normal;
  let controlLabelStyle = stylesheet.controlLabel.normal;
  let selectStyle = Object.assign(
    {},
    stylesheet.select.normal,
    stylesheet.pickerContainer.normal
  );
  let helpBlockStyle = stylesheet.helpBlock.normal;
  const errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    selectStyle = stylesheet.pickerContainer.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  const label = locals.label ? (
    <Text style={controlLabelStyle}>{locals.label}</Text>
  ) : null;
  const help = locals.help ? (
    <Text style={helpBlockStyle}>{locals.help}</Text>
  ) : null;
  const error =
    locals.hasError && locals.error ? (
      <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
        {locals.error}
      </Text>
    ) : null;

  const options = locals.options.map(({ value, text }) => (
    { value, label: text }
  ));

  return (
    <View style={formGroupStyle}>
      {label}
      <SelectInput
        value={locals.value}
        style={selectStyle}
        labelStyle={pickerLabelStyle}
        options={options}
        onSubmitEditing={locals.onChange}
      />
      {help}
      {error}
    </View>
  );
}

export default select;



// style={selectStyle}
// help={locals.help}
// enabled={locals.enabled}
// mode={locals.mode}
// prompt={locals.prompt}
// itemStyle={locals.itemStyle}