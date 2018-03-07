// @flow

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import Button from '../../../components/Button';

export type Props = {
  title: string,
  buttonTitle: string,
  doneStepNumber: number,
  doneStepColor: string,
  nextStepDuration: number,
  nextStepNumber: number,
  nextStepColor: string,
  done: () => void,
  buttonOnPress: () => void
};

export default ({
  doneStepNumber,
  doneStepColor,
  nextStepDuration,
  nextStepNumber,
  nextStepColor,
  done,
  title,
  buttonTitle,
  buttonOnPress
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: doneStepColor
        }
      ]}
    >
      <View style={styles.messageContainer}>
        <Text style={[styles.title, styles.strong, { color: 'white' }]}>
          {title}
        </Text>
      </View>
      <View style={[styles.absoluteContainer]}>
        <Button
          onPress={buttonOnPress}
          text={buttonTitle}
          backgroundColor={'white'}
          textColor={nextStepColor}
        />
      </View>
    </View>
  );
};
