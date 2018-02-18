/* @flow */

import React from 'react'
import {
  I18nManager,
  Image,
  View,
  Platform,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchableItem from './TouchableItem'

type Props = {
  onPress?: () => void,
  pressColorAndroid?: string,
  tintColor?: ?string,
  width?: ?number,
}

type DefaultProps = {
  pressColorAndroid: string,
  tintColor: ?string,
}

type State = {}

class HeaderCloseButton extends React.PureComponent<DefaultProps, Props, State> {
  static defaultProps = {
    pressColorAndroid: 'rgba(0, 0, 0, .32)',
    tintColor: Platform.select({
      ios: '#037aff',
      android: 'white'
    })
  }

  state = {}
  
  render() {
    const {
      onPress,
      pressColorAndroid,
      width,
      tintColor,
    } = this.props

    // eslint-disable-next-line global-require
    return (
      <TouchableItem
        accessibilityComponentType='button'
        accessibilityLabel={'close'}
        accessibilityTraits="button"
        testID='header-back'
        delayPressIn={0}
        onPress={onPress}
        pressColor={pressColorAndroid}
        style={styles.container}
        borderless
      >
        <View style={styles.container}>
          <Icon 
            style={styles.icon}
            name={'md-close'} 
            size={width || StyleSheet.flatten(styles.icon).width} 
            color={tintColor} 
          />
        </View>
      </TouchableItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  icon:
    Platform.OS === 'ios'
      ? {
          height: 24,
          width: 24,
          marginLeft: 15,
          marginRight: 17,
          marginTop: 7,
          marginBottom: 0,
          transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        }
      : {
          height: 24,
          width: 24,
          marginLeft: 16,
          marginRight: 16,
          marginTop: 7,
          marginBottom: 0,
          transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        }
      })

export default HeaderCloseButton
