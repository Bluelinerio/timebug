// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
}                           from 'react-native';
import Button               from '../../../components/Button'
import autobind             from 'autobind-decorator';
import { IStep }            from "../../../interfaces";
import { styles }           from 'react-native-theme';
import Feather from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  navigate(): any
}

export default class CongratulationsScreen extends Component<Props, State> {

  @autobind
  goToNextDay() {
    this.props.goToHomeScreen({reset: true, direction: 'back'})
  }

  render() {
    return (
      <View style={styles.congratulationsScreenContainer}>
        <View style={styles.congratulationsScreenMessageContainer}>
          <Text style={styles.congratulationsScreenMessageText}>See you soon in</Text>
          <Text
            style={[ styles.congratulationsScreenCurrentStep, styles.congratulationsScreenTextColor ]}>STEP {this.props.currentStep.number + 1}!</Text>
          <View style={styles.congratulationsScreenTimerContainer}>
            <Feather
              name="clock"
              size={34}
              style={{
                color: "#48D0F1",
                marginTop: 2
              }}
            />
            <Text
              style={[ styles.congratulationsScreenDurationText, styles.congratulationsScreenTextColor ]}>{this.props.currentStep.duration} min</Text>
          </View>

        </View>
        <View style={[ styles.congratulationsScreenAbsoluteContainer ]}>
          <Button
            onPress={this.goToNextDay}
            text="DONE"
            side="right"
          >
          </Button>
        </View>
      </View>
    );
  }
}
