import React, { useContext, useCallback } from 'react'
import TabBar from '../components/TabBar'
import { ScreenContext } from '../../context/ScreenContext'

const TabBarContainer = () => {
  const { screen, openBacklog, openDeletedBacklog } = useContext(ScreenContext)

  const onBacklogPress = useCallback(
    () => {
      openBacklog()
    },
    [openBacklog]
  )

  const onDeletedBacklogPress = useCallback(
    () => {
      openDeletedBacklog()
    },
    [openDeletedBacklog]
  )

  return (
    <TabBar
      onBacklogPress={onBacklogPress}
      onDeletedBacklogPress={onDeletedBacklogPress}
      screen={screen}
    />
  )
}

export default TabBarContainer
