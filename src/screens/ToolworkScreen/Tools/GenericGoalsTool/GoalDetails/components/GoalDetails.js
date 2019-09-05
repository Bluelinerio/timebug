import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import GoalDetailsContent from '../containers/GoalDetailsContentContainer'
import styles from '../styles'

class GoalDetails extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <GoalDetailsContent />
      </View>
    )
  }
}

export default GoalDetails
