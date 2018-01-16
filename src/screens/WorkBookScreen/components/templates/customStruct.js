import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import FormPages from '../FormPages'

function struct(locals) {
  let pagesRef = null;
  if (locals.hidden) {
    return null;
  }

  const stylesheet = locals.stylesheet;
  const fieldsetStyle = stylesheet.fieldset;
  let controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  const label = locals.label ? <Text style={locals.hasError ? stylesheet.controlLabel.error : stylesheet.controlLabel.normal}>{locals.label}</Text> : null;

  const error = locals.hasError && locals.error ? <Text accessibilityLiveRegion='polite' style={stylesheet.errorBlock}>{locals.error}</Text> : null;

  const rows = locals.order.map(name =>  locals.inputs[name] )

  const filteredRows = rows.filter(input => {
    return !input.props.options || (input.props.options && !input.props.options.hidden);
  })
  
  let page = null;
  if (locals.changedPage) {
    page = 0;
  }

  return (
    <View style={{ flex: 1 }}>
      {error}
      {locals.label ? (
        <FormPages 
          page={page} 
          horizontal={false} 
          containerStyle={{ 
            padding: 
            20}} 
          indicatorColor="#CCC"
          onScrollEnd={(index) => Keyboard.dismiss() }
        >
          <Text style={stylesheet.formLabel}>{locals.label}</Text>
          {filteredRows}
        </FormPages>
      ) : (
        <FormPages 
          page={page}
          horizontal={false}
          containerStyle={{ padding: 20}}
          indicatorColor="#CCC"
          onScrollEnd={(index) => Keyboard.dismiss() }
        >
          {filteredRows}
        </FormPages>
      )}
    </View>
  );
}

export {
  FormPages
}

export default struct;
