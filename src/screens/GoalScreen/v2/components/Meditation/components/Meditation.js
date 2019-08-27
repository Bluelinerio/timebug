import React from 'react'
import { View } from 'react-native'
import GoalTypeList from './GoalTypeList'
import GoalArchiveLink from '../containers/GoalArchiveLinkContainer'
import styles from '../styles'

class Meditation extends React.PureComponent {
  render() {
    return (
      <View style={styles.padded}>
        <GoalTypeList {...this.props} />
        <GoalArchiveLink {...this.props} />
      </View>
    )
  }
}

export default Meditation
