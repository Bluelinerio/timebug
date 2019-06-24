// @flow
import React        from 'react'
import { SECTIONS } from '../constants'

type contextState = {
  selectedSection: string,
  sections: Array<string>,
  changeSection: string => any,
}

type Props = {
  children: React.node,
}

const initialContextState: contextState = {
  selectedSection: SECTIONS.MENU,
}

const { Consumer: SectionConsumer, Provider } = React.createContext(
  initialContextState
)

class SectionProvider extends React.PureComponent<Props> {
  state = initialContextState

  _changeSection = (section: string) => {
    this.setState({ selectedSection: section })
  }

  render() {
    return (
      <Provider value={{ ...this.state, changeSection: this._changeSection }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { SectionConsumer, SectionProvider, initialContextState }
