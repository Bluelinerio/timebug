import React from 'react'
import { View } from 'react-native'
import moment from 'moment'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'

import tron from 'reactotron-react-native'

const FORMAT = 'HH:mm'

class Chart extends React.PureComponent {
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
        time: 0.1667,
      },
      {
        level: 1,
        time: 1,
      },
      {
        level: 3,
        time: 2,
      },
      {
        level: 5,
        time: 9,
      },
      {
        level: 9,
        time: 14.3667,
      },
      {
        level: 10,
        time: 22.55,
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

    const verticalContentInset = { top: 10, bottom: 10 }

    const horizontalContentInset = { left: 10, right: 15 }

    const xAxisHeight = 30

    const yTicks = 11

    return (
      <View style={{ height: 300, padding: 20, flexDirection: 'row' }}>
        <YAxis
          data={yAxis}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={yAxesSvg}
          numberOfTicks={yTicks}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
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
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ height: xAxisHeight }}
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
          />
        </View>
      </View>
    )
  }
}

export default Chart
