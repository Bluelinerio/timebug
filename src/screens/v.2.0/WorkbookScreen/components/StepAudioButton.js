//@flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import SvgIcon from '../../../../components/SvgIcon';
import styles from '../styles';

export type StepAudioButtonProps = {
  containerStyle: any,
  iconStyle: any,
  name: string,
  onPress: () => any,
};

class StepAudioButton extends React.PureComponent<StepAudioButtonProps> {
  render() {
    const { iconStyle, onPress, name } = this.props;
    return (
      <View style={[styles.container, styles.center]}>
        <TouchableOpacity style={[styles.helperButton]} onPress={onPress}>
          <SvgIcon name={name} {...iconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default StepAudioButton;
