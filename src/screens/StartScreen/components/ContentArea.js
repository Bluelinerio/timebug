//@flow
import React from 'react';
import { View } from 'react-native';
import OptionsButton from '../containers/OptionButtonContainer';
import styles from '../styles';

type ContentAreaProps = {
  steps: Array<any>,
  user: any,
  stepColors: any,
  v2?: boolean
};

class ContentArea extends React.PureComponent<ContentAreaProps> {
  render() {
    const { steps, stepColors } = this.props;
    return (
      <View style={[styles.container, styles.content]}>
        {steps &&
          Object.values(steps).map(step => (
            <OptionsButton
              key={step.number}
              step={step}
              stepColors={stepColors}
            />
          ))}
      </View>
    );
  }
}

export default ContentArea;
