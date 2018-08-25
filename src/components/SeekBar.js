import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slider from 'react-native-slider'

import styles from '../styles/components/ControlBar'

import tron from 'reactotron-react-native'

function pad(n, width, z = 0) {
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const minutesAndSeconds = position => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2)
]

const SeekBar = props => {
  const { trackLength, currentPosition, onSeek, onSlidingStart } = props
  const elapsed = minutesAndSeconds(currentPosition)
  const remaining = minutesAndSeconds(trackLength - currentPosition)

  tron.log('RENDERED SEEKBAR')
  tron.log(!!Slider)
  tron.log(props)

  return (
    <View style={styles.seekBarContainer}>
      {/* <View style={styles.textContainer}>
        <Text style={styles.text}>
          {elapsed[0] + ':' + elapsed[1] + '/' + trackLength > 1 &&
            '-' + remaining[0] + ':' + remaining[1]}
        </Text>
      </View> */}
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

const Sb = props => {
  return (
    <View style={dummyStyles.container}>
      <Slider
        style={dummyStyles.sliderContainer}
        minimumTrackTintColor='red'
        thumbTintColor='#EEEEEE'
      />
    </View>
  )
}

const dummyStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',    
    flexDirection: 'row'
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 8,
  }
})

export default Sb
