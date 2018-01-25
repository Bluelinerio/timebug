import React                                           from 'react';
import { View, Text, TextInput, Platform, PixelRatio } from 'react-native';
import styles                                          from '../../styles/templates';

if(!styles ) {
  throw 'did not find stlye file'
}

class FocusedTextInput extends React.Component {
  state = {
    focus:false
  }

  render() {
    const { locals } = this.props
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

    let label = locals.label ? <Text style={[controlLabelStyle, {textAlign: 'center'}]}>{locals.label}</Text> : null;
    let help  = locals.help ? <Text style={helpBlockStyle}>{locals.help}</Text> : null;
    let error = locals.hasError && locals.error ?
                <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text> : null;

    return (
      <View style={formGroupStyle}>
        {label}
        <View style={textboxViewStyle}>
          <TextInput
            accessibilityLabel={locals.label}
            ref="input"
            autoCapitalize={locals.autoCapitalize}
            autoCorrect={locals.autoCorrect}
            autoFocus={locals.autoFocus}
            blurOnSubmit={locals.blurOnSubmit}
            editable={locals.editable}
            keyboardType={locals.keyboardType}
            maxLength={locals.maxLength}
            multiline={locals.multiline}
            onBlur={locals.onBlur}
            onEndEditing={()=> {
              this.setState({
                focus:false
              })
              locals.onEndEditing && locals.onEndEditing()
            }}
            onFocus={(focus) => {
              this.setState({
                focus:true
              })
              locals.onFocus && locals.onFocus()
            }}
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
            style={textboxStyle}
            value={locals.value}
          />
        </View>
        {help}
        {error}
      </View>
    )
  }
}

export default function customTextBox(locals) {
  if (locals.hidden) {
    return null;
  }
  return (
    <FocusedTextInput locals={locals} />
  )
}

