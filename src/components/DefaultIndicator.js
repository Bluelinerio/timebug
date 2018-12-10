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

const DefaultIndicator = ({ size, color, container = true }: Props) => (
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

export default DefaultIndicator
