// @flow
import { compose, mapProps }   from 'recompose'
import PhaseProgressHOC        from '2020_containers/ProgressContainerChart/PhaseProgressChartHOC'
import ChartContainerComponent from '../components/ChartContainerComponent'
import type { Props }          from '../components/ChartContainerComponent'

const merge = (props: Props): Props => {
  const { chartProps, elements } = props
  return {
    chartProps,
    elements,
  }
}

export default compose(PhaseProgressHOC, mapProps(merge))(
  ChartContainerComponent
)
