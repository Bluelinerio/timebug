import React                     from 'react'
import ProgressDashboardCell     from './ProgressCells/ProgressDashboardCell'
import PieProgressDashboardCell  from './ProgressCells/PieProgressDashboardCell'

const ProgressCellComponent = () => (
  <React.Fragment>
    <ProgressDashboardCell />
    <PieProgressDashboardCell />
  </React.Fragment>
)

export default ProgressCellComponent
