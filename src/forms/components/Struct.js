import React from 'react';
import { View, Text } from 'react-native';

// indicatorPosition: `none`, `top`, `right`, `bottom` and `left`
type StructProps = {
  hasError: boolean,
  error: string,
  styles: any,
  label: string,
  order: any,
  inputs: any,
  topLevel: any,
  config: any,
};

export default class Struct extends React.Component<StructProps> {
  error = () => {
    const { hasError, error, styles } = this.props;

    return (
      hasError &&
      error && (
        <Text
          key={error}
          accessibilityLiveRegion="polite"
          style={styles.errorBlock}
        >
          {error}
        </Text>
      )
    );
  };
  label = (style = {}) => {
    const { label, styles } = this.props;
    return (
      label && (
        <Text key={label} style={[styles.formLabel, { ...style }]}>
          {label}
        </Text>
      )
    );
  };

  rows = () => {
    const { order, inputs } = this.props;
    return (
      order &&
      order
        .map(name => inputs[name])
        .filter(
          input =>
            !input.props.options ||
            (input.props.options && !input.props.options.hidden)
        )
    );
  };

  render() {
    const error = this.error();
    const rows = this.rows();
    const label = this.label({
      color: this.props.config.stepColor,
    });
    const children = [label ? [label] : [], ...rows];
    const topLevel = this.props.topLevel || false;
    const { fieldset } = this.props.styles;
    const style = topLevel ? fieldset.topLevel : fieldset.normal;
    return (
      <View style={{ ...style }}>
        {error}
        {children}
      </View>
    );
  }
}
