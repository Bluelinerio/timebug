// @flow
import * as React                  from 'react'
import styles                      from './styles/ProgressCell.style'
import TimeSpentOnPillarsComponent from '../TimeSpentOnPillarsComponent'
import Cell                        from './Cell'

const style = {
  highlight: styles.pieChartContainer
}

const TimeTableProgressCell = ({ pillars }) =>
  pillars ? (
    <Cell
      layoutComponent={props => (
        <TimeSpentOnPillarsComponent pillars={pillars} {...props} />
      )}
      title={'Your weekly Timetable'}
      titleColor={'black'}
      style={style}
    />
  ) : null

export default TimeTableProgressCell
