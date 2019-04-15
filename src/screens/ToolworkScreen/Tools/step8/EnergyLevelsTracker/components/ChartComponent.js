// @flow
import React from 'react'
import { View } from 'react-native'
import moment from 'moment'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import type { DataSet } from '../types'
import {
  chartStyles,
  xAxesSvg,
  yAxesSvg,
  verticalContentInset,
  horizontalContentInset,
  physicalColor,
  spiritualColor,
  emotionalColor,
} from '../styles'

export type Props = {
  physicalData: DataSet,
  emotionalData: DataSet,
  spiritualData: DataSet,
}

const FORMAT = 'HH:mm'

const yAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const xAxis = [
  {
    value: 0,
    time: new Date(2019, 0, 0).setHours(0),
  },
  {
    value: 6,
    time: new Date(2019, 0, 0).setHours(6),
  },
  {
    value: 12,
    time: new Date(2019, 0, 0).setHours(12),
  },
  {
    value: 18,
    time: new Date(2019, 0, 0).setHours(18),
  },
  {
    value: 24,
    time: new Date(2019, 0, 0).setHours(24),
  },
]

const yTicks = 11

class Chart extends React.PureComponent<Props> {
  render() {
    const { physicalData, emotionalData, spiritualData } = this.props

    return (
      <View style={chartStyles.chartContainer}>
        <View style={chartStyles.yAxisContainer}>
          <YAxis
            data={yAxis}
            style={chartStyles.yAxis}
            contentInset={verticalContentInset}
            svg={yAxesSvg}
            numberOfTicks={yTicks}
          />
          <LineChart
            style={chartStyles.chart}
            data={physicalData}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            yAccessor={({ item }) => item.level}
            xAccessor={({ item }) => item.time}
            svg={{ stroke: physicalColor }}
            numberOfTicks={yTicks}
            yMin={0}
            yMax={10}
            xMin={0}
            xMax={24}
          >
            <Grid />
          </LineChart>
          <LineChart
            style={chartStyles.absoluteChart}
            data={spiritualData}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            yAccessor={({ item }) => item.level}
            xAccessor={({ item }) => item.time}
            showGrid={false}
            svg={{ stroke: spiritualColor }}
            numberOfTicks={yTicks}
            yMin={0}
            yMax={10}
            xMin={0}
            xMax={24}
          />
          <LineChart
            style={chartStyles.absoluteChart}
            data={emotionalData}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            showGrid={false}
            yAccessor={({ item }) => item.level}
            xAccessor={({ item }) => item.time}
            svg={{ stroke: emotionalColor }}
            numberOfTicks={yTicks}
            yMin={0}
            yMax={10}
            xMin={0}
            xMax={24}
          />
        </View>
        <XAxis
          style={chartStyles.xAxis}
          data={xAxis}
          contentInset={horizontalContentInset}
          xAccessor={({ item }) => item.value}
          svg={xAxesSvg}
          formatLabel={value =>
            moment(
              `${
                `${value}`.split('').length === 1 ? `0${value}` : `${value}`
              }:00`,
              FORMAT
            ).format('ha')
          }
          xMin={0}
          xMax={24}
        />
      </View>
    )
  }
}

export default Chart
