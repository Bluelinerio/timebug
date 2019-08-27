// @flow
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles'

type Props = {
  openScreen: () => null,
  display: boolean,
}

const GoalArchiveLink = (props: Props) => {
  const { display, openScreen } = props

  return display ? (
    <View style={styles.goalArchiveLinkContainer}>
      <TouchableOpacity onPress={openScreen}>
        <Text style={styles.goalArchiveLink}>Open Goals archive</Text>
      </TouchableOpacity>
    </View>
  ) : null

}

export default React.memo(GoalArchiveLink)
