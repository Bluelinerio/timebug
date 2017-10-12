// @flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
}                           from 'react-native';
import { styles }           from 'react-native-theme';
import Button               from "react-native-button";
import Icon                 from 'react-native-vector-icons/Ionicons';
import { IStep }            from "../../../interfaces";
import getImageUrl          from "../../../utils/getImageUrl";
import ScrollableHeader     from "../../../components/ScrollableHeader";
import CustomImage          from "../../../components/CustomImage";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  navigate(): any
}

type State = {
  refreshing: boolean
}

const headerBackground = require('../../../resources/images/sandClockConfetti.png');
const startBackground  = require('../../../resources/images/sandClockConfetti.png');
const buttonIcon       = require('../../../resources/images/clock_icon.png');

export default class DashboardComponent extends Component<Props, State> {
  render() {
    let {
          currentStep,
          totalNumberOfSteps,
        } = this.props;

    return <ScrollableHeader
      headerImage={headerBackground}
      headerStyles={styles.headerColor}
      header={
        <View style={styles.HomeScreenHeader}>
          <View style={styles.HomeScreenChallengeInfo}>
            <CustomImage
              style={styles.HomeScreenHeaderImage}
              imageUri={getImageUrl(currentStep.shortIcon)}
            />
            <View style={styles.HomeScreenHeaderText}>
              <Text style={styles.HomeScreenHeaderTitle}>Next challenge</Text>
              <Text style={[ styles.HomeScreenTitle ]}>{currentStep.type}</Text>
              <Text style={[ styles.HomeScreenLittleText ]}>
                {currentStep.stepScreenDescription}
              </Text>
              <Text style={[ styles.HomeScreenStep ]}>STEP
                # {currentStep.number}/{totalNumberOfSteps}</Text>
            </View>
          </View>
          <Button
            containerStyle={styles.HomeScreenWideButton}
            onPress={() => this.props.goToTextScreen({ number: currentStep.number })}
          >
            <View style={styles.HomeScreenAbsoluteContainer}>
              <Image source={startBackground} style={styles.HomeScreenStartButtonBackground}/>
              <Icon
                name="md-time"
                size={34}
                color="#0e3fa8"
                style={styles.HomeScreenButtonImage}
              />
              <Text style={[ styles.HomeScreenDurationText ]}>{currentStep.duration}min</Text>
            </View>
            <Text style={styles.HomeScreenWideButtonText}>START</Text>
          </Button>
        </View>
      }
    />;
  }
}