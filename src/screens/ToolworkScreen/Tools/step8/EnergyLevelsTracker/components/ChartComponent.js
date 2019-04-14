// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import moment from 'moment'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import type { DataSet } from '../types'

export type Props = {
  physicalData: DataSet,
  emotionalData: DataSet,
  spiritualData: DataSet,
}

const FORMAT = 'HH:mm'

class Chart extends React.PureComponent<Props> {
  render() {
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
    const data = [
      {
        level: 10,
        time: 6,
      },
      {
        level: 1,
        time: 12,
      },
      {
        level: 3,
        time: 14,
      },
      {
        level: 5,
        time: 15,
      },
      {
        level: 9,
        time: 18,
      },
      {
        level: 10,
        time: 24,
      },
    ]
    const data2 = [
      {
        level: 2,
        time: 0,
      },
      {
        level: 6,
        time: 2.1,
      },
      {
        level: 9,
        time: 10.23,
      },
      {
        level: 4,
        time: 13.2,
      },
      {
        level: 2,
        time: 18,
      },
      {
        level: 10,
        time: 22.55,
      },
    ]

    const data3 = [
      {
        level: 1,
        time: 4,
      },
      {
        level: 6,
        time: 6,
      },
      {
        level: 2,
        time: 10,
      },
      {
        level: 1,
        time: 12.1,
      },
      {
        level: 4,
        time: 18,
      },
      {
        level: 1,
        time: 24,
      },
    ]

    const xAxesSvg = {
      fill: 'gray',
      fontSize: 9,
      fontWeight: 'bold',
    }

    const yAxesSvg = {
      fill: 'gray',
      fontSize: 9,
    }

    const verticalContentInset = { top: 5, bottom: 5 }

    const horizontalContentInset = { left: 15, right: 15 }

    const xAxisHeight = 30

    const yAxisWidth = 15

    const yTicks = 11

    return (
      <View style={{ height: 300, padding: 20, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <YAxis
            data={yAxis}
            style={{ width: yAxisWidth }}
            contentInset={verticalContentInset}
            svg={yAxesSvg}
            numberOfTicks={yTicks}
          />
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            yAccessor={({ item }) => item.level}
            xAccessor={({ item }) => item.time}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            numberOfTicks={yTicks}
            yMin={0}
            yMax={10}
            xMin={0}
            xMax={24}
          >
            <Grid />
          </LineChart>
          <LineChart
            style={{ ...StyleSheet.absoluteFillObject, marginLeft: yAxisWidth }}
            data={data2}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            yAccessor={({ item }) => item.level}
            xAccessor={({ item }) => item.time}
            showGrid={false}
            svg={{ stroke: 'rgb(21, 21, 21)' }}
            numberOfTicks={yTicks}
            yMin={0}
            yMax={10}
            xMin={0}
            xMax={24}
          />
          <LineChart
            style={{ ...StyleSheet.absoluteFillObject, marginLeft: yAxisWidth }}
            data={data3}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            showGrid={false}
            yAccessor={({ item }) => item.level}
            xAccessor={({ item }) => item.time}
            svg={{ stroke: 'red' }}
            numberOfTicks={yTicks}
            yMin={0}
            yMax={10}
            xMin={0}
            xMax={24}
          />
        </View>
        <XAxis
          style={{ marginLeft: yAxisWidth, height: xAxisHeight }}
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
