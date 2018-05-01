// @flow
import * as React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { whiteGradientColors } from '../constants/colors'

type Props = {
  startColor: string,
  endColor: string,
  style: any,
  reverse: boolean,
  opacity: number
}

const HighlighRow = ({
  startColor,
  endColor,
  style,
  reverse,
  opacity,
  ...rest
} : Props ) => (
  <LinearGradient
    style={[style, { opacity: opacity }]}
    colors={reverse ? [endColor, startColor] : [startColor, endColor]}
    start={{ x: 1, y: 0 }}
    end={{ x: 0, y: 1 }}
    {...rest}
  />
)

HighlighRow.defaultProps = {
  ...whiteGradientColors,
  style: {
    flex: 2,
    borderRadius: 6
  },
  opacity: 1,
  reverse: false
}

export default HighlighRow
