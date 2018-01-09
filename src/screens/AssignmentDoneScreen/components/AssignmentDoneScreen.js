// @flow

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import Button from '../../../components/Button';

const DoneButton = (props) => (
	<Button
    text='DONE'
    side='right'
    {...props}
	/>
);

const NextStep = ({ nextStepNumber, nextStepColor, nextStepDuration}) => (
  <View style={styles.assignmentDoneScreenMessageContainer}>
    <Text style={styles.assignmentDoneScreenMessageText}>See you soon in</Text>
    <Text
      style={[
        styles.assignmentDoneScreenDoneStep,
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

export type Props = {
  doneStepNumber: number,
  doneStepColor: string,
  nextStepDuration: number,
  nextStepNumber: number,
  nextStepColor: string,
}

export default (props: Props) => {
  return (
    <View style={styles.assignmentDoneScreenContainer}>
      <NextStep {...props} />
      <View style={[styles.assignmentDoneScreenAbsoluteContainer]}>
        <DoneButton
          onPress={props.done}
          backgroundColor={props.nextStepColor}
        />
      </View>
    </View>
  );
};
