// @flow
import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import GoalDetailsSwitch from './GoalDetailsSwitch'
import styles from '../styles'

class GoalBacklogDetails extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <GoalDetailsSwitch />
      </View>
    )
  }
}

export default GoalBacklogDetails
