// @flow
import React from 'react'

export type Screen = {
  title: string,
  key: string,
}

export const screens = {
  DREAMBOOK: 'DREAMBOOK',
  DREAM_LIST: 'DREAM_LIST',
  DREAM_BOOKMARKS: 'DREAM_BOOKMARKS',
  DREAM_SETTINGS: 'DREAM_SETTINGS',
}

export const screenListWithNames: Array<Screen> = [
  {
    title: 'Dream Journal',
    key: screens.DREAMBOOK,
  },
  {
    title: 'Past Dreams',
    key: screens.DREAM_LIST,
  },
  {
    title: 'Favorites',
    key: screens.DREAM_BOOKMARKS,
  },
  {
    title: 'Settings',
    key: screens.DREAM_SETTINGS,
  },
]

type Props = {
  children: React.ReactChildren,
}

type ProvidedProps = {
  screen: string,
  screens: Array<string>,
  openDreambook: () => void,
  openDreamBookmarks: () => void,
  openDreamList: () => void,
  openSettings: () => void,
  children: React.ReactChildren,
}

const initialState: ProvidedProps = {
  screen: screens.DREAMBOOK,
  screens,
  openDreambook: () => null,
  openDreamBookmarks: () => null,
  openDreamList: () => null,
  openSettings: () => null,
}

const ScreenContext = React.createContext(initialState)

class ScreenProvider extends React.PureComponent<Props> {
  state = { ...initialState }

  openDreambook = () => {
    this.setState({
      screen: screens.DREAMBOOK,
    })
  }

  openDreamBookmarks = () => {
    this.setState({
      screen: screens.DREAM_BOOKMARKS,
    })
  }

  openDreamList = () => {
    this.setState({
      screen: screens.DREAM_LIST,
    })
  }

  openSettings = () => {
    this.setState({
      screen: screens.DREAM_SETTINGS,
    })
  }

  render() {
    return (
      <ScreenContext.Provider
        value={{
          ...this.state,
          openDreambook: this.openDreambook,
          openDreamBookmarks: this.openDreamBookmarks,
          openDreamList: this.openDreamList,
          openSettings: this.openSettings,
        }}
      >
        {this.props.children}
      </ScreenContext.Provider>
    )
  }
}

export { ScreenContext, ScreenProvider }
