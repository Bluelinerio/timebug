// @flow
import React          from 'react'
import { color }      from '../styles/components/Gradient'
import LinearGradient from 'react-native-linear-gradient'

type Props = {
  colors?: Array<string>,
  style?: any,
  children: React.node,
}

const Gradient = ({
  colors = [color.startGradientColor, color.endGradientColor],
  style,
  children,
}: Props) => (
  <LinearGradient colors={[...colors]} style={[style]}>
    {children}
  </LinearGradient>
)

export default Gradient
