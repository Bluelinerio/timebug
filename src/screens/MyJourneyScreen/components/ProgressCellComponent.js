import React                    from 'react'

import ProgressDashboardCell    from './ProgressCells/ProgressDashboardCell'
import PieProgressDashboardCell from './ProgressCells/PieProgressDashboardCell'
import TimeTableProgressCell    from './ProgressCells/TimeTableProgressCell'

const ProgressCellComponent =  () => (
  <React.Fragment >
    <TimeTableProgressCell />
    <ProgressDashboardCell />
    <PieProgressDashboardCell />
  </React.Fragment>
)
    
export default ProgressCellComponent