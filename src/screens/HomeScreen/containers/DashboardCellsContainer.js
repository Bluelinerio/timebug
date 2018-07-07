//@flow
import * as React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { goToMeditation } from './../../../redux/actions/nav.actions'
import combineSelectors from '../../../redux/selectors/combineSelectors'
import selectors from '../../../redux/selectors'
import MeditationDashobardCell from './../components/DashboardCells/MeditationDashobardCell'
import ProgressDashboardCell from './../components/DashboardCells/ProgressDashboardCell'

const meditationCell = R.cond([
	[
		selectors.showUserMeditationOption,
		({ dispatch }) => ({
			title: `I want to Meditate`,
			onPress: () => dispatch(goToMeditation())
		})
	],
	[R.T, () => undefined]
])

const DashboardCellsContainer = compose(
	connect(
		combineSelectors({
			showUserProgress: selectors.showUserProgress,
			meditationCell
		})
	)
)(({ showUserProgress, meditationCell }: { showUserProgress: boolean, meditationCell: any }) => (
	<React.Fragment>
		{showUserProgress && <ProgressDashboardCell />}
		{meditationCell && <MeditationDashobardCell {...meditationCell} />}
	</React.Fragment>
))

export default DashboardCellsContainer
