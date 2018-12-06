//@flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

type PillarTimeTableElementProps = {
  pillar: string,
  typicalWeek: number,
  idealWeek: number,
  style: any,
};

const renderText = (typical: number) => (ideal: number): string => {
  const result = typical - ideal;
  return result > 0
    ? `+${result} hrs`
    : result < 0 ? `${result} hrs` : `${result} hrs`;
};

const PillarTimeTableElement = ({
  pillar,
  typicalWeek,
  idealWeek,
  style = {},
}: PillarTimeTableElementProps) => (
  <View style={[styles.row, styles.elementRow, style.row]}>
    <View style={[styles.element, styles.pillar]}>
      <Text style={[styles.pillarText]}>{pillar}</Text>
    </View>
    <View style={styles.element}>
      <Text style={[styles.elementText]}>
        {typicalWeek ? `${typicalWeek} hrs` : '---'}
      </Text>
    </View>
    <View style={styles.element}>
      <Text style={[styles.elementText]}>
        {idealWeek ? `${idealWeek} hrs` : '---'}
      </Text>
    </View>
    <View style={styles.element}>
      <Text style={[styles.elementText]}>
        {idealWeek && typicalWeek ? renderText(typicalWeek)(idealWeek) : '---'}
      </Text>
    </View>
  </View>
);

export default PillarTimeTableElement;
