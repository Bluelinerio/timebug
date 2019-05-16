// @flow
import React                       from 'react'
import type { SECTIONS }           from 'types'
import { CHECKINS, SETTINGS, DEV } from '../constants'

type State = {
  selected: SECTIONS,
}

const initialState: State = {
  selected: SETTINGS,
}

const Props = {
  children: React.Children,
}

const { Provider, Consumer: SectionConsumer } = React.createContext(
  initialState
)

class SectionProvider extends React.PureComponent<Props, State> {
  state = initialState

  changeSection = (section: string) => {
    this.setState({ selected: section })
  }

  _setCheckins = () => {
    this.changeSection(CHECKINS)
  }

  _setSettings = () => {
    this.changeSection(SETTINGS)
  }

  _setDevelopment = () => {
    this.changeSection(DEV)
  }

  render() {
    return (
      <Provider
        value={{
          selected: this.state.selected,
          openCheckins: this._setCheckins,
          openSettings: this._setSettings,
          openDevelopment: __DEV__ ? this._setDevelopment : null,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SectionProvider, SectionConsumer, initialState }
