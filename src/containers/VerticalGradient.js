import React from 'react';
import styles, { colors } from '../styles/components/Gradient';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  colorStart?: string,
  colorEnd?: string,
  style?: any,
};

const StartEndGradient = ({
  colorStart = colors.startGradientColor,
  colorEnd = colors.endGradientColor,
  style,
}: Props) => (
  <LinearGradient
    colors={[colorEnd, colorStart]}
    start={{ x: 0, y: 1 }}
    end={{ x: 0, y: 0 }}
    style={[styles.gradient, style]}
  />
);

export default StartEndGradient;
