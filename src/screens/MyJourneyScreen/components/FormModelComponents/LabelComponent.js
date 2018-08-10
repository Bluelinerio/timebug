//@flow
import React    from 'react'
import { Text } from 'react-native'
import styles   from '../../styles'

export type LabelComponentStyle = {
  container?: any,
  text?: any
}

export type LabelComponentProps = {
  text: string,
  style?: LabelComponentStyle
}

const LabelComponent = ({ text, style = {} }: LabelComponentProps) => (
  <Text style={[styles.elementText, style.text]}>{text}</Text>
)

export default LabelComponent
