/* @flow */

/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */
import React, { Component, Children } from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
type ViewStyleProp = StyleObj;

const ANDROID_VERSION_LOLLIPOP = 21;

type Props = {
  onPress: () => void,
  delayPressIn?: number,
  borderless?: boolean,
  pressColor?: string,
  activeOpacity?: number,
  children?: React.Element<*>,
  style?: ViewStyleProp
};

type DefaultProps = {
  pressColor: string
};

export default class TouchableItem extends Component<
  DefaultProps,
  Props,
  void
> {
  static defaultProps = {
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)'
  };

  render() {
    /*
     * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
     * therefore only enable it on Android Lollipop and above.
     *
     * All touchables on Android should have the ripple effect according to
     * platform design guidelines.
     * We need to pass the background prop to specify a borderless ripple effect.
     */
    if (
      Platform.OS === 'android' &&
      Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
      const { style, ...rest } = this.props; // eslint-disable-line no-unused-vars
      return (
        <TouchableNativeFeedback
          {...rest}
          style={null}
          background={TouchableNativeFeedback.Ripple(
            this.props.pressColor || '',
            this.props.borderless || false
          )}
        >
          <View style={this.props.style}>
            {Children.only(this.props.children)}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity {...this.props}>{this.props.children}</TouchableOpacity>
    );
  }
}
