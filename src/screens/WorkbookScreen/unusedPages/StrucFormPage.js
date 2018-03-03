import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import FormPages from '../FormPages';
import Button from '../../../../components/Button';
import { deepBlue } from '../../../../constants/colors';
import styles from '../../styles';
import buttonStyles from '../../../../styles/components/Button/workbook';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

// indicatorPosition: `none`, `top`, `right`, `bottom` and `left`
export default class StrucFormPage extends React.Component {
  state: {
    index: number
  } = { index: 0 };

  error = () => {
    return this.props.hasError && this.props.error ? (
      <Text accessibilityLiveRegion="polite" style={props.styles.errorBlock}>
        {this.props.error}
      </Text>
    ) : null;
  };
  label = () => {
    if (!this.props.label) return null;
    return <Text style={this.props.styles.formLabel}>{this.props.label}</Text>;
  };

  rows = () => {
    return (
      this.props.order &&
      this.props.order
        .map(name => this.props.inputs[name])
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
    const { changedPage } = this.props;
    const { index } = this.state;
    const topLevel = this.props.topLevel || false;
    const rest = {
      ref: ref => (this.form = ref),
      page: changedPage ? 0 : index,
      horizontal: false,
      containerStyle: {
        paddingHorizontal: topLevel ? 20 : 0,
        top: 20
      },
      indicatorColor: '#CCC',
      onScrollEnd: index => {
        Keyboard.dismiss();
        this.setState({
          index
        });
      },
      onEndEached: () => {}
    };
    return (
      <View style={{ flex: 1 }}>
        {error}
        <FormPages indicatorPosition={topLevel ? `right` : `none`} {...rest}>
          {children}
        </FormPages>
      </View>
    );
  }
}
