// @flow
import React from 'react'
import {
  ActivityIndicator,
  StyleSheet
} from "react-native"

export default ({size}) => {
  return (
    <ActivityIndicator
      style={styles.indicator}
      size={size}/>
  )
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
