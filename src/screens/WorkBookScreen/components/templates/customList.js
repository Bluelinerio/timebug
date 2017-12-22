import React                                                from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon                                                 from 'react-native-vector-icons/MaterialIcons';
import { styles }                                           from 'react-native-theme';

function renderRowWithoutButtons(item) {
  return <View style={{ flex: 1 }} key={item.key}>{item.input}</View>;
}

function renderRowButton(button) {
  return (
    <TouchableOpacity
      key={button.type}
      style={styles.customListAddButton}
      onPress={button.click}
    >
      <Icon
        name="add"
        size={16}
        color="black"
      />
    </TouchableOpacity>
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

  let addButton = itemsCount && itemsCount >= locals.config.maxLines ? null : locals.add ? renderRowButton(locals.add, stylesheet) : null;

  return (
    <View style={[fieldsetStyle, { flex: 1 }]}>
      {label}
      {error}
      {rows}
      {addButton}
    </View>
  );
}

