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
  currentPosition: number,
}

class ControlBar extends React.PureComponent<ControlBarProps> {
  render() {
    return (
      <View style={styles.controlBarContainer}>
        <TouchableOpacity
          onPress={this.props.onButtonPress}
          style={styles.playButton}
        >
          <Icon
            name={this.props.iconName}
            size={iconSize}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.seekBarParent}>
          <SeekBar
            onSeek={this.props.seek}
            trackLength={this.props.trackLength}
            onSlidingStart={this.props.onSlidingStart}
            currentPosition={this.props.currentPosition}
          />
        </View>
      </View>
    )
  }
}

export default ControlBar
