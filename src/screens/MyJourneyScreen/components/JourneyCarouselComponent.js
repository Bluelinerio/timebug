import React, { Component }    from 'react';
import { View, Platform } from 'react-native'
import Carousel from 'react-native-snap-carousel';

import CarouselEntry from './CarouselEntry'
import styles, { sliderWidth, itemWidth } from '../styles/CarouselStyles';

export default class MyCarousel extends Component {

    constructor(props) {
        super(props)
        const { entries } = props
        this.state = {
            entries,
            carouselRef: null
        }
    }

    _renderItem ({item}) {
        const { step, render: Component } = item
        return (
            <CarouselEntry width={itemWidth}>
                <Component step={step} />
            </CarouselEntry>
        )
    }

    render () {
        return (
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={(c) => {
                        if(!this.state.carouselRef)
                            this.setState({ carouselRef: c })
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
        );
    }
}