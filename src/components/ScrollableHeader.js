// @flow

import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 60;
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
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
          <View style={styles.scrollViewContent}>
            {this.props.content}
          </View>
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight, backgroundColor: headerHeight === HEADER_MIN_HEIGHT ? 'black' : 'transparent'}]}>
          {
            this.props.headerImage ?
              <Animated.Image
                style={[
                  styles.backgroundImage,
                  {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                ]}
                source={this.props.headerImage}
              /> :
              this.props.headerComponent ?
                <Animated.View
                  style={[
                    styles.backgroundContent,
                    {transform: [{translateY: imageTranslate}]},
                  ]}
                >
                  {this.props.headerComponent}
                </Animated.View>: null
          }

          <Animated.View style={styles.bar}>
            {this.props.header}
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  backgroundContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
  },
});