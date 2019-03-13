//@flow
import React, { Component }               from 'react'
import { View, Platform }                 from 'react-native'
import Carousel                           from 'react-native-snap-carousel'
import CarouselEntry                      from './CarouselEntry'
import styles, { sliderWidth, itemWidth } from '../styles/CarouselStyles'
import { CarouselEntryType }              from '../containers/types'

type JourneyCarouselComponentProps = {
  entries: [CarouselEntryType],
  render: React.ComponentType<any>,
  component: string,
  reward: string,
}

type JourneyCarouselState = {
  entries: [CarouselEntryType],
  carouselRef: any,
}

export default class JourneyCarouselComponent extends Component<
  JourneyCarouselComponentProps,
  JourneyCarouselState
> {
  constructor(props) {
    super(props)
    const { entries } = props
    this.state = {
      entries,
      carouselRef: null,
    }
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.component !== this.props.component ||
      nextProps.reward !== this.props.reward
    ) {
      this.snap(nextProps.reward)
    }
    return false
  }

  snap(reward) {
    const { entries } = this.state
    const entryIndex = entries.reduce((index, entry, currentIndex) => {
      const { step } = entry
      if (`${step}` === reward) return currentIndex
      return index
    }, 0)
    this._snapToItem(entryIndex)
  }

  _snapToItem = index => {
    const { carouselRef } = this.state
    carouselRef && carouselRef._snapToItem(index)
  }

  _renderItem = ({ item }: { item: CarouselEntryType }) => {
    const { step, title } = item
    const { render: Component } = this.props
    return (
      <CarouselEntry width={itemWidth} title={title}>
        <Component step={step} />
      </CarouselEntry>
    )
  }

  render() {
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={c => {
            if (!this.state.carouselRef) this.setState({ carouselRef: c })
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          itemWidth={itemWidth}
          sliderWidth={sliderWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          hasParallaxImages={false}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={Platform.OS === 'ios' ? 0.9 : 1.0}
          enableMomentum={Platform.OS !== 'ios'}
          lockScrollWhileSnapping={Platform.OS !== 'ios'}
        />
      </View>
    )
  }
}
