//@flow
import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles'

export type LabelComponentStyle = {
  container?: any,
  text?: any
}

export type LabelComponentProps = {
    text: string,
    style?: LabelComponentStyle
}

const LabelComponent = ({ text, style = {} }: LabelComponentProps) => (
    <View style={[styles.element, style.container]}>
      <Text style={[styles.elementText, style.text]}>{text}</Text>
    </View>
)

export default LabelComponent
