import React from "react"
import { View, Text, Switch } from "react-native"

const checkbox = (locals) => {
  if (locals.hidden) 
    return null;

  const stylesheet = locals.stylesheet;

  const formGroupStyle = locals.hasError 
    ? stylesheet.formGroup.error
    : stylesheet.formGroup.normal

  const controlLabelStyle = [
        locals.hasError 
            ? stylesheet.controlLabel.error
            : stylesheet.controlLabel.normal,
        {
            color: locals.config.stepColor
        }
  ]

  const checkboxStyle = locals.hasError 
    ? stylesheet.checkbox.error
    : stylesheet.checkbox.normal

  const helpBlockStyle = locals.hasError
    ? stylesheet.helpBlock.error
    : stylesheet.helpBlock.normal;

  const errorBlockStyle = stylesheet.errorBlock;

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

  return (
    <View style={formGroupStyle}>
      {label}
      <Switch
        accessibilityLabel={locals.label}
        ref="input"
        disabled={locals.disabled}
        onTintColor={locals.onTintColor}
        thumbTintColor={locals.thumbTintColor}
        tintColor={locals.tintColor}
        style={checkboxStyle}
        onValueChange={value => locals.onChange(value)}
        value={locals.value}
      />
      {help}
      {error}
    </View>
  );
}

export default checkbox