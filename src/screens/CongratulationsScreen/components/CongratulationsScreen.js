// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
}                           from 'react-native';
import Button               from '../../../components/Button'
import { IStep }            from "../../../interfaces";
import { styles }           from 'react-native-theme';
import Feather              from "react-native-vector-icons/MaterialCommunityIcons";

export default (props) => {
  debugger;
  const {duration, number, color, done} = props;
  return (
    <View style={styles.congratulationsScreenContainer}>
      <View style={styles.congratulationsScreenMessageContainer}>
        <Text style={styles.congratulationsScreenMessageText}>See you soon in</Text>
        <Text
          style={[ styles.congratulationsScreenCurrentStep, styles.congratulationsScreenTextColor ]}>STEP {number + 1}!</Text>
        <View style={styles.congratulationsScreenTimerContainer}>
          <Feather
            name="clock"
            size={34}
            style={{
              color: currentStepColor,
              marginTop: 2
            }}
          />
          <Text
            style={[ styles.congratulationsScreenDurationText, styles.congratulationsScreenTextColor ]}>{duration} min</Text>
        </View>

      </View>
      <View style={[ styles.congratulationsScreenAbsoluteContainer ]}>
        <Button
          onPress={goToHomeScreen}
          text="DONE"
          side="right"
        >
        </Button>
      </View>
    </View>
  );
}
