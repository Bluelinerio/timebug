// @flow
import React                                from 'react'
import { connectContext }                   from 'react-connect-context'
import EnergyLevelsScreen                   from '../components/EnergyLevelsScreen'
import type { ToolProps }                   from '../../../types'
import { SectionProvider, SectionConsumer } from '../context/ScreenContext'

type State = {
  selectedSection: string,
}

const ConnectedEnergyLevelsScreen = connectContext(SectionConsumer)(
  EnergyLevelsScreen
)

class EnergyLevelsScreenContainer extends React.PureComponent<
  ToolProps,
  State
> {
  render() {
    return (
      <React.Fragment>
        <SectionProvider>
          <ConnectedEnergyLevelsScreen {...this.props} />
        </SectionProvider>
      </React.Fragment>
    )
  }
}

export default EnergyLevelsScreenContainer
