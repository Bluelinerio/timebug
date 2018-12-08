// @flow
import React from 'react'

type contextState = {
  selectedSection: string,
  sections: Array<string>,
  changeSection: string => any,
}

type Props = {
  children: React.node,
}

export type Sections = {
  form: string,
  textContent: string,
}

const SectionValues: Sections = {
  form: 'form',
  textContent: 'textContent',
}

const initialContextState: contextState = {
  selectedSection: SectionValues.textContent,
  sections: Object.keys(SectionValues),
}

const { Consumer: SectionConsumer, Provider } = React.createContext()

class SectionProvider extends React.PureComponent<Props> {
  state = {
    ...initialContextState,
  }

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

export { SectionConsumer, SectionProvider, initialContextState, SectionValues }
