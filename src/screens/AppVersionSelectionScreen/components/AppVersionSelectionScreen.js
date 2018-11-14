import React from 'react'
import { View } from 'react-native'
import GoToPrototypeButton from '../containers/GoToPrototypeButtonContainer'
import GoToOriginalAppButtonContainer from '../containers/GoToOriginalAppButtonContainer'
import styles from '../styles'

const AppVersionSelectionScreen = () => {
  return (
    <View style={[styles.container, styles.buttonContainer]}>
      <GoToPrototypeButton />
      <GoToOriginalAppButtonContainer />
    </View>
  )
}

export default AppVersionSelectionScreen
