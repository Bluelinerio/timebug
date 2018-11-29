import * as React from 'react';
import { View } from 'react-native';
import GradientWithTwoColors from '../../../components/GradientWithTwoColors';

const Space = () => (
  <View
    style={{
      height: 300,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <GradientWithTwoColors />
  </View>
);

export default Space;
