// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import type { LayoutStyle, ColorValue } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export type GradientBackgroundProps = {
  styles: {
    container: LayoutStyle,
    gradient?:LayoutStyle
  },
  gradientTopColor: ColorValue,
  gradientBottomColor: ColorValue,
  opacity: number
}

const GradientWithTwoColors = (props: GradientBackgroundProps) =>
  <View style={props.styles.container}>
    <LinearGradient
      colors={[
        props.gradientTopColor,
        props.gradientBottomColor,
      ]}
      style={[{opacity:props.opacity, ...StyleSheet.absoluteFillObject}, props.styles.gradient]}/>
  </View>

GradientWithTwoColors.defaultProps = {
  styles: {
    container: {
      height: 200,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      borderWidth: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradient:{
      ...StyleSheet.absoluteFillObject
    }
  },
  gradientTopColor:'#79bddd',
  gradientBottomColor: 'white',
  opacity: 1
}

export default GradientWithTwoColors