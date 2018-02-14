import React from 'react';
import { ScrollView, Text, Keyboard } from 'react-native';
import Button from '../../../../components/Button'
import { deepBlue } from '../../../../constants/colors'
import styles from '../../styles';
import buttonStyles from '../../../../styles/components/Button/workbook';
import TouchableBounce 			from 'react-native/Libraries/Components/Touchable/TouchableBounce'

// indicatorPosition: `none`, `top`, `right`, `bottom` and `left`
export default class Struct extends React.Component {
  
  error = () => {
    return this.props.hasError && this.props.error 
      ? <Text 
          key={this.props.error} 
          accessibilityLiveRegion='polite'
          style={props.styles.errorBlock}
        >
          {this.props.error}
        </Text>
      : null;
  }
  label = () => {
    if(!this.props.label) return null
    return (
      <Text 
        key={this.props.label} 
        style={this.props.styles.formLabel}
      >
        {this.props.label}
      </Text> 
    )
  }

  rows = () => {
    return this.props.order && this.props.order
      .map(name => this.props.inputs[name])
      .filter(input => !input.props.options || (input.props.options && !input.props.options.hidden))
  }

  render() {
    const error = this.error();
    const rows = this.rows()
    const label = this.label()
    const children = [(label ? [label] : []), ...rows]
    const topLevel = this.props.topLevel || false
    return (
      <ScrollView style={{ 
        paddingHorizontal: topLevel ? 20 : 0,
        top: 20,
        flex: 1 
      }}>
        {error}
        {children}
      </ScrollView>
    )
  }
}