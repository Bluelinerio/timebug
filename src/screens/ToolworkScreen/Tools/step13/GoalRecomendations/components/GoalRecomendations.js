import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import OptionsList from '../containers/OptionsListContainer'
import styles from '../styles'

class GoalRecomendations extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <OptionsList />
      </View>
    )
  }
}

export default GoalRecomendations
