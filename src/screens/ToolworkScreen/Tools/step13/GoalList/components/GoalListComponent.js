// @flow
import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import List from '../containers/ListContainer'
import styles from '../styles'

type Props = {
  category: string,
}

class GoalListComponent extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <List />
      </View>
    )
  }
}

export default GoalListComponent
