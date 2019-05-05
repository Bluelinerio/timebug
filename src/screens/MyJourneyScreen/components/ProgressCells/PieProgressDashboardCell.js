// @flow
import * as React from 'react'
import styles from './styles/ProgressCell.style'
import PhaseProgressContainer from '../../../../containers/ProgressContainerChart'
import Cell from './Cell'

const style = {
  highlight: styles.pieChartContainer,
}

const ProgressDashboardCell = () => (
  <Cell
    layoutComponent={({ width, ...rest }) => (
      <PhaseProgressContainer maxColumns={3} width={width} {...rest} />
    )}
    title={'Progress Chart'}
    titleColor={'black'}
    style={style}
  />
)

export default ProgressDashboardCell
