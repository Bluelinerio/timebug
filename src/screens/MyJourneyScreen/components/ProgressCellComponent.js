import React                       from 'react'
import ProgressDashboardCell       from './ProgressCells/ProgressDashboardCell'
import PieProgressDashboardCell    from './ProgressCells/PieProgressDashboardCell'
import UnlockedStepsCarouselCell    from './UnlockedStepsCarouselCell'

const ProgressCellComponent =  () => (
  <React.Fragment >
    <ProgressDashboardCell />
    <PieProgressDashboardCell />
    <UnlockedStepsCarouselCell />
  </React.Fragment>
)
    
export default ProgressCellComponent