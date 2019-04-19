// @flow
import React from 'react'
import { View, Text } from 'react-native'
import type { DataSet } from '../types'
import styles from '../styles'

type Props = {
  title: string,
  children: React.Node<any>,
  physicalData: DataSet,
  emotionalData: DataSet,
  spiritualData: DataSet,
}

class ChartContainerComponent extends React.PureComponent<Props> {
  render() {
    const { title, physicalData, emotionalData, spiritualData } = this.props
    const disableChart =
      physicalData.length === 0 ||
      spiritualData.length === 0 ||
      emotionalData.length === 0
    return (
      <View style={[styles.entry]}>
        {/* <View style={[!disableChart ? styles.hidden : {}]} /> */}
        <View style={[!disableChart ? {} : {}]} />
        <View style={styles.slideInnerContainer}>
          <View style={styles.carouselContainerTitleContainer}>
            <Text style={styles.carouselContainerTitle}>{title}</Text>
          </View>
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default ChartContainerComponent
