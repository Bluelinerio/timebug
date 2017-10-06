// @flow
import React                      from 'react';
import { Text, TouchableOpacity } from "react-native";
import { styles }                 from 'react-native-theme';

type Props = {
  number: Number,
}

export default ({ number }: Props) => {

  return (
    <TouchableOpacity
      style={[styles.assignmentsScreenNumber, styles.assignmentsScreenNumberColors]}
    >
      <Text style={styles.assignmentsScreenNumberText}>{number}</Text>
    </TouchableOpacity>
  )

}
