import React                      from 'react'
import { View }                   from 'react-native'
import type { Chart, ChartProps } from '2020_components/PhaseProgress/PieChart'
import PieChart                   from '2020_components/PhaseProgress/PieChart'
import styles                     from '../styles'

export type Props = {
  elements: Chart,
  chartProps: ChartProps,
}

class ChartContainerComponent extends React.PureComponent<Props> {
  render() {
    const { elements, chartProps } = this.props
    return (
      <View style={[styles.container, styles.chartsArea]}>
        {elements &&
          elements.map(element => (
            <View style={styles.chartContainer} key={element.key}>
              <PieChart
                element={element}
                chartProps={chartProps}
                height={120}
                width={80}
              />
            </View>
          ))}
      </View>
    )
  }
}

export default ChartContainerComponent
