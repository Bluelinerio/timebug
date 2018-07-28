import React, { Component }    from 'react';
import { Text } from 'react-native'
import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends Component {

    constructor(props) {
        super(props)
        const { entries } = props
        this.state = {
            entries
        }
    }

    _renderItem ({item, index}) {
        const { render } = item
        console.log(item)
        return (
            <Text>{index}</Text>
        )
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              itemWidth={400}
              sliderWidth={400}
            />
        );
    }
}