import React                  from 'react'
import { View, Text, Picker } from 'react-native'

const composeStyles = (...overrideStyles) => (...styles) => [
  ...styles,
  ...overrideStyles
]

const select = locals => {
  if (locals.hidden) return null

  const stylesheet = locals.stylesheet

  const formGroupStyle = locals.hasError
    ? stylesheet.formGroupStyle.error
    : stylesheet.formGroupStyle.normal

  const controlLabelStyle = composeStyles({
    color: locals.config.stepColor
  })(
    locals.hasError
      ? stylesheet.controlLabel.error
      : stylesheet.controlLabel.normal
  )

  const selectStyle = locals.hasError
    ? stylesheet.select.error
    : {
      ...stylesheet.select.normal,
      ...stylesheet.pickerContainer.normal
    }

  const helpBlockStyle = locals.hasError
    ? stylesheet.helpBlock.normal
    : stylesheet.helpBlock.error

  const errorBlockStyle = stylesheet.errorBlock

  const label = locals.label ? (
    <Text style={controlLabelStyle}>{locals.label}</Text>
  ) : null
  const help = locals.help &&
    locals.showHelp && <Text style={helpBlockStyle}>{locals.help}</Text>
  const error = locals.hasError &&
    locals.error &&
    locals.showError && (
      <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
        {locals.error}
      </Text>
    )

  const options = locals.options.map(({ value, text }) => (
    <Picker.Item key={value} value={value} label={text} />
  ))

  return (
    <View style={formGroupStyle}>
      {label}
      <View
        style={[
          {
            backgroundColor: locals.config.color
          },
          { ...stylesheet.pickerContainer.base }
        ]}
      >
        <Picker
          accessibilityLabel={locals.label}
          /* eslint-disable-next-line */
          ref="input"
          style={selectStyle}
          selectedValue={locals.value}
          onValueChange={locals.onChange}
          help={locals.help}
          enabled={locals.enabled}
          mode={locals.mode}
          prompt={locals.prompt}
          itemStyle={locals.itemStyle}
        >
          {options}
        </Picker>
      </View>
      {help}
      {error}
    </View>
  )
}

module.exports = select
