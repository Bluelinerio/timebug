import React from 'react';
import { View, Text, Platform, PixelRatio } from 'react-native';
import styles from '../../../styles/templates';
import TextInput from './TextInput';

export default function customTextBox({ stylesheet, ...rest }) {
  if (rest.hidden) {
    return null;
  }
  return (
    <TextInput
      {...{
        ...rest,
        styles: stylesheet
      }}
    />
  );
}
