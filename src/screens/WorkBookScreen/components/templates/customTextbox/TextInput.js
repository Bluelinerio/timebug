// @flow
import React from 'react'
import { View, TextInput, Text } from 'react-native'

type State = {
  height: number
}
type Props = any & {
  style: any,
  onContentSizeChange: (event:any) => void,
}

export default class CustomTextInput extends React.Component<Props,State> {
  state:State = {
    height: 0
  }
  textInput:?TextInput = null

  focus () {
    this.textInput && this.textInput.focus()
  }

  error() {
    const { error, hasError, styles:{ errorBlockStyle } } = this.props;
    error && hasError
      ? (
        <Text 
          accessibilityLiveRegion="polite" 
          style={errorBlockStyle}>{error}
        </Text>
      )
      : null; 
  }
  help() {
    const { help, hasError, styles } = this.props; 
    help 
      ? (
        <Text style={ hasError ? styles.helpBlock.error : styles.helpBlock.normal}>
          {help}
        </Text>
      )
      : null
  }

  label() {
    const { label, hasError, styles } = this.props;
    return label 
      ? (
          <Text 
          style={[hasError ? styles.controlLabel.error : styles.controlLabel.normal, {
            textAlign: 'auto',
          }]}
        >
          {label}
        </Text>
      )
      : null  
  }

  onContentSizeChange= (event:any) => {
    const { nativeEvent:{ contentSize:{ height }}} = event;
    if (height !== this.state.height) {
      this.setState({
        height: height
      })
    }
    this.props.onContentSizeChange && this.props.onContentSizeChange(event)
  }

  renderTextInput = () => (
    <TextInput
      ref={(c) => (this.textInput = c)}
      onContentSizeChange={ this.props.multiline && this.props.multiline === true 
        ? this.onContentSizeChange 
        : this.props.onContentSizeChange
      }
      onChangeText={this.props.onChange}
      onChange={this.props.onChangeNative}
      accessibilityLabel={this.props.label}
      autoGrow={true}
      autoCapitalize={this.props.autoCapitalize}
      autoCorrect={this.props.autoCorrect}
      autoFocus={this.props.autoFocus}
      blurOnSubmit={this.props.blurOnSubmit}
      editable={this.props.editable}
      keyboardType={this.props.keyboardType}
      maxLength={this.props.maxLength}
      multiline={this.props.multiline}
      onBlur={this.props.onBlur}
      onEndEditing={this.props.onEndEditing}
      onFocus={this.props.onFocus}
      onLayout={this.props.onLayout}
      onSelectionChange={this.props.onSelectionChange}
      onSubmitEditing={this.props.onSubmitEditing}
      placeholderTextColor={this.props.placeholderTextColor}
      secureTextEntry={this.props.secureTextEntry}
      selectTextOnFocus={this.props.selectTextOnFocus}
      selectionColor={this.props.selectionColor}
      numberOfLines={this.props.numberOfLines}
      underlineColorAndroid={this.props.underlineColorAndroid}
      clearButtonMode={this.props.clearButtonMode}
      clearTextOnFocus={this.props.clearTextOnFocus}
      enablesReturnKeyAutomatically={this.props.enablesReturnKeyAutomatically || true}
      keyboardAppearance={this.props.keyboardAppearance}
      onKeyPress={this.props.onKeyPress}
      returnKeyType={this.props.returnKeyType}
      selectionState={this.props.selectionState}
      placeholder={this.props.placeholder}
      style={[this.props.hasError 
        ? this.props.styles.textBox.error 
        : this.props.editable !== false
          ? this.props.styles.textBox.normal 
          : this.props.styles.textbox.notEditable, { 
        height: Math.min(400, Math.max(this.state.height, 44)) }
      ]}
      value={this.props.value}
    />
  )

  render () {
    const {
      styles,
      hasError,
      editable
    } = this.props;

    const formGroupStyle    = hasError 
      ? styles.formGroup.error
      : styles.formGroup.normal;

    const textboxViewStyle  = hasError 
      ? styles.textBoxView.error 
      : editable !== false
        ? styles.textBoxView.normal 
        : styles.textBoxView.notEditable
        
  const label = this.label()  
  const help  = this.help()
  const error = this.error()
  const textInput = this.renderTextInput();

  return (
    <View style={[formGroupStyle, {
      flex:1,
      marginTop: 22,
      marginBottom: 22,
    }]}>
      <View style={[{
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 7,
        justifyContent:'flex-end'
      }]}>
        {label}
        {textInput}
      </View>
      {help}
      {error}
    </View>
    )
  }
}

