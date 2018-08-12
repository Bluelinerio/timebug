//@flow
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

export type OptionButtonProps = {
  onPress: () => any,
  text: string,
  style?: any
}

const OptionButton = ({ onPress, text }: OptionButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button]}>
      <Text style={[styles.buttonText]}>{text}</Text>
    </View>
  </TouchableOpacity>
)

export default OptionButton
