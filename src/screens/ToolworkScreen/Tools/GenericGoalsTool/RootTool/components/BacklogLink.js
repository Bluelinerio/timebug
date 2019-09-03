// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

type Props = {
  onPress: () => void,
  color: String,
}

class BacklogLink extends React.PureComponent<Props> {
  render() {
    const { onPress, color } = this.props
    return (
      <View styles={styles.linkContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.link, { color }]}>Open Goals Archive</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default BacklogLink
