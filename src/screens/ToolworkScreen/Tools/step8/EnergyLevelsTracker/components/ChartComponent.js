import React from 'react'
import { View } from 'react-native'
import * as scale from 'd3-scale'
import moment from 'moment'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import tron from 'reactotron-react-native'

const FORMAT = 'HH:mm'

class Chart extends React.PureComponent {
  render() {
    const yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const xAxis = [
      {
        value: 0,
        text: '12AM',
        time: moment('00:00', FORMAT).toDate(),
      },
      {
        value: 3,
        text: '3AM',
        time: moment('03:00', FORMAT).toDate(),
      },
      {
        value: 6,
        text: '6AM',
        time: moment('06:00', FORMAT).toDate(),
      },
      {
        value: 9,
        text: '9AM',
        time: moment('09:00', FORMAT).toDate(),
      },
      {
        value: 12,
        text: '12PM',
        time: moment('12:00', FORMAT).toDate(),
      },
      {
        value: 15,
        text: '3PM',
        time: moment('15:00', FORMAT).toDate(),
      },
      {
        value: 18,
        text: '6PM',
        time: moment('18:00', FORMAT).toDate(),
      },
      {
        value: 21,
        text: '9PM',
        time: moment('21:00', FORMAT).toDate(),
      },
      {
        value: 24,
        text: '12PM',
        time: moment('24:00', FORMAT).toDate(),
      },
    ]
    const data = [4, 5, 10, 3, 2, 6, 8, 1, 9]

    const xAxesSvg = {
      fill: 'gray',
      fontSize: 9,
      fontWeight: 'bold',
      rotation: -20,
      originY: 20,
      y: 5,
    }

    const yAxesSvg = {
      fill: 'gray',
      fontSize: 9,
    }

    const verticalContentInset = { top: 10, bottom: 10 }

    const horizontalContentInset = { left: 30, right: 10 }

    const xAxisHeight = 30
    return (
      <View style={{ height: 300, padding: 20, flexDirection: 'row' }}>
        <YAxis
          data={data}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={yAxesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={{
              ...verticalContentInset,
              ...horizontalContentInset,
            }}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            numberOfTicks={10}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ height: xAxisHeight }}
            data={xAxis}
            contentInset={horizontalContentInset}
            xAccessor={({ item }) => item.time}
            svg={xAxesSvg}
            scale={scale.scaleTime}
            numberOfTicks={9}
            formatLabel={value => moment(value).format('h a')}
          />
        </View>
      </View>
    )
  }
}

export default Chart
