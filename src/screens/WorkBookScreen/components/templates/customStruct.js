import React from 'react';
import { View, Text } from 'react-native';
import { Pages } from 'react-native-pages';

function struct(locals) {
  if (locals.hidden) {
    return null;
  }

  const stylesheet = locals.stylesheet;
  const fieldsetStyle = stylesheet.fieldset;
  let controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  const label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  const error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>{locals.error}</Text> : null;

  const rows = locals.order.map(function (name) {
    return locals.inputs[name];
  });

  const filteredRows = rows.filter(input => {
    return !input.props.options || (input.props.options && !input.props.options.hidden);
  })

  return (
    <View style={{ flex: 1, backgroundColor: '#CCC' }}>
      {label}
      {error}
      {locals.path.length > 1 ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          {rows}
        </View>
      ) : (
        <Pages horizontal={false} containerStyle={{ padding: 20}}>
          {filteredRows}
        </Pages>
      )}
    </View>
  );
}

module.exports = struct;
