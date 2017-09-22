// @flow
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet, Text,
  View, Dimensions
} from "react-native";
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
    <View style={[{minWidth}, styles.container, (side ? styles[side] : null)]}>
      <Button
        containerStyle={[styles.wideButton, {minWidth, paddingHorizontal}]}
        onPress={onPress}
      >
        {
          side && side === 'right' && withArrow &&
          <Icon
            style={styles.iconRight}
            name="ios-arrow-back-outline"
            size={30}
            color="white"
          />
        }
        <Text style={styles.wideButtonText}>{text}</Text>
        {
          side && side === 'left' && withArrow &&
          <Icon
            style={styles.iconLeft}
            name="ios-arrow-forward-outline"
            size={30}
            color="white"
          />
        }
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width
  },
  iconLeft: {
    marginLeft: 10
  },
  iconRight: {
    marginRight: 10
  },
  wideButton: {
    backgroundColor: '#6EBDDC',
    height: 50,
    marginBottom: 30,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  left: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  right: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  wideButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
});
