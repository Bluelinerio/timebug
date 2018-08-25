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
  tron.log(props)
  tron.log(elapsed)
  tron.log(remaining)
  return (
    <View style={dummyStyles.container}>
      <Slider
        style={dummyStyles.sliderContainer}
        minimumTrackTintColor="red"
        thumbTintColor="#EEEEEE"
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
      />
      <View style={dummyStyles.textContainer}>
        <Text style={dummyStyles.text}>
          {`${remaining[0]}:${remaining[1]}`}
        </Text>
      </View>
    </View>
  )
}

const dummyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    flexDirection: 'row'
  },
  sliderContainer: {
    flex: 4,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 8
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#212121',
    fontSize: 10
  }
})

export default SeekBar
