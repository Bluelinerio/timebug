// @flow

import React, { Component }            from 'react';
import { Animated, ScrollView, View, } from 'react-native';
import { styles }                      from 'react-native-theme';

const HEADER_MAX_HEIGHT      = 250;
const HEADER_MIN_HEIGHT      = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

type Props = {
  content: ReactElement,
  headerImage: ReactElement,
  headerComponent: ReactElement,
  header: ReactElement
}

type State = {
  scrollY: number
}

export default class ScrollableHeader extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const headerHeight   = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE ],
      outputRange: [ HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT ],
      extrapolate: 'clamp',
    });
    const imageOpacity   = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
      outputRange: [ 1, 1, 0 ],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE ],
      outputRange: [ 0, -50 ],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.scrollableHeaderFill}>
        <ScrollView
          style={styles.scrollableHeaderFill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [ { nativeEvent: { contentOffset: { y: this.state.scrollY } } } ],
          )}
        >
          <View style={styles.scrollableHeaderScrollViewContent}>
            {this.props.content}
          </View>
        </ScrollView>
        <Animated.View style={[ styles.scrollableHeaderHeader, {
          height: headerHeight,
          backgroundColor: headerHeight === HEADER_MIN_HEIGHT ? 'black' : 'transparent',
        } ]}>
          {
            this.props.headerImage ? <Animated.Image
              style={[
                styles.scrollableHeaderBackgroundImage,
                {
                  opacity: imageOpacity,
                  transform: [ { translateY: imageTranslate } ],
                },
              ]}
              source={this.props.headerImage}
            /> : this.props.headerComponent ? <Animated.View
              style={[
                styles.scrollableHeaderBackgroundContent,
                { transform: [ { translateY: imageTranslate } ] },
              ]}
            >
              {this.props.headerComponent}
            </Animated.View> : null
          }

          <Animated.View style={styles.scrollableHeaderBar}>
            {this.props.header}
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}