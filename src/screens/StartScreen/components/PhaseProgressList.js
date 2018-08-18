import React from 'react'
import { View, Text } from 'react-native'
import { phaseProgressStyles as styles } from '../styles'

const PhaseProgressList = () => {
  return (
    <View style={styles.listContainer}>
      <View style={[styles.phaseContainer, { backgroundColor: 'red' }]}>
        <Text>Phase1</Text>
      </View>
      <View style={[styles.phaseContainer, { backgroundColor: 'blue' }]}>
        <Text>Phase2</Text>
      </View>
      <View style={[styles.phaseContainer, { backgroundColor: 'green' }]}>
        <Text>Phase3</Text>
      </View>
    </View>
  )
}

export default PhaseProgressList
