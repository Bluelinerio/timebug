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
            size={width} 
            color={tintColor || white} 
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
          height: 21,
          width: 13,
          marginLeft: 10,
          marginRight: 22,
          marginVertical: 12,
          transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        }
      : {
          height: 24,
          width: 24,
          margin: 16,
          transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        }
      })

export default HeaderCloseButton