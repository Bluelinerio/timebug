//@flow
import React                                   from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles                                  from '../styles'
import { icon }                                from '../../../resources/images'

export type OptionButtonProps = {
  onPress: () => any,
  text: string,
  source:
    | any
    | {
        uri: string
      },
  style?: any
}

const OptionButton = ({
  onPress,
  text,
  source = icon,
  style = {}
}: OptionButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, style.container]}>
      <View style={[styles.flex, styles.buttonTextContainer]}>
        <Text style={[styles.buttonText, style.text]}>
          {text}
        </Text>
      </View>
      <View style={[styles.flex, styles.buttonImageContainer]}>
        <Image style={[styles.buttonImage, style.image]} source={source} />
      </View>
    </View>
  </TouchableOpacity>
)

export default OptionButton
