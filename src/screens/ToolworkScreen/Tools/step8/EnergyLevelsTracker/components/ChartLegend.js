// @flow
import React                                               from 'react'
import { View, Text }                                      from 'react-native'
import Circle                                              from './Circle'
import styles, { circleContainerDimensions, circleRadius } from '../styles'
import { chartLegendElements }                             from '../constants'

type Props = {
  height: number,
  width: number,
  fill: string,
}

class ChartLegend extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.legendContainer}>
        {chartLegendElements.map(element => {
          return (
            <View key={element.key} style={styles.legendElement}>
              <Text style={styles.legendText}>{element.text}</Text>
              <Circle
                height={circleContainerDimensions}
                width={circleContainerDimensions}
                radius={circleRadius}
                fill={element.color}
              />
            </View>
          )
        })}
      </View>
    )
  }
}

export default ChartLegend
