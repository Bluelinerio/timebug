// @flow
/* eslint-disable react/prop-types*/
import React from 'react';
import { View, TextInput, Text, Animated } from 'react-native';
import { compose } from 'redux';

type State = {
  height: number,
  fieldFocused: boolean,
  value: String,
  fadeAnim: Animated.AnimatedValue,
};

type Props = {
  style?: any,
  onContentSizeChange?: (event: any) => void,
};

class CustomTextInput extends React.Component<Props, State> {
  input: ?TextInput = null;

  error(styles) {
    const { error, hasError } = this.props;
    error && hasError ? (
      <Text accessibilityLiveRegion="polite" style={styles}>
        {error}
      </Text>
    ) : null;
  }

  help(styles) {
    const { help } = this.props;
    help ? <Text style={styles}>{help}</Text> : null;
  }

  floatingLabel(labelStyles) {
    const { label } = this.props;
    const { fadeAnim } = this.state;
    return label ? (
      <Animated.Text
        style={[
          ...labelStyles,
          {
            textAlign: 'auto',
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0],
                }),
              },
            ],
          },
        ]}
      >
        {label}
      </Animated.Text>
    ) : null;
  }
  label(labelStyles) {
    const { label } = this.props;
    return label ? (
      <Text
        style={[
          ...labelStyles,
          {
            textAlign: 'auto',
          },
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
      fadeAnim: props.value ? new Animated.Value(1) : new Animated.Value(0),
    };
  }

  focus() {
    this.input && this.input.focus();
  }

  onFocus = () => {
    const { fadeAnim } = this.state;
    Animated.spring(fadeAnim, {
      toValue: 1,
      friction: 5,
    }).start();
    this.setState({
      fieldFocused: true,
    });
    this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    const { text, fadeAnim } = this.state;
    if (!text || !text.length) {
      Animated.timing(fadeAnim, {
        toValue: 0,
      }).start();
    }
    this.setState({
      fieldFocused: false,
    });
    this.props.onBlur && this.props.onBlur();
  };

  onChangeText = (text: string) => {
    const then = this.props.onChange ? () => this.props.onChange(text) : null;
    this.setState(
      {
        text,
      },
      then
    );
  };

  onContentSizeChange = (event: any) => {
    const { nativeEvent: { contentSize: { height } } } = event;
    if (height !== this.state.height) {
      this.setState({
        height: height,
      });
    }
    this.props.onContentSizeChange && this.props.onContentSizeChange(event);
  };

  renderTextInput = styles => (
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
      style={styles}
      value={this.props.value}
    />
  );

  composeStyles(...overrideStyles) {
    return (...styles) => [...styles, ...overrideStyles];
  }

  render() {
    const { styles, hasError, editable, floatingLabel, config } = this.props;

    const formGroupStyle = compose(
      this.composeStyles(
        hasError ? styles.formGroupStyle.error : styles.formGroupStyle.normal
      )
    )();

    const textboxViewStyle = compose(
      this.composeStyles({
        backgroundColor: config.color,
      }),
      this.composeStyles(
        hasError
          ? styles.textBoxView.error
          : editable !== false
            ? styles.textBoxView.normal
            : styles.textBoxView.notEditable
      ),
      this.composeStyles(styles.textBoxView.base)
    )();

    const labelStyles = compose(
      this.composeStyles({ color: config.stepColor })
    )(hasError ? styles.controlLabel.error : styles.controlLabel.normal);

    const helpStyles = [
      hasError ? styles.helpBlock.error : styles.helpBlock.normal,
    ];

    const errorStyles = styles.errorBlockStyle;

    const textInputStyles = compose(
      this.composeStyles({
        height: Math.min(400, Math.max(this.state.height, 44)),
      })
    )(
      this.props.hasError
        ? this.props.styles.textBox.error
        : this.props.editable !== false
          ? this.props.styles.textBox.normal
          : this.props.styles.textbox.notEditable
    );

    const label = floatingLabel
      ? this.floatingLabel(labelStyles)
      : this.label(labelStyles); // text.length > 0 ? null :
    const help = this.help(helpStyles);
    const error = this.error(errorStyles);
    const textInput = this.renderTextInput(textInputStyles);

    return (
      <View style={formGroupStyle}>
        {label}
        <View style={textboxViewStyle}>{textInput}</View>
        {help}
        {error}
      </View>
    );
  }
}

export default CustomTextInput;
