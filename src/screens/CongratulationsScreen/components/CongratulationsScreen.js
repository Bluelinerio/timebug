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

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  navigate(): any
}
const buttonIcon = require('../../../resources/images/clock_icon_bold.png');

export default class CongratulationsScreen extends Component<Props, State> {

  @autobind
  goToNextDay() {
    this.props.goToHomeScreen({})
  }

  render() {
    return (
      <View style={styles.congratulationsScreenContainer}>
        <View style={styles.congratulationsScreenMessageContainer}>
          <Text>See you soon in</Text>
          <Text
            style={[ styles.congratulationsScreenCurrentStep, styles.congratulationsScreenTextColor ]}>STEP {this.props.currentStep.number + 1}!</Text>
          <View style={styles.congratulationsScreenTimerContainer}>
            <Image source={buttonIcon} style={styles.congratulationsScreenButtonImage}/>
            <Text
              style={[ styles.congratulationsScreenDurationText, styles.congratulationsScreenTextColor ]}>{this.props.currentStep.duration} min</Text>
          </View>

        </View>
        <View style={[ styles.buttonContainer, styles.congratulationsScreenAbsoluteContainer ]}>
          <Button
            onPress={this.goToNextDay}
            text="DONE"
            side="right"
            withArrow
          >
          </Button>
        </View>
      </View>
    );
  }
}
