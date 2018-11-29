import * as React from 'react';
import { View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const ActionButton = ({
  color,
  style,
}: {
  style: any,
  color: string,
}) => (
  <View style={style}>
    <Entypo name={'check'} size={20} color={color} />
  </View>
);
