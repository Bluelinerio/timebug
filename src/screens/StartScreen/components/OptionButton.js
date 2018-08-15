//@flow
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomImage from '../../../components/CustomImage'
import styles from '../styles'
import { icon } from '../../../resources/images'

export type OptionButtonProps = {
  onPress: () => any,
  text: string,
  step: string,
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
  source = icon,
  style = {}
}: OptionButtonProps) => (
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
            <Text style={[styles.stepTitleText, styles.buttonText, style.text]}>
              {text}
            </Text>
          </View>
        </View>
        <View style={[styles.flex, styles.mainComponentBottomRow]}>
          <Text style={[styles.subtitle, styles.buttonText, style.text]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            velit culpa alias ipsum delectus accusantium
          </Text>
        </View>
      </View>
      <View style={[styles.flex, styles.secondaryComponent]}>
        <View style={[styles.flex, { padding: 4 }]}>
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 100,
              borderColor: 'white',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon
              name="arrow-back"
              size={18}
              style={[styles.audio]}
              underlayColor="transparent"
            />
          </View>
        </View>
        <View style={[styles.flex, { padding: 4 }]}>
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 100,
              borderColor: 'white',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon
              name="arrow-back"
              size={18}
              style={[styles.book]}
              underlayColor="transparent"
            />
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

export default OptionButton
