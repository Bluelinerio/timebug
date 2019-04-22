// @flow
import React              from 'react'
import MenuScreen         from './MenuScreen'
import CheckinScreen      from '../containers/CheckinScreenContainer'
import WeeklyLogScreen    from '../containers/WeeklyLogScreenContainer'
import { SECTIONS }       from '../constants'
import type { ToolProps } from '../../../types'

type Props = ToolProps & {
  selectedSection: string,
  setMenu: () => any,
  setCheckin: () => any,
  setWeeklyLog: () => any,
}

class EnergyLevelsScreenContent extends React.PureComponent<Props> {
  render() {
    const { selectedSection, data, tool, storeAwardData } = this.props
    return (
      <React.Fragment>
        {selectedSection === SECTIONS.MENU && (
          <MenuScreen
            goToCheckinSection={this.props.setCheckin}
            goToWeeklySection={this.props.setWeeklyLog}
          />
        )}
        {selectedSection === SECTIONS.CHECK_IN && (
          <CheckinScreen
            data={data}
            tool={tool}
            storeAwardData={storeAwardData}
            goToMenu={this.props.setMenu}
          />
        )}
        {selectedSection === SECTIONS.WEEKLY_LIST && (
          <WeeklyLogScreen data={data} tool={tool} />
        )}
      </React.Fragment>
    )
  }
}

export default EnergyLevelsScreenContent
