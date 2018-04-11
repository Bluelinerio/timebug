//@flow
import * as React from 'react'
import { connect } from 'react-redux'
import User from './../../../containers/User'
import { goToMeditation } from './../../../redux/actions/nav.actions'
import MeditationDashobardCell from './../components/DashboardCells/MeditationDashbardCell'
import LifevisionDashboardCell from './../components/DashboardCells/LifevisionDashboardCell'

const LifevisionDashoboardCellContainer = () => (
  <User
    renderWithState={() => <LifevisionDashboardCell />}
    renderWithUser={() => <LifevisionDashboardCell />}
  />
)

const MeditationDashobardCellContainer = connect(null, {
  onPress: goToMeditation
})(MeditationDashobardCell)

const DashboardCellsContainer = ({ show = true }: { show: boolean }) => {
  return show ? (
    <React.Fragment>
      <LifevisionDashoboardCellContainer />
      <MeditationDashobardCellContainer />
    </React.Fragment>
  ) : null
}

export default DashboardCellsContainer
