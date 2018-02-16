// @flow

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import Button from '../../../components/Button';

export type Props = {
  doneStepNumber: number,
  doneStepColor: string,
  nextStepDuration: number,
  nextStepNumber: number,
  nextStepColor: string,
  done:() => void,
  goToNextStep: () => void
}

export default ({ 
  doneStepNumber,
  doneStepColor,
  nextStepDuration,
  nextStepNumber,
  nextStepColor,
  done,
  goToNextStep
}: Props) => {
  return (
    <View style={[styles.container, {
      backgroundColor: doneStepColor
    }]}>
      <View style={styles.messageContainer}>
        <Text style={[styles.title, styles.strong, { color: 'white' }]}>
          {`Step ${doneStepNumber} is complete!`}
        </Text>
      </View>
      <View style={[styles.absoluteContainer]}>
        <Button
          onPress={goToNextStep}
          text={`Start Step ${nextStepNumber}`.toUpperCase()}
          backgroundColor={'white'}
          textColor={nextStepColor}
        />
      </View>
    </View>
  );
};
