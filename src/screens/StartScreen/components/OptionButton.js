//@flow
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CustomImage from '../../../components/CustomImage'
import styles, { helperIconSize } from '../styles'
import { icon } from '../../../resources/images'
import { mapPhaseAndCompletionToStylesHelper } from '../utils/colorsForStep'

/**
 * Remove
 */
import tron from 'reactotron-react-native'

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati velit culpa alias ipsum delectus accusantium'

export type OptionButtonProps = {
  onPress: () => any,
  text: string,
  step: string,
  subtitleText: string,
  complete: boolean,
  phase: string,
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
  style = {}
}: OptionButtonProps) => {
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
          <View style={[styles.flex]}>
            <TouchableOpacity onPress={() => tron.log("Book")}>
              <View style={[styles.helperButton, helperContainerStyle]}>
                <Icon
                  name="ios-book"
                  size={helperIconSize}
                  style={[styles.audio, helperIconStyle]}
                  underlayColor="transparent"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.flex]}>
            <TouchableOpacity onPress={() => tron.log("Audio")}>
              <View style={[styles.helperButton, helperContainerStyle]}>
                <Icon
                  name="ios-volume-high"
                  size={helperIconSize}
                  style={[styles.book, helperIconStyle]}
                  underlayColor="transparent"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default OptionButton
