// @flow

import React, { Component } from 'react'
import { Animated, ScrollView, View } from 'react-native'
import invariant from 'invariant'

type Props = {
  content: React.Node,
  header: React.Node,
  headerImage?: React.Node,
  headerComponent?: React.Node,
  headerMaxHeight?: number,
  headerMinHeight?: number
}

type Layout = {
  height: number,
  width: number,
  x: number,
  y: number
}

type State = {
  scrollY: number,
  contentLayout: ?Layout,
  containerLayout: ?Layout,
  bufferViewHeight: number,
  layoutReady: boolean
}

export default class ScrollingHeaderPageComponent extends Component<
  Props,
  State
> {
  state = {
    scrollY: new Animated.Value(0),
    bufferViewHeight: 0,
    layoutReady: false
  }
  static defaultProps = {
    headerMaxHeight: 260,
    headerMinHeight: 0
  }
  constructor(props) {
    super(props)
    invariant(
      props.content,
      'ScrollingHeaderPageComponent missing content props'
    )
    invariant(props.header, 'ScrollingHeaderPageComponent missing header props')
  }
  // this is an implmentation of ajustment of a growing/shrinking view makin sure the the minimal height of the scroll view content is at least the height of the scroll view itself. (its container)
  layout = () => {
    const { headerMaxHeight, headerMinHeight } = this.props
    const {
      containerLayout,
      contentLayout,
      bufferViewHeight,
      layoutReady
    } = this.state
    if (containerLayout && contentLayout) {
      const newBufferHeight = Math.max(
        0,
        bufferViewHeight +
          Math.max(
            0,
            containerLayout.height - contentLayout.height - headerMaxHeight
          ) + 10
      )
      if (newBufferHeight !== bufferViewHeight) {
        this.setState({
          layoutReady: true,
          bufferViewHeight: newBufferHeight
        })
      } else if (!layoutReady) {
        this.setState({
          layoutReady: true
        })
      }
    }
  }

  onLayout = ({ nativeEvent: { layout } }) => {
    this.setState(
      {
        containerLayout: layout
      },
      this.layout
    )
  }
  oncontentLayout = ({ nativeEvent: { layout } }) => {
    this.setState(
      {
        contentLayout: layout
      },
      this.layout
    )
  }

  render() {
    const { layoutReady, bufferViewHeight } = this.state
    const {
      content,
      headerImage,
      headerComponent,
      header,
      headerMinHeight,
      headerMaxHeight
    } = this.props

    const headerScrollDistance = headerMaxHeight - headerMinHeight

    // const contentOpacity = this.state.scrollY.interpolate({
    //   inputRange: [0, 1, headerScrollDistance],
    //   outputRange: [1, 1, 0],
    //   extrapolate: 'clamp'
    // })
    // const imageOpacity = this.state.scrollY.interpolate({
    //   inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
    //   outputRange: [1, 1, 1],
    //   extrapolate: 'clamp'
    // })
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance],
      outputRange: [headerMaxHeight, headerMinHeight],
      extrapolate: 'clamp'
    })
    const translateY = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance],
      outputRange: [0, -100],
      extrapolate: 'clamp'
    })
    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 0, headerScrollDistance],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    return (
      <View onLayout={this.onLayout} style={{ flex: 1 }}>
        <ScrollView
          testID={'step_content_scrollable'}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <View
            style={{
              marginTop: headerMaxHeight,
              marginBottom: bufferViewHeight
            }}
          >
            <View onLayout={this.oncontentLayout}>{content}</View>
          </View>
        </ScrollView>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: 'transparent',
              overflow: 'hidden',
              height: headerHeight
            }
          ]}
        >
          {headerImage && (
            <Animated.Image
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: null,
                height: headerMaxHeight,
                zIndex: 10,
                opacity: 0.9,
                transform: [{ translateY }]
              }}
              source={headerImage}
            />
          )}
          {headerComponent && (
            <Animated.View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: null,
                height: headerMaxHeight,
                zIndex: 9,
                opacity: 1,
                transform: [{ translateY }]
              }}
            >
              {headerComponent}
            </Animated.View>
          )}
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: headerMaxHeight,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              opacity: headerOpacity,
              zIndex: 11
            }}
          >
            {header}
          </Animated.View>
        </Animated.View>
      </View>
    )
  }
}
