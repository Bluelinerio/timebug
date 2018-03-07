// @flow
import React from 'react';
import { Animated, Text, View } from 'react-native';
import styles from '../styles';

const CicleWidth = 32;

type Props = {
  number: number,
  color: string,
  animatedStyle: any
};

export default ({ number, color, animatedStyle }: Props) => {
  return (
    <Animated.View
      style={[
        styles.assignmentLeadInScreenNumberContainer,
        {
          backgroundColor: color
        },
        animatedStyle
      ]}
    >
      <Animated.Text style={[styles.assignmentLeadInScreenNumberText]}>
        {number}
      </Animated.Text>
    </Animated.View>
  );
};
