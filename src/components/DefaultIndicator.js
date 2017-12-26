// @flow
import React                 from 'react'
import { ActivityIndicator } from "react-native"
import { styles }            from 'react-native-theme';

type Props = {
  size: 'large' | 'small'
}

export default ({ size }: Props) => {
  return (
    <ActivityIndicator
      style={styles.defaultIndicator}
      size={size}
      testID='activity_indicator'/>
  )
}

