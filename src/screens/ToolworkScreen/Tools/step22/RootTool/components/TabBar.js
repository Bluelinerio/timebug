// @flow
import React, { memo } from 'react'
import { View } from 'react-native'
import Tab from './Tab'
import styles from '../styles'
import { Screen } from '../../context/ScreenContext'

type Props = {
  selectScreen: string => void,
  screenListWithNames: Array<Screen>,
}

const TabBar = (props: Props) => {
  const { screenListWithNames, selectScreen } = props
  return (
    <View style={styles.tabBar}>
      {screenListWithNames.map(screen => {
        return (
          <Tab key={screen.key} screen={screen} selectScreen={selectScreen} />
        )
      })}
    </View>
  )
}

export default memo(TabBar)
