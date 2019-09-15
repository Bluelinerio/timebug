// @flow
import React, { useContext, useCallback } from 'react'
import TabBar from '../components/TabBar'
import {
  ScreenContext,
  screenListWithNames,
  screens,
} from '../../context/ScreenContext'

const TabBarContainer = () => {
  const {
    screen,
    openDreambook,
    openDreamList,
    openDreamBookmarks,
  } = useContext(ScreenContext)

  const selectScreen = useCallback(
    (key: string) => {
      if (key === screen) return
      switch (key) {
        case screens.DREAMBOOK:
          openDreambook()
          break
        case screens.DREAM_LIST:
          openDreamList()
          break
        case screens.DREAM_BOOKMARKS:
          openDreamBookmarks()
          break
      }
    },
    [screen]
  )

  return (
    <TabBar
      selectScreen={selectScreen}
      screenListWithNames={screenListWithNames}
    />
  )
}

export default React.memo(TabBarContainer)
