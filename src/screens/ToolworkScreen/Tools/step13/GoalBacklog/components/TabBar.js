// @flow
import React from 'react'
import { View } from 'react-native'
import { screens } from '../../context/ScreenContext'
import Tab from './TabBarButton'
import styles from '../styles'

type Props = {
  screen: string,
  onBacklogPress: () => void,
  onDeletedBacklogPress: () => void,
}

class TabBar extends React.PureComponent<Props> {
  render() {
    const { screen, onBacklogPress, onDeletedBacklogPress } = this.props
    return (
      <View style={styles.tabBarContainer}>
        <Tab
          onPress={onBacklogPress}
          selected={screen === screens.BACKLOG}
          text={'Completed Goals'}
          style={styles.leftTab}
        />
        <Tab
          onPress={onDeletedBacklogPress}
          selected={screen === screens.DELETED_BACKLOG}
          text={'Deleted Goals'}
        />
      </View>
    )
  }
}

export default TabBar
