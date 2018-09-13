// @flow

import React, { PureComponent } from 'react'
import { View, Platform, LayoutAnimation } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles, { colors } from '../styles/PagninatedCarousel.style'
import StepCarouselGreet from '../containers/StepCarouselGreet'
import VerticalGradient from '../../../containers/VerticalGradient'
import SliderEntry from './SliderEntry'
import type { Item } from './SliderEntry'
import { NUMBER_OF_STEP_FOR_PHASES /* 10 */ } from '../../../services/cms'

type Props = {
  backgroundColorAtIndex: (step: number) => string,
  items: Array<Item>,
  sliderWidth: number,
  itemWidth: number,
  snap: number => void,
  activeSliderIndex: number,
  onPress: (item: Item, index: number) => void
}

type State = {
  activeSliderIndex: number,
  carouseRef: ?number
}

export default class PagninatedCarousel extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const { activeSliderIndex } = props
    this.state = {
      activeSliderIndex: activeSliderIndex || 0,
      carouseRef: null
    }
  }

  // This two mehtods are a fix to the a design decision of Pagination where when pressing a dot it looks for the carouselRef instead of have somethin like onPress(index:number).
  _snapToItem = index => {
    const { carouseRef } = this.state
    carouseRef && carouseRef._snapToItem(index)
  }
  _getPositionIndex = index => {
    const { activeSliderIndex } = this.state
    const addForPhase =
      Math.floor(activeSliderIndex / NUMBER_OF_STEP_FOR_PHASES) *
      NUMBER_OF_STEP_FOR_PHASES
    return addForPhase + index
  }

  render() {
    const {
      items,
      backgroundColorAtIndex,
      sliderWidth,
      itemWidth,
      snap,
      onPress
    } = this.props

    const { carouseRef, activeSliderIndex } = this.state

    return (
      <View style={styles.paginatedCarouselContainer}>
        <VerticalGradient />
        <View
          style={[styles.background, {
            backgroundColor: backgroundColorAtIndex(activeSliderIndex)
          }]}
        />
        <StepCarouselGreet index={activeSliderIndex} />
        <Carousel
          ref={c => {
            if (!this.state.carouseRef) {
              this.setState({ carouseRef: c })
            }
          }}
          data={items}
          renderItem={({ item, index }, parallaxProps) => (
            <SliderEntry
              data={item}
              even={false}
              parallax={false}
              parallaxProps={parallaxProps}
              width={sliderWidth}
              onPress={() => onPress(item, index)}
            />
          )}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={false}
          firstItem={activeSliderIndex}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={Platform.OS === 'ios' ? 0.9 : 1.0}
          enableMomentum={Platform.OS !== 'ios'}
          lockScrollWhileSnapping={Platform.OS !== 'ios'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={false}
          autoplay={false}
          autoplayDelay={2000}
          autoplayInterval={6000}
          onSnapToItem={(index: number) => {
            this.setState(
              { activeSliderIndex: index },
              LayoutAnimation.configureNext({
                duration: 400,
                create: {
                  type: LayoutAnimation.Types.spring,
                  property: LayoutAnimation.Properties.scaleXY,
                  springDamping: 0.7
                },
                update: {
                  type: LayoutAnimation.Types.spring,
                  springDamping: 0.7
                }
              })
            )
            if (snap) {
              snap(index)
            }
          }}
        />
        <Pagination
          dotsLength={Math.min(items.length, NUMBER_OF_STEP_FOR_PHASES)}
          activeDotIndex={activeSliderIndex % NUMBER_OF_STEP_FOR_PHASES}
          containerStyle={styles.paginationContainer}
          dotColor={colors.dotColor}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.inactiveDotColor}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.5}
          carouselRef={this}
          tappableDots={!!carouseRef}
        />
      </View>
    )
  }
}
