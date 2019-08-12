import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import styles from '../styles'

class GoalBacklog extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

export default GoalBacklog
