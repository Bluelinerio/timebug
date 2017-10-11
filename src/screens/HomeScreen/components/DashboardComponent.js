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
};

type State = {
  refreshing: boolean
};

const headerBackground = require("../../../resources/images/home_background.jpg");

export default class DashboardComponent extends Component<Props, State> {
  render() {
    let { currentStep, totalNumberOfSteps } = this.props;

    return (
      <ScrollableHeader
        headerImage={headerBackground}
        header={
          <View style={[styles.HomeScreenHeader, styles.headerColor]}>
            <View style={styles.HomeScreenChallengeInfo}>
              <CustomImage
                style={styles.HomeScreenHeaderImage}
                imageUri={getImageUrl(currentStep.shortIcon)}
              />
              <View style={styles.HomeScreenHeaderText}>
                <Text style={styles.HomeScreenHeaderTitle}>Next challenge</Text>
                <Text style={[styles.HomeScreenTitle]}>{currentStep.type}</Text>
                <Text style={[styles.HomeScreenLittleText]}>
                  {currentStep.stepScreenDescription}
                </Text>
                <Text style={[styles.HomeScreenStep]}>
                  STEP # {currentStep.number}/{totalNumberOfSteps}
                </Text>
              </View>
            </View>
            <Button
              containerStyle={{
                marginTop: 40,
                backgroundColor: "white",
                height: 45,
                minWidth: 240,
                paddingHorizontal: 10,
                borderRadius: 150,
                alignSelf: "center",
                justifyContent: "center"
              }}
              onPress={() =>
                this.props.goToTextScreen({ number: currentStep.number })}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <Feather
                  name="clock"
                  size={34}
                  style={{
                    color: "#003681",
                    marginTop: 2
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Helvetica",
                    color: "#003681",
                    fontWeight: "bold",
                    fontSize: 10,
                    marginBottom: 6
                  }}
                >
                  {currentStep.duration}min
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 15.5,
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#003681",
                  flex: 2,
                  marginLeft: 15
                }}
              >
                START
              </Text>
            </Button>
          </View>
        }
      />
    );
  }
}
