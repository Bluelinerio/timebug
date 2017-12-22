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

  if(locals.path.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        {label}
        {error}
        <View style={{flex: 1, justifyContent: 'center'}}>
          {rows}
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        {error}
        {locals.label ? (
          <Pages horizontal={false} containerStyle={{ padding: 20}} indicatorColor="#CCC">
            <Text style={stylesheet.formLabel}>{locals.label}</Text>
            {filteredRows}
          </Pages>
        ) : (
          <Pages horizontal={false} containerStyle={{ padding: 20}} indicatorColor="#CCC">
            {filteredRows}
          </Pages>
        )}
      </View>
    );
  }
}

module.exports = struct;
