import React, { Component } from 'react';
import styles, { colors } from '../styles';
import LinearGradient from 'react-native-linear-gradient';

const StartEndGradient = ({
  colorStart = colors.startGradientColor,
  colorEnd = colors.endGradientColor,
  style
}) => (
  <LinearGradient
    colors={[colorEnd, colorStart]}
    start={{ x: 0, y: 1 }}
    end={{ x: 0, y: 0 }}
    style={[styles.gradient, style]}
  />
);

export default StartEndGradient;
