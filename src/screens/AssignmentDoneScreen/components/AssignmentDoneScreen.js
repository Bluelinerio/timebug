// @flow

import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Button from "../../../components/Button";
import { IStep } from "../../../interfaces";
import { styles } from "react-native-theme";
import Feather from "react-native-vector-icons/MaterialCommunityIcons";

const DoneButton = ({ color, onPress }) => (
	<Button
		onPress={onPress}
    text="DONE"
    side="right"
    styles={{
			wideButtonBackground: {
				backgroundColor: color
			}
		}}
	/>
);

const NextStep = ({nextStepNumber, nextStepColor, nextStepDuration}) => (
  <View style={styles.assignmentDoneScreenMessageContainer}>
    <Text style={styles.assignmentDoneScreenMessageText}>See you soon in</Text>
    <Text
      style={[
        styles.assignmentDoneScreenCurrentStep,
        styles.assignmentDoneScreenTextColor
      ]}
    >
      {
        (() => nextStepNumber === 0 ? `Our next journey!` : `STEP ${nextStepNumber}!`)()
      }
    </Text>
      {
        nextStepNumber === 0 ? null : (
        <View style={styles.assignmentDoneScreenTimerContainer}>
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
                styles.assignmentDoneScreenDurationText,
                styles.assignmentDoneScreenTextColor
              ]}
            >
              {nextStepDuration} min
            </Text>  
        </View>
        )
      }
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
    <View style={styles.assignmentDoneScreenContainer}>
      <NextStep nextStepNumber={nextStepNumber} nextStepColor={nextStepColor} nextStepDuration={nextStepDuration}/>
      <View style={[styles.assignmentDoneScreenAbsoluteContainer]}>
        <DoneButton
          onPress={done}
          color={nextStepColor}
        />
      </View>
    </View>
  );
};
