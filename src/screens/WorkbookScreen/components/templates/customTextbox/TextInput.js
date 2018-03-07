// @flow
import React from 'react';
import { View, TextInput, Text, Animated } from 'react-native';

type State = {
  height: number,
  fieldFocused: boolean,
  value: String,
  fadeAnim: Animated.AnimatedValue
};
type Props = {
  style?: any,
  onContentSizeChange?: (event: any) => void
};

export default class CustomTextInput extends React.Component<Props, State> {
  input: ?TextInput = null;
  error() {
    const { error, hasError, styles: { errorBlockStyle } } = this.props;
    error && hasError ? (
      <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
        {error}
      </Text>
    ) : null;
  }
  help() {
    const { help, hasError, styles } = this.props;
    help ? (
      <Text style={hasError ? styles.helpBlock.error : styles.helpBlock.normal}>
        {help}
      </Text>
    ) : null;
  }

  floatingLabel() {
    const { label, hasError, styles } = this.props;
    const { fadeAnim } = this.state;
    return label ? (
      <Animated.Text
        style={[
          hasError ? styles.controlLabel.error : styles.controlLabel.normal,
          {
            textAlign: 'auto',
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0]
                })
              }
            ]
          }
        ]}
      >
        {label}
      </Animated.Text>
    ) : null;
  }
  label() {
    const { label, hasError, styles } = this.props;
    return label ? (
      <Text
        style={[
          hasError ? styles.controlLabel.error : styles.controlLabel.normal,
          {
            textAlign: 'auto'
          }
        ]}
      >
        {label}
      </Text>
    ) : null;
  }

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      fieldFocused: props.value ? true : false,
      text: props.value ? String(props.value) : '',
      fadeAnim: props.value ? new Animated.Value(1) : new Animated.Value(0)
    };
  }

  focus() {
    this.input && this.input.focus();
  }

  onFocus = () => {
    const { fadeAnim } = this.state;
    Animated.spring(fadeAnim, {
      toValue: 1,
      friction: 5
    }).start();
    this.setState({
      fieldFocused: true
    });
    this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    const { text, fadeAnim } = this.state;
    if (!text || !text.length) {
      Animated.timing(fadeAnim, {
        toValue: 0
      }).start();
    }
    this.setState({
      fieldFocused: false
    });
    this.props.onBlur && this.props.onBlur();
  };

  onChangeText = (text: string) => {
    const then = this.props.onChange ? () => this.props.onChange(text) : null;
    this.setState(
      {
        text
      },
      then
    );
  };

  onContentSizeChange = (event: any) => {
    const { nativeEvent: { contentSize: { height } } } = event;
    if (height !== this.state.height) {
      this.setState({
        height: height
      });
    }
    this.props.onContentSizeChange && this.props.onContentSizeChange(event);
  };

  renderTextInput = () => (
    <TextInput
      ref={c => (this.input = c)}
      onContentSizeChange={
        this.props.multiline && this.props.multiline === true
          ? this.onContentSizeChange
          : this.props.onContentSizeChange
      }
      onBlur={this.onBlur}
      onFocus={this.onFocus}
      textAlign={this.props.textAlign}
      bufferDelay={this.props.bufferDelay}
      onChangeText={this.onChangeText}
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
      onEndEditing={this.props.onEndEditing}
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
      enablesReturnKeyAutomatically={
        this.props.enablesReturnKeyAutomatically || true
      }
      keyboardAppearance={this.props.keyboardAppearance}
      onKeyPress={this.props.onKeyPress}
      returnKeyType={this.props.returnKeyType}
      selectionState={this.props.selectionState}
      placeholder={this.props.placeholder}
      style={[
        this.props.hasError
          ? this.props.styles.textBox.error
          : this.props.editable !== false
            ? this.props.styles.textBox.normal
            : this.props.styles.textbox.notEditable,
        {
          height: Math.min(400, Math.max(this.state.height, 44))
        }
      ]}
      value={this.props.value}
    />
  );

  render() {
    const { styles, hasError, editable, floatingLabel } = this.props;

    const { text } = this.state;
    const formGroupStyle = hasError
      ? styles.formGroup.error
      : styles.formGroup.normal;

    const textboxViewStyle = hasError
      ? styles.textBoxView.error
      : editable !== false
        ? styles.textBoxView.normal
        : styles.textBoxView.notEditable;

    const label = floatingLabel ? this.floatingLabel() : this.label(); // text.length > 0 ? null :
    const help = this.help();
    const error = this.error();
    const textInput = this.renderTextInput();

    return (
      <View
        style={[
          formGroupStyle,
          {
            flex: 1,
            marginTop: 22,
            marginBottom: 22
          }
        ]}
      >
        {label}
        <View
          style={[
            {
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#ccc',
              paddingVertical: 10,
              paddingHorizontal: 7,
              justifyContent: 'flex-end'
            }
          ]}
        >
          {textInput}
        </View>
        {help}
        {error}
      </View>
    );
  }
}
