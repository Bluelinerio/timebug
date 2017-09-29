// @flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
}                           from 'react-native';
import { styles }           from 'react-native-theme';
import Button               from "react-native-button";
import SVGImage             from 'react-native-svg-image';
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

const headerBackground = require('../../../resources/images/home_background.jpg');
const buttonIcon       = require('../../../resources/images/clock_icon.png');

export default class DashboardComponent extends Component<Props, State> {
  render() {
    let {
          currentStep,
          totalNumberOfSteps,
        } = this.props;

    return <ScrollableHeader
      headerImage={headerBackground}
      header={
        <View style={[ styles.HomeScreenHeader, styles.headerColor ]}>
          <Text style={styles.HomeScreenHeaderTitle}>Next challenge</Text>
          <View style={styles.HomeScreenChallengeInfo}>
            <CustomImage
              style={styles.HomeScreenHeaderImage}
              imageUri={getImageUrl(currentStep.shortIcon)}
            />
            <View>
              <View style={styles.HomeScreenFirstPartTitle}>
                <Text style={[ styles.HomeScreenText, styles.HomeScreenBoldText ]}>{currentStep.type}</Text>
                <Text style={[ styles.HomeScreenText, styles.HomeScreenBoldText ]}>STEP
                  # {currentStep.number}/{totalNumberOfSteps}</Text>
              </View>
              <Text style={[ styles.HomeScreenText, styles.HomeScreenLittleText ]}>{currentStep.stepScreenDescription}</Text>
            </View>
          </View>
          <Button
            containerStyle={styles.HomeScreenWideButton}
            onPress={() => this.props.goToTextScreen({ number: currentStep.number })}
          >
            <View style={styles.HomeScreenAbsoluteContainer}>
              <Image source={buttonIcon} style={styles.HomeScreenButtonImage}/>
              <Text style={[ styles.HomeScreenDurationText ]}>{currentStep.duration} min</Text>

            </View>
            <Text style={styles.HomeScreenWideButtonText}>START</Text>
          </Button>
        </View>
      }
    />;
  }
}