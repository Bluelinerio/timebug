//@flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export type GenericElementStyle = {
  container?: any,
  text?: any,
};

export type GenericElementContent = {
  text: string,
  style?: GenericElementStyle,
};

export type GenericElementProps = {
  elements: [GenericElementContent],
  style?: any,
};

const GenericElement = ({ elements, style = {} }: GenericElementProps) => (
  <View style={[styles.row, styles.elementRow, style.row]}>
    {elements &&
      elements.map(el => {
        const { text, style = {} } = el;
        return (
          <View key={text} style={[styles.element, style.container]}>
            <Text style={[styles.elementText, style.text]}>{text}</Text>
          </View>
        );
      })}
  </View>
);

export default GenericElement;
