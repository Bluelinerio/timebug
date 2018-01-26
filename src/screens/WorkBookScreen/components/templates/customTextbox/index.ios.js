import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Platform, 
  PixelRatio 
} from 'react-native';
import styles from '../../../styles/templates';
import ExpandingTextInput from './ExpandingTextInput'

if(!styles ) {
  throw 'did not find stlye file'
}

const PlaformTextInput = (props) => Platform.OS === 'ios' 
  ? <ExpandingTextInput {...props} /> 
  : <TextInput  {...props} /> 

export default function customTextBox(locals) {
  if (locals.hidden) {
    return null;
  }
  let stylesheet        = locals.stylesheet;
  let formGroupStyle    = stylesheet.formGroup.normal;
  let controlLabelStyle = stylesheet.controlLabel.normal;
  let textboxStyle      = styles.formsTextBoxNormal;
  let textboxViewStyle  = styles.formsTextBoxView;
  let helpBlockStyle    = stylesheet.helpBlock.normal;
  let errorBlockStyle   = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle    = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxStyle      = styles.formsTextBoxError;
    textboxViewStyle  = styles.formsTextBoxViewError;
    helpBlockStyle    = stylesheet.helpBlock.error;
  }

  if (locals.editable === false) {
    textboxStyle     = stylesheet.textbox.notEditable;
    textboxViewStyle = stylesheet.textboxView.notEditable;
  }

  let label = locals.label &&  
    <Text 
      style={[controlLabelStyle, {
        textAlign: 'center'
      }]}
    >
      {locals.label}
    </Text>
  
  const help  = locals.help && 
    <Text style={[helpBlockStyle, {
      marginTop:2,
      paddingHorizontal: 7
    }]}>
      {locals.help}
    </Text>

  let error = locals.hasError && locals.error ?
              <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text> : null;

  return (
    <View style={[formGroupStyle, {
      flex:1,
      marginTop: 22,
      marginBottom:22,
    }]}>
      {label}
      <View style={[{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#f8f8f8',
        marginTop: 10,
        justifyContent:'flex-end'
      }]}>
        <PlaformTextInput
          accessibilityLabel={locals.label}
          //ref="input"
          autoCapitalize={locals.autoCapitalize}
          autoCorrect={locals.autoCorrect}
          autoFocus={locals.autoFocus}
          blurOnSubmit={locals.blurOnSubmit}
          editable={locals.editable}
          keyboardType={locals.keyboardType}
          maxLength={locals.maxLength}
          multiline={locals.multiline}
          onBlur={locals.onBlur}
          onEndEditing={locals.onEndEditing}
          onFocus={locals.onFocus}
          onLayout={locals.onLayout}
          onSelectionChange={locals.onSelectionChange}
          onSubmitEditing={locals.onSubmitEditing}
          onContentSizeChange={locals.onContentSizeChange}
          placeholderTextColor={locals.placeholderTextColor}
          secureTextEntry={locals.secureTextEntry}
          selectTextOnFocus={locals.selectTextOnFocus}
          selectionColor={locals.selectionColor}
          numberOfLines={locals.numberOfLines}
          underlineColorAndroid={locals.underlineColorAndroid}
          clearButtonMode={locals.clearButtonMode}
          clearTextOnFocus={locals.clearTextOnFocus}
          enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
          keyboardAppearance={locals.keyboardAppearance}
          onKeyPress={locals.onKeyPress}
          returnKeyType={locals.returnKeyType}
          selectionState={locals.selectionState}
          onChangeText={(value) => locals.onChange(value)}
          onChange={locals.onChangeNative}
          placeholder={locals.placeholder}
          style={[textboxStyle]}
          value={locals.value}
        />
      </View>
      {help}
      {error}
    </View>
  );
}

