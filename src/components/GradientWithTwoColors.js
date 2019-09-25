// @flow

import React                            from 'react'
import { StyleSheet }                   from 'react-native'
import type { LayoutStyle, ColorValue } from 'react-native'
import LinearGradient                   from 'react-native-linear-gradient'
import { whiteGradientColors }          from '../constants/colors'

export type GradientBackgroundProps = {
  style: {
    container: LayoutStyle,
    gradient?: LayoutStyle,
  },
  startColor: ColorValue,
  endColor: ColorValue,
  reverse: boolean,
  opacity: number,
}

const GradientWithTwoColors = (props: GradientBackgroundProps) => (
  <LinearGradient
    colors={
      props.reverse
        ? [props.endColor, props.startColor]
        : [props.startColor, props.endColor]
    }
    style={[{ ...StyleSheet.absoluteFillObject }, { opacity: props.opacity }]}
  />
)

GradientWithTwoColors.defaultProps = {
  ...whiteGradientColors,
  opacity: 1,
  reverse: false,
}

export default GradientWithTwoColors
