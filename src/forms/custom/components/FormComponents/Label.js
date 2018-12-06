import React from 'react';
import { Text } from 'react-native-elements';
import styles, { formTextColor } from '../../styles';

const Label = ({
  color = formTextColor,
  field: {
    content = {
      text: '',
    },
  },
}: {
  color?: string,
  field: {
    content: {
      text: string,
    },
  },
}) => (
  <Text h4 style={[styles.labelComponent, { color }]}>
    {content.text}
  </Text>
);

export default Label;
