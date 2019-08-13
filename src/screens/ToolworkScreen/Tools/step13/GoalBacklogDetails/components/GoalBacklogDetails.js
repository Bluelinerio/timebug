// @flow
import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import Details from '../containers/DetailsContainer'
import styles from '../styles'

class GoalBacklogDetails extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Details />
      </View>
    )
  }
}

export default GoalBacklogDetails
