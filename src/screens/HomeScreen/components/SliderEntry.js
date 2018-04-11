import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import CustomImage from '../../../components/CustomImage'
import styles, {
  spinnerEvenColor,
  spinnerUnEvenColor
} from '../styles/SliderEntry.style'
import { deepBlue } from '../../../constants/colors'

export type Item = {
  title: string,
  subtitle: string,
  icon: { uri: string }
}

type Prop = {
  data: Item,
  even: boolean,
  parallax: boolean,
  parallaxProps: {},
  width: number,
  height: number,
  onPress: Function,
  color: string
}

export default class SliderEntry extends PureComponent<Prop> {
  get image() {
    const { data: { icon }, parallax, parallaxProps, even } = this.props
    return parallax ? (
      <CustomImage
        source={icon}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {}
        ]}
        style={styles.svg}
        showSpinner={true}
        spinnerColor={even ? spinnerEvenColor : spinnerUnEvenColor}
        {...parallaxProps}
      />
    ) : (
      <CustomImage source={icon} style={styles.svg} />
    )
  }

  render() {
    const { onPress, data: { title, subtitle, iconName }, even } = this.props
    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={3}
      >
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    )

    return (
      <TouchableBounce style={[styles.slideInnerContainer]} onPress={onPress}>
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {iconName && (
            <View
              style={[
                styles.sliderEntryTopRightIconContainer,
                {
                  borderColor: deepBlue
                }
              ]}
            >
              <Entypo name={iconName} size={20} color={deepBlue} />
            </View>
          )}
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}
        >
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        </View>
      </TouchableBounce>
    )
  }
}
