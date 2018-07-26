import React                    from 'react'

import ProgressDashboardCell    from './ProgressCells/ProgressDashboardCell'
import PieProgressDashboardCell from './ProgressCells/PieProgressDashboardCell'
import TimeTableProgressCell    from './ProgressCells/TimeTableProgressCell'

const ProgressCellComponent =  () => (
  <React.Fragment >
    <ProgressDashboardCell />
    <PieProgressDashboardCell />
    <TimeTableProgressCell />
  </React.Fragment>
)
    
export default ProgressCellComponent