// @flow

import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Button from "../../../components/Button";
import { IStep } from "../../../interfaces";
import { styles } from "react-native-theme";
import Feather from "react-native-vector-icons/MaterialCommunityIcons";

const NextStep = ({nextStepNumber, nextStepColor, nextStepDuration}) => (
  <View style={styles.congratulationsScreenMessageContainer}>
    <Text style={styles.congratulationsScreenMessageText}>See you soon in</Text>
    <Text
      style={[
        styles.congratulationsScreenCurrentStep,
        styles.congratulationsScreenTextColor
      ]}
    >
      STEP {nextStepNumber}!
    </Text>
    <View style={styles.congratulationsScreenTimerContainer}>
      <Feather
        name="clock"
        size={34}
        style={{
          color: nextStepColor,
          marginTop: 2
        }}
      />
      <Text
        style={[
          styles.congratulationsScreenDurationText,
          styles.congratulationsScreenTextColor
        ]}
      >
        {nextStepDuration} min
      </Text>
    </View>
  </View>
);
export default ({
  currentStepNumber,
  currentStepColor,
  nextStepDuration,
  nextStepNumber,
  nextStepColor,
  done
}) => {
  return (
    <View style={styles.congratulationsScreenContainer}>
      <NextStep nextStepNumber={nextStepNumber} nextStepColor={nextStepColor} nextStepDuration={nextStepDuration}/>
      <View style={[styles.congratulationsScreenAbsoluteContainer]}>
        <Button
          onPress={done}
          text="DONE"
          side="right"
          styles={{
            wideButtonBackground: {
              backgroundColor: currentStepColor
            }
          }}
        />
      </View>
    </View>
  );
};
