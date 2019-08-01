// @flow
import React from 'react'

type State = {
  category: string,
  setCategory: string => void,
  unsetCategory: () => void,
}

export type ProvidedProps = State

type Props = {
  children: Array<React.Node>,
}

const initialState = {
  category: null,
  setCategory: () => null,
  unsetCategory: () => null,
}

const { Provider, Consumer: ScreenConsumer } = React.createContext(initialState)

class ScreenProvider extends React.PureComponent<Props, State> {
  state = {
    ...initialState,
  }

  setCategory = (category: string) => {
    this.setState({ category })
  }

  unsetCategory = () => {
    this.setState({ category: null })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          setCategory: this.setCategory,
          unsetCategory: this.unsetCategory,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { ScreenProvider, ScreenConsumer }
