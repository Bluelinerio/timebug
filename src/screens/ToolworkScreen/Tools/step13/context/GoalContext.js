// @flow
import React from 'react'

type Props = {
  children: React.ReactNode,
}

export type ProvidedProps = {
  goal: any,
  setGoal: () => void,
  unsetGoal: () => void,
}

const initialState = {
  goal: null,
}

const GoalContext = React.createContext(initialState)

class GoalProvider extends React.PureComponent<Props, ProvidedProps> {
  state = {
    ...initialState,
  }

  setGoal = (goal: any) => {
    this.setState({ goal })
  }

  unsetGoal = () => {
    this.setState({ goal: null })
  }

  render() {
    return (
      <GoalContext.Provider
        value={{
          ...this.state,
          setGoal: this.setGoal,
          unsetGoal: this.unsetGoal,
        }}
      >
        {this.props.children}
      </GoalContext.Provider>
    )
  }
}

export { GoalProvider, GoalContext }
