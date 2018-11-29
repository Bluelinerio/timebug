// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import styles from '../../styles/components/PieCharts';

export type Slice = {
  color: string,
  amount: number,
};

export type Chart = {
  label: string,
  total: number,
  slices: [Slice],
};

export type ChartProps = {
  outerRadius: string,
  innerRadius: string,
  spacing: number,
};

export type PieChartProgressProps = {
  height: number,
  chartProps: ChartProps,
  style?: any,
  element: Chart,
};

type PieChartData = {
  key: number,
  amount: number,
  svg?: {
    fill?: string,
  },
};

const PieChartProgress = ({
  height,
  chartProps,
  element,
}: PieChartProgressProps) => {
  const { label, slices } = element;

  const data: Array<PieChartData> = slices.map(({ amount, color }, index) => ({
    key: index,
    amount,
    svg: { fill: color },
  }));

  return (
    <View>
      <PieChart
        style={{ height }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        {...chartProps}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PieChartProgress;
