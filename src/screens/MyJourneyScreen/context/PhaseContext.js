// @flow
import React        from 'react'
import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
} from '2020_services/cms'
import tron from 'reactotron-react-native'

export type ContextState = {
  selectedPhase: string,
  phases: Array<string>,
  selectPhase: string => any,
}

type Props = {
  children: React.node,
}

const initialContextState: ContextState = {
  selectedPhase: MEDITATION,
  phases: [MEDITATION, SELF_ASSESSMENT, VISION_CREATION],
  selectPhase: () => null,
}

const { Consumer: PhaseConsumer, Provider } = React.createContext(
  initialContextState
)

class PhaseProvider extends React.PureComponent<Props> {
  state = initialContextState

  _selectPhase = (phase: string) => {
    this.setState({ selectedPhase: phase })
  }

  render() {
    return (
      <Provider value={{ ...this.state, selectPhase: this._selectPhase }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { PhaseConsumer, PhaseProvider, initialContextState }
