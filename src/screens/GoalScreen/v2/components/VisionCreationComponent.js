import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

class VisionCreationComponent extends React.PureComponent {
  render() {
    return (
      <View style={styles.lockedContainer}>
        <Text style={styles.lockedText}>Check in back later to use this tool!</Text>
      </View>
    )
  }
}

export default VisionCreationComponent
