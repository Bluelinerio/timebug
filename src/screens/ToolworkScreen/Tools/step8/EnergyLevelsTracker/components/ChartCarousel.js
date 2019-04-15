// @flow
import React from 'react'
import { View, Platform, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import ChartComponent from './ChartComponent'
import ChartContainerComponent from './ChartContainerComponent'
import type { CarouselEntryType } from '../types'
import styles, { itemWidth, sliderWidth } from '../styles'
import tron from 'reactotron-react-native'

export type Props = {
  entries: Array<CarouselEntryType>,
}

type State = {
  entries: [CarouselEntryType],
}

class ChartCarousel extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { entries } = props
    this.state = {
      entries,
    }
  }

  snap(key) {
    const { entries } = this.state
    const entryIndex = entries.reduce((index, entry, currentIndex) => {
      const { key: chartKey } = entry
      if (`${key}` === chartKey) return currentIndex
      return index
    }, 0)
    this._snapToItem(entryIndex)
  }

  _snapToItem = index => {
    this._carousel && this._carousel._snapToItem(index)
  }

  _renderItem({ item }) {
    return (
      <ChartContainerComponent title={item.title}>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>hi Im cool</Text>
        </View>
      </ChartContainerComponent>
    )
  }

  render() {
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => {
            this._carousel = c
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    )
  }
}

export default ChartCarousel
