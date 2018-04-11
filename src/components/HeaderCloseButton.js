//@flow
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchableItem from './TouchableItem'

type Props = {
  onPress?: () => void,
  pressColorAndroid?: string,
  tintColor?: ?string
}

type DefaultProps = {
  pressColorAndroid: string,
  tintColor: ?string
}

type State = {}

class HeaderCloseButton extends React.PureComponent<
  DefaultProps,
  Props,
  State
> {
  static defaultProps = {
    pressColorAndroid: 'rgba(0, 0, 0, .32)',
    tintColor: Platform.select({
      ios: '#037aff',
      android: 'white'
    })
  }

  state = {}

  render() {
    const { onPress, pressColorAndroid, tintColor } = this.props

    // eslint-disable-next-line global-require
    return (
      <TouchableItem
        accessibilityComponentType="button"
        accessibilityLabel={'close'}
        accessibilityTraits="button"
        testID="header-back"
        delayPressIn={0}
        onPress={onPress}
        pressColor={pressColorAndroid}
        style={styles.container}
        borderless
      >
        <Icon
          style={styles.icon}
          name={'md-close'}
          size={24}
          color={tintColor}
        />
      </TouchableItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 24,
    marginRight: 16,
    marginLeft: 16,
    padding: 2
  },
  icon: {
    marginHorizontal: 6
  }
})

export default HeaderCloseButton
