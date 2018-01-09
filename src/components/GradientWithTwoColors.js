// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import type { LayoutStyle, ColorValue } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export type GradientBackgroundProps = {
  style: {
    container: LayoutStyle,
    gradient?:LayoutStyle
  },
  gradientTopColor: ColorValue,
  gradientBottomColor: ColorValue,
  opacity: number
}

const GradientWithTwoColors = (props: GradientBackgroundProps) =>
  <LinearGradient
    colors={[
      props.gradientTopColor,
      props.gradientBottomColor,
    ]}
    style={[{...StyleSheet.absoluteFillObject}, { opacity: props.opacity }]}
  />

GradientWithTwoColors.defaultProps = {
  gradientTopColor:'#79bddd',
  gradientBottomColor: 'white',
  opacity: 1
}

export default GradientWithTwoColors