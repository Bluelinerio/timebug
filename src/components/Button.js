// @flow
import React                       from 'react';
import { Dimensions, Text, View, } from "react-native";
import Button                      from "react-native-button";
import { styles }                  from 'react-native-theme';
import Icon                        from 'react-native-vector-icons/Ionicons';

type Props = {
  text: string,
  side: string,
  withArrow: boolean,
  oPress(): any
}

export default ({ text, onPress, side, withArrow }: Props) => {
  let minWidth          = side ? 128 : 240;
  let paddingHorizontal = side ? 25 : 50;
  return (
    <View style={[ styles.buttonContainer, ( side ? styles[ side ] : null ) ]}>
      <Button
        containerStyle={[ { minWidth }, styles.wideButton, styles.wideButtonBackground, {
          minWidth,
          paddingHorizontal,
        } ]}
        onPress={onPress}
      >
        {
          side && side === 'left' && withArrow &&
          <Icon
            style={styles.buttonIconRight}
            name="ios-arrow-back-outline"
            size={30}
            color="white"
          />
        }
        <Text style={styles.wideButtonText}>{text}</Text>
        {
          side && side === 'right' && withArrow &&
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
