// @flow
import React                                            from 'react'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'

export type ProvidedProps = {
  phase: string,
  selectPhase: string => void,
}

type Props = {
  children: React.ReactChildren,
}

const initialState = {
  phase: MEDITATION,
  selectPhase: () => null,
}

export const Phases = [MEDITATION, SELF_ASSESSMENT, VISION_CREATION]

const PhaseContext = React.createContext(initialState)

class PhaseProvider extends React.PureComponent<Props, State> {
  state = {
    ...initialState,
  }

  selectPhase = (phase: string) => {
    if (Phases.find(p => p === phase)) this.setState({ phase })
  }

  render() {
    return (
      <PhaseContext.Provider
        value={{ ...this.state, selectPhase: this.selectPhase }}
      >
        {this.props.children}
      </PhaseContext.Provider>
    )
  }
}

export { PhaseContext, PhaseProvider }
