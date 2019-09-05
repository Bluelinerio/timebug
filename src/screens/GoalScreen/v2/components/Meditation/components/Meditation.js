// @flow
import React from 'react'
import { View, Text } from 'react-native'
import GoalTypeList from './GoalTypeList'
import GoalArchiveLink from '../containers/GoalArchiveLinkContainer'
import styles from '../styles'

type Props = {
  tool: any,
}

class Meditation extends React.PureComponent<Props> {
  render() {
    const { tool } = this.props
    return tool ? (
      <View style={styles.padded}>
        <GoalTypeList {...this.props} />
        <GoalArchiveLink {...this.props} />
      </View>
    ) : (
      <View style={styles.container}>
        <Text style={styles.lockedText}>
          You have not unlocked this tool yet, complete step 5 to use it
        </Text>
      </View>
    )
  }
}

export default Meditation
