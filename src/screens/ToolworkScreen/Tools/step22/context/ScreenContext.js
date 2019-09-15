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
}

export const screenListWithNames: Array<Screen> = [
  {
    title: 'Dream Record',
    key: screens.DREAMBOOK,
  },
  {
    title: 'Dream list',
    key: screens.DREAM_LIST,
  },
  {
    title: 'Favorites',
    key: screens.DREAM_BOOKMARKS,
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
  children: React.ReactChildren,
}

const initialState: ProvidedProps = {
  screen: screens.DREAMBOOK,
  screens,
  openDreambook: () => null,
  openDreamBookmarks: () => null,
  openDreamList: () => null,
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

  render() {
    return (
      <ScreenContext.Provider
        value={{
          ...this.state,
          openDreambook: this.openDreambook,
          openDreamBookmarks: this.openDreamBookmarks,
          openDreamList: this.openDreamList,
        }}
      >
        {this.props.children}
      </ScreenContext.Provider>
    )
  }
}

export { ScreenContext, ScreenProvider }
