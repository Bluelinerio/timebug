// @flow
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet, Text,
  View, Dimensions
} from "react-native";
import { styles } from 'react-native-theme';
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  text: string,
  side: string,
  withArrow: boolean,
  oPress(): any
}

const window = Dimensions.get('window');


export default ({text, onPress, side, withArrow}: Props) => {
  let minWidth = side ? 50 : 250;
  let paddingHorizontal = side ? 25 : 50;
  return (
    <View style={[{minWidth}, styles.buttonContainer, (side ? styles[side] : null)]}>
      <Button
        containerStyle={[styles.wideButton, styles.wideButtonBackground, {minWidth, paddingHorizontal}]}
        onPress={onPress}
      >
        {
          side && side === 'right' && withArrow &&
          <Icon
            style={styles.buttonIconRight}
            name="ios-arrow-back-outline"
            size={30}
            color="white"
          />
        }
        <Text style={styles.wideButtonText}>{text}</Text>
        {
          side && side === 'left' && withArrow &&
          <Icon
            style={styles.buttonIconLeft}
            name="ios-arrow-forward-outline"
            size={30}
            color="white"
          />
        }
      </Button>
    </View>
  )
}
