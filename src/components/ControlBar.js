//@flow
import React                      from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon                       from 'react-native-vector-icons/Ionicons'
import SeekBar                    from './SeekBar'

import styles, { iconSize }       from '../styles/components/AudioVideoComponent'

export type ControlBarProps = {
  iconName: string,
  onButtonPress: () => any,
  seek: () => any,
  trackLength: number,
  onSlidingStart: () => any,
  currentPosition: number
}

const ControlBar = (props: ControlBarProps) => {
  return (
    <View style={styles.controlBarContainer}>
      <TouchableOpacity onPress={props.onButtonPress} style={styles.playButton}>
        <Icon name={props.iconName} size={iconSize} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.seekBarParent}>
        <SeekBar
          onSeek={props.seek}
          trackLength={props.trackLength}
          onSlidingStart={props.onSlidingStart}
          currentPosition={props.currentPosition}
        />
      </View>
    </View>
  )
}

export default ControlBar
