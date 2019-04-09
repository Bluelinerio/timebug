// @flow
import React from 'react'
import EnergyLevelsScreen from '../components/EnergyLevelsScreen'
import { SECTIONS } from '../contants'
import type { ToolProps } from '../../../types'

type State = {
  selectedSection: string,
}

//TODO: Refactor with context once the error with Ctx api is figured out
class EnergyLevelsScreenContainer extends React.PureComponent<ToolProps, State> {
  state = {
    selectedSection: SECTIONS.MENU,
  }

  setMenu = () => {
    this.setState({ selectedSection: SECTIONS.MENU })
  }

  setCheckin = () => {
    this.setState({ selectedSection: SECTIONS.CHECK_IN })
  }

  setWeeklyLog = () => {
    this.setState({ selectedSection: SECTIONS.WEEKLY })
  }

  render() {
    const { selectedSection } = this.state
    return (
      <EnergyLevelsScreen
        {...this.props}
        selectedSection={selectedSection}
        setMenu={this.setMenu}
        setCheckin={this.setCheckin}
        setWeeklyLog={this.setWeeklyLog}
      />
    )
  }
}

export default EnergyLevelsScreenContainer
