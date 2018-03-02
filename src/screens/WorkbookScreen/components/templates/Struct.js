import React from "react";
import { View, Text, Keyboard } from "react-native";
import Button from "../../../../components/Button";
import { deepBlue } from "../../../../constants/colors";
import styles from "../../styles";
import buttonStyles from "../../../../styles/components/Button/workbook";
import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";

// indicatorPosition: `none`, `top`, `right`, `bottom` and `left`
export default class Struct extends React.Component {
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
  label = () => {
    const { label, styles } = this.props;
    return (
      label && (
        <Text key={label} style={styles.formLabel}>
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
    const label = this.label();
    const children = [label ? [label] : [], ...rows];
    const topLevel = this.props.topLevel || false;
    const { fieldset } = this.props.styles;
    return (
      <View style={topLevel ? fieldset.topLevel : fieldset.normal}>
        {error}
        {children}
      </View>
    );
  }
}
