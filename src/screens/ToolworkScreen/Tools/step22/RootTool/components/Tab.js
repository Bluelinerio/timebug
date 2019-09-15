// @flow
import React, { useCallback, useContext } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Screen, ScreenContext } from '../../context/ScreenContext'
import styles from '../styles'

type Props = {
  screen: Screen,
  selectScreen: string => void,
}

const Tab = (props: Props) => {
  const { screen, selectScreen } = props
  const { key, title } = screen

  const { screen: selectedScreen } = useContext(ScreenContext)

  const onPress = useCallback(
    () => {
      selectScreen(key)
    },
    [selectScreen, key]
  )

  return (
    <TouchableOpacity
      style={[styles.tab, selectedScreen === key ? styles.selectedTab : {}]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.tabText,
          selectedScreen === key ? styles.selectedTabText : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default React.memo(Tab)
