import React from 'react'
import { View } from 'react-native'
import GoToOriginalAppButtonContainer from '../containers/GoToOriginalAppButtonContainer'
import Switch from '../containers/SwitchAppVersionContainer'
import styles from '../styles'

const AppVersionSelectionScreen = () => {
  return (
    <View style={[styles.container, styles.buttonContainer]}>
      <GoToOriginalAppButtonContainer />
      <Switch />
    </View>
  )
}

export default AppVersionSelectionScreen
