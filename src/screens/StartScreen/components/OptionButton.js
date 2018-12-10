//@flow
import React                            from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import CustomImage                      from '../../../components/CustomImage'
import styles                           from '../styles'
import StepContentButton                from '../containers/StepContentButtonContainer'
import StepAudioButton                  from '../containers/StepAudioButtonContainer'

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati velit culpa alias ipsum delectus accusantium'

export type SideActions = {
  audio: () => any,
  content: () => any,
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
  textStyle: any,
  isV2: boolean,
  disable: boolean,
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
      textStyle,
      isV2 = false,
      disable = false,
    } = this.props
    return visible ? (
      <TouchableOpacity
        style={visible ? {} : { width: 0, height: 0 }}
        onPress={onPress}
        disabled={disable}
      >
        <View
          style={[
            styles.button,
            { backgroundColor: containerBackgroundColor },
            disable ? styles.disabled : {},
          ]}
        >
          <View style={styles.mainComponent}>
            <View style={styles.mainComponentTopRow}>
              <View style={[styles.buttonImageContainer]}>
                <CustomImage style={[styles.buttonImage]} source={source} />
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
          {!isV2 && (
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
          )}
        </View>
      </TouchableOpacity>
    ) : null
  }
}

export default OptionButton
