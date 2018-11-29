//@flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import SvgIcon from '../../../components/SvgIcon';
import styles from '../styles';

export type StepSideButtonProps = {
  containerStyle: any,
  iconStyle: any,
  name: string,
  onPress: () => any,
};

class StepSideButton extends React.PureComponent<StepSideButtonProps> {
  render() {
    const { containerStyle, iconStyle, onPress, name } = this.props;
    return (
      <View style={[styles.flex, styles.center]}>
        <TouchableOpacity
          style={[styles.helperButton, containerStyle]}
          onPress={onPress}
        >
          <SvgIcon name={name} {...iconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default StepSideButton;
