//@flow
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CustomImage from '../../../components/CustomImage'
import styles, { helperIconSize } from '../styles'
import { icon } from '../../../resources/images'
import { mapPhaseAndCompletionToStylesHelper } from '../utils/colorsForStep'

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati velit culpa alias ipsum delectus accusantium'

export type SideActions = {
  audio: () => any,
  content: () => any
}

export type OptionButtonProps = {
  onPress: () => any,
  text: string,
  step: string,
  subtitleText: string,
  complete: boolean,
  phase: string,
  sideActions: SideActions,
  source:
    | any
    | {
        uri: string
      },
  style?: any
}

const OptionButton = ({
  onPress,
  step,
  text,
  complete,
  phase,
  subtitleText = lorem,
  source = icon,
  sideActions,
  style = {}
}: OptionButtonProps) => {
  const { audio: audioAction, content: contentAction } = sideActions
  const {
    container: helperContainerStyle,
    icon: helperIconStyle
  } = mapPhaseAndCompletionToStylesHelper(phase, complete)
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style.container]}>
        <View style={styles.mainComponent}>
          <View style={styles.mainComponentTopRow}>
            <View style={[styles.buttonImageContainer]}>
              <CustomImage
                style={[styles.buttonImage, style.image]}
                source={source}
              />
            </View>
            <View style={[styles.buttonTextContainer]}>
              <Text style={[styles.stepText, styles.buttonText, style.text]}>
                Step {step}:
              </Text>
              <Text
                style={[styles.stepTitleText, styles.buttonText, style.text]}
              >
                {text}
              </Text>
            </View>
          </View>
          <View style={[styles.flex, styles.mainComponentBottomRow]}>
            <Text style={[styles.subtitle, styles.buttonText, style.text]}>
              {subtitleText}
            </Text>
          </View>
        </View>
        <View style={[styles.flex, styles.secondaryComponent]}>
          <View style={[styles.flex, styles.center]}>
            <TouchableOpacity
              style={[styles.helperButton, helperContainerStyle]}
              onPress={contentAction}
            >
              <Icon
                name="ios-book"
                size={helperIconSize}
                style={[styles.audio, helperIconStyle]}
                underlayColor="transparent"
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.flex, styles.center]}>
            <TouchableOpacity
              style={[styles.helperButton, helperContainerStyle]}
              onPress={audioAction}
            >
              <Icon
                name="ios-volume-up"
                size={helperIconSize}
                style={[styles.book, helperIconStyle]}
                underlayColor="transparent"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default OptionButton
