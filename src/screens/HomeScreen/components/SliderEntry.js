import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ParallaxImage } from "react-native-snap-carousel";
import CustomImage from "../../../components/CustomImage";
import styles, {
  spinnerEvenColor,
  spinnerUnEvenColor
} from "../styles/SliderEntry.style";
import type { Step, Icon } from "../../../services/cms";
import { getImageUrl } from "../../../services/cms";
import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";
import Entypo from "react-native-vector-icons/Entypo";
import { deepBlue } from "../../../constants/colors";

export type Item = {
  title: string,
  subtitle: string,
  icon: { uri: string }
};

type Prop = {
  data: Item,
  even: boolean,
  parallax: boolean,
  parallaxProps: object,
  width: number,
  height: number,
  onPress: Function,
  color: string
};

export default class SliderEntry extends PureComponent<Prop> {
  get image() {
    const { data: { icon }, parallax, parallaxProps, even } = this.props;
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
    );
  }

  render() {
    const {
      onPress,
      data: { title, subtitle, color, iconName },
      even
    } = this.props;
    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={3}
      >
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableBounce style={[styles.slideInnerContainer]} onPress={onPress}>
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {iconName && (
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                backgroundColor: "transparent",
                borderRadius: 14,
                borderWidth: 0,
                borderColor: deepBlue,
                height: 30,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
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
    );
  }
}
