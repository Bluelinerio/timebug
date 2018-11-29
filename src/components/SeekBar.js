//@flow
import React from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import styles from '../styles/components/AudioVideoComponent';

const pad = (n, width, z = 0) => {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

type SeekBarProps = {
  trackLength: number,
  currentPosition: number,
  onSeek: () => any,
  onSlidingStart: () => any,
};

const minutesAndSeconds = position => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];

const SeekBar = (props: SeekBarProps) => {
  const { trackLength, currentPosition, onSeek, onSlidingStart } = props;
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={styles.seekBarContainer}>
      <Slider
        style={styles.sliderContainer}
        minimumTrackTintColor="red"
        thumbTintColor="#EEEEEE"
        maximumValue={Math.max(trackLength, 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${remaining[0]}:${remaining[1]}`}</Text>
      </View>
    </View>
  );
};

export default SeekBar;
