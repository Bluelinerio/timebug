//@flow
import React                            from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import CustomImage                      from '../../../components/CustomImage'
import styles                           from '../styles'
import tron                             from 'reactotron-react-native'
import StepContentButton                from '../containers/StepContentButtonContainer'
import StepAudioButton                  from '../containers/StepAudioButtonContainer'

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati velit culpa alias ipsum delectus accusantium'

export type SideActions = {
  audio: () => any,
  content: () => any
}

export type OptionButtonProps = {
  onPress: () => any,
  title: string,
  step: number,
  subtitleText: string,
  audio: string,
  complete: boolean,
  phase: string,
  visible: boolean,
  source: string,
  containerBackgroundColor: string,
  textStyle: any
}

class OptionButton extends React.PureComponent<OptionButtonProps> {
  render() {
    const {
      onPress,
      step,
      title,
      complete,
      phase,
      subtitleText = lorem,
      source,
      visible,
      audio,
      containerBackgroundColor,
      textStyle
    } = this.props
    tron.log('Re rendered option button #' + step)
    return visible ? (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, { backgroundColor: containerBackgroundColor }]}>
          <View style={styles.mainComponent}>
            <View style={styles.mainComponentTopRow}>
              <View style={[styles.buttonImageContainer]}>
                <CustomImage
                  style={[styles.buttonImage]}
                  source={{ uri: source }}
                />
              </View>
              <View style={[styles.buttonTextContainer]}>
                <Text style={[styles.stepText, styles.buttonText, textStyle]}>
                  Step {step}:
                </Text>
                <Text
                  style={[styles.stepTitleText, styles.buttonText, textStyle]}
                >
                  {title}
                </Text>
              </View>
            </View>
            <View style={[styles.flex, styles.mainComponentBottomRow]}>
              <Text style={[styles.subtitle, styles.buttonText, textStyle]}>
                {subtitleText}
              </Text>
            </View>
          </View>
          <View style={[styles.flex, styles.secondaryComponent]}>
            <StepContentButton
              number={step}
              phase={phase}
              complete={complete}
            />
            <StepAudioButton
              phase={phase}
              complete={complete}
              audio={audio}
              title={title}
              icon={source}
            />
          </View>
        </View>
      </TouchableOpacity>
    ) : null
  }
}

export default OptionButton
