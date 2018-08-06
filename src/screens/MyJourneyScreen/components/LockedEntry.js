import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

const LockedEntry = () => (
  <View style={[styles.container, styles.center]}>
    <Text>You have not unlocked this entry yet</Text>
  </View>
)

export const LockedEntryWithCheck = ({ check, children }) => {
  return (
    <React.Fragment>
      {
        check() 
          ? (
            <React.Fragment>
              {children}
            </React.Fragment>
          )
          : <LockedEntry />
      }
    </React.Fragment>
  )
}

export default LockedEntry
