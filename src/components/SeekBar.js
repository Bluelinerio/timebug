import React from 'react'
import { View, Text } from 'react-native'
import Slider from 'react-native-slider'

import styles from '../styles/components/ControlBar'

function pad(n, width, z = 0) {
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const minutesAndSeconds = position => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2)
]

const SeekBar = ({ trackLength, currentPosition, onSeek, onSlidingStart }) => {
  const elapsed = minutesAndSeconds(currentPosition)
  const remaining = minutesAndSeconds(trackLength - currentPosition)
  return (
    <View style={styles.seekBarContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {elapsed[0] + ':' + elapsed[1] + '/' + trackLength > 1 &&
            '-' + remaining[0] + ':' + remaining[1]}
        </Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
          onSlidingStart={onSlidingStart}
          onSlidingComplete={onSeek}
          value={currentPosition}
        />
      </View>
    </View>
  )
}

export default SeekBar
