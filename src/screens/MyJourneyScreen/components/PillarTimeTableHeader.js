import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const PillarTimeTableHeader = () => (
  <View style={styles.row}>
    <View style={[styles.element, styles.pillar]}>
      <Text style={[styles.pillarText, styles.headerRowText]}>
        Pillar Of Life
      </Text>
    </View>
    <View style={styles.element}>
      <Text style={[styles.elementText, styles.headerRowText]}>
        Current Week
      </Text>
    </View>
    <View style={styles.element}>
      <Text style={[styles.elementText, styles.headerRowText]}>Ideal Week</Text>
    </View>
    <View style={styles.element}>
      <Text style={[styles.elementText, styles.headerRowText]}>Diff</Text>
    </View>
  </View>
);

export default PillarTimeTableHeader;
