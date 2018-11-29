// @flow
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles/components/WorkbookIndicator';

type Props = {
  size: 'small' | 'large',
  color?: string,
};

const WorkbookIndicator = ({ size, color }: Props) => (
  <View style={styles.container}>
    <ActivityIndicator
      size={size || 'large'}
      color={color || StyleSheet.flatten(styles.activityIndicator).color}
    />
  </View>
);

export default WorkbookIndicator;
