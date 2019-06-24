// @flow
import React                                          from 'react'
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native'
import styles                                         from '../styles/components/DefaultIndicator'
import { lifevisionCollage }                          from '../resources/images'

type Props = {
  size: 'small' | 'large',
  color?: string,
  container?: boolean,
}

/**
 * @class DefaultIndicator
 * This class is the default loader of the app, renders an ActivityIndicator with a timebug background
 */
class DefaultIndicator extends React.PureComponent<Props> {
  render() {
    const { size, color, container = true } = this.props
    return (
      <View style={container ? styles.container : {}}>
        {container && (
          <Image
            tintColor="ccc"
            style={[
              StyleSheet.absoluteFill,
              {
                opacity: 0.04,
              },
            ]}
            source={lifevisionCollage}
          />
        )}
        <ActivityIndicator
          size={size || 'large'}
          color={color || StyleSheet.flatten(styles.activityIndicator).color}
        />
      </View>
    )
  }
}

export default DefaultIndicator
