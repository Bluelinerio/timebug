var React = require('react');
var { View, Text } = require('react-native');
import { Pages } from 'react-native-pages';

function struct(locals) {
  if (locals.hidden) {
    return null;
  }

  var stylesheet = locals.stylesheet;
  var fieldsetStyle = stylesheet.fieldset;
  var controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  var label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  var error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>{locals.error}</Text> : null;

  var rows = locals.order.map(function (name) {
    return locals.inputs[name];
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#CCC' }}>
      {label}
      {error}
      {locals.path.length > 1 ? (
        <View style={{flex: 1}}>
          {rows}
        </View>
      ) : (
        <Pages horizontal={false} containerStyle={{ padding: 20, justifyContent: 'center'}}>
          {rows}
        </Pages>
      )}
    </View>
  );
}

module.exports = struct;
