// @flow
import React, { Fragment, useContext } from 'react'
import { ScreenContext, screens } from '../../context/ScreenContext'
import Dreambook from '../../Dreambook'
import DreamList from '../../DreamList'
import Favorites from '../../Favorites'

const SwitchScreen = ({ screen }: { screen: string }) => {
  switch (screen) {
    case screens.DREAMBOOK:
      return <Dreambook />
    case screens.DREAM_LIST:
      return <DreamList />
    case screens.DREAM_BOOKMARKS:
      return <Favorites />
    default:
      return null
  }
}

const ToolContent = () => {
  const { screen } = useContext(ScreenContext)
  return (
    <Fragment>
      <SwitchScreen screen={screen} />
    </Fragment>
  )
}

export default ToolContent
