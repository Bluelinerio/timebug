//@flow
import React from 'react';
import { View } from 'react-native';
import OptionsButton from '../containers/OptionButtonContainer';
import styles from '../styles';

import tron from 'reactotron-react-native';

type ContentAreaProps = {
  steps: Array<any>,
  user: any,
  stepColors: any,
};

class ContentArea extends React.PureComponent<ContentAreaProps> {
  render() {
    tron.log('Re rendered content area');
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
