import React                              from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

function renderRowWithoutButtons(item) {
  return <View key={item.key}>{item.input}</View>;
}

function renderRowButton(button, stylesheet, style) {
  return (
    <TouchableHighlight key={button.type} style={[ stylesheet.button, style, {marginLeft: 15} ]} onPress={button.click}>
      <Text style={stylesheet.buttonText}>{button.label}</Text>
    </TouchableHighlight>
  );
}

function renderButtonGroup(buttons, stylesheet) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {buttons.map(button => renderRowButton(button, stylesheet, { width: 50 }))}
    </View>
  );
}

function renderRow(item, stylesheet) {
  return (
    <View key={item.key} style={{ flexDirection: 'row' }}>
      <View style={{ flex: 3 }}>
        {item.input}
      </View>
      <View style={{ flex: 1 }}>
        {renderButtonGroup(item.buttons, stylesheet)}
      </View>
    </View>
  );
}

export default function customList(locals) {
  if (locals.hidden) {
    return null;
  }

  let stylesheet        = locals.stylesheet;
  let fieldsetStyle     = stylesheet.fieldset;
  let controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  let label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  let error = locals.hasError && locals.error ?
              <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>{locals.error}</Text> : null;

  let itemsCount = locals.items.length;

  let rows = locals.items.map((item) => renderRowWithoutButtons(item));

  let addButton = itemsCount && itemsCount >= locals.config.maxLines ? null :  locals.add ? renderRowButton(locals.add, stylesheet) : null;

  return (
    <View style={fieldsetStyle}>
      {label}
      {error}
      {rows}
      {addButton}
    </View>
  );
}

