// @flow

<<<<<<< HEAD
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import type { LayoutStyle, ColorValue } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
=======
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import type { LayoutStyle, ColorValue } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { whiteGradientColors } from '../constants/colors'
>>>>>>> 2fedbfe... Added WhiteGradientColors.

export type GradientBackgroundProps = {
  style: {
    container: LayoutStyle,
    gradient?: LayoutStyle
  },
  topColor: ColorValue,
  bottomColor: ColorValue,
  opacity: number
};

const GradientWithTwoColors = (props: GradientBackgroundProps) => (
  <LinearGradient
    colors={[
      props.topColor,
      props.bottomColor,
    ]}
    style={[{...StyleSheet.absoluteFillObject}, { opacity: props.opacity }]}
  />
);

GradientWithTwoColors.defaultProps = {
  topColor: whiteGradientColors.startColor,
  bottomColor: whiteGradientColors.endColor,
  opacity: 1,
}

export default GradientWithTwoColors
