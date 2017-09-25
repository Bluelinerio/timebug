// @flow
import React from 'react'
import {ActivityIndicator} from "react-native"
import {styles} from 'react-native-theme';


export default ({size}) => {
  return (
    <ActivityIndicator
      style={styles.defaultIndicator}
      size={size}/>
  )
}

