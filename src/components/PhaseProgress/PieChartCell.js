// @flow
import React from 'react';
import { View } from 'react-native';
import PieChart, { Chart } from './PieChart';

const buildCellStyle = (numCells: number, baseStyle: any = {}) => (
  cellIndex: number
): any =>
  cellIndex > 0
    ? {
      ...baseStyle,
      borderLeftWidth: 0.25,
      borderColor: '#717171',
    }
    : {
      ...baseStyle,
    };

type CellProps = {
  columnsPerRow: number,
  rowElements: Array<Chart>,
  height: number,
  style?: { cell: any } | any,
};

const Cell = ({ columnsPerRow, ...rest }: CellProps): any => {
  const { rowElements, height, style } = rest;
  const { cell } = style;
  const cellStyles = buildCellStyle(columnsPerRow, cell);
  return Array(columnsPerRow)
    .fill()
    .map((el, index) => {
      const element = rowElements[index];
      const cellStyle = cellStyles(index);
      return (
        <View key={element.label} style={cellStyle}>
          <PieChart element={element} height={height} {...rest} />
        </View>
      );
    });
};

export default Cell;
