//@flow
import React                                   from 'react'
import { View, TouchableOpacity, Text }        from 'react-native'
import Icon                                    from 'react-native-vector-icons/Ionicons'
import SvgIcon                                 from '../../../components/SvgIcon'
import CustomImage                             from '../../../components/CustomImage'
import styles, { helperIconSize }              from '../styles'
import { icon }                                from '../../../resources/images'
import { mapPhaseAndCompletionToStylesHelper } from '../utils/colorsForStep'
import tron                                    from 'reactotron-react-native'

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

class OptionButton extends React.PureComponent<OptionButtonProps> {
  render() {
    const {
      onPress,
      step,
      text,
      complete,
      phase,
      subtitleText = lorem,
      source = icon,
      sideActions,
      style = {}
    } = this.props
    tron.log(`Callin render on step: ${step}`)

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
                <SvgIcon
                  name="Book"
                  {...helperIconStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.flex, styles.center]}>
              <TouchableOpacity
                style={[styles.helperButton, helperContainerStyle]}
                onPress={audioAction}
              >
                <SvgIcon
                  name="Audio"
                  {...helperIconStyle}                  
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default OptionButton
