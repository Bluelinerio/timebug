//@flow
import React from 'react';
import { View } from 'react-native';
import ListEntry from './ListEntry';
import styles from '../styles';
import type { FormElement } from '../containers/types';

export type ListElementProps = {
  elements: Array<FormElement>,
  style?: any,
};

const ListElement = ({ elements, style = {}, ...rest }: ListElementProps) => {
  return elements ? (
    <View style={[styles.row, styles.elementRow, style.row]}>
      {elements.map(el => {
        return (
          <ListEntry
            key={`${el.formIndex}-${el.formKey}`}
            {...rest}
            {...el}
            style={style}
          />
        );
      })}
    </View>
  ) : null;
};

export default ListElement;