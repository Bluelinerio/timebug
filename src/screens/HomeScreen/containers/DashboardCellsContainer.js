//@flow
import * as React              from 'react'
import { connect }             from 'react-redux'
import { compose, withProps }  from 'recompose'
import User                    from './../../../containers/User'
import { goToMeditation }      from './../../../redux/actions/nav.actions'
import MeditationDashobardCell from './../components/DashboardCells/MeditationDashobardCell'
import ProgressDashboardCell   from './../components/DashboardCells/ProgressDashboardCell'

// Dashboard should determind  visibilty based on a feed switch or A/B signal
const MeditationDashobardCellContainer = compose(
  connect(null, {
    onPress: () => goToMeditation('local-armchair-meditation')
  }),
  withProps({
    title: `I want to Meditate`
  })
)(MeditationDashobardCell)

const shouldShowUserProgressWithUser = user => user.forms.length > 3

const DashboardCellsContainer = ({ show = true }: { show: boolean }) => {
  return show ? (
    <User>
      {({ userState, isLoggedIn }) => (
        <React.Fragment>
          {isLoggedIn &&
            shouldShowUserProgressWithUser(userState) && (
              <ProgressDashboardCell />
            )}
          <MeditationDashobardCellContainer />
        </React.Fragment>
      )}
    </User>
  ) : null
}

export default DashboardCellsContainer
