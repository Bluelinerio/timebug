// @flow
import React                 from 'react'
import { View, ActivityIndicator, StyleSheet } from "react-native"
import styles            from '../styles/components/DefaultIndicator';

type Props = {
  size: 'small' | 'large'
}

export default ({ size, color}: Props) => (
  <View style={styles.container}>
    <ActivityIndicator 
      size={size || 'large'} 
      color={color || StyleSheet.flatten(styles.activityIndicator).color} 
    />
  </View>

  
)