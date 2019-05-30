import * as React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Slider from '@react-native-community/slider';

const StyledSlider = ({
  color,
  value,
  maximumValue,
  minimumValue,
  onValueChange,
  onSlidingComplete,
}: {
  value: number,
  maximumValue: number,
  minimumValue: number,
  onValueChange: number => void,
  onSlidingComplete: () => void,
  color: string,
}) => (
  <Slider
    maximumValue={maximumValue}
    minimumValue={minimumValue}
    value={value}
    onSlidingComplete={onSlidingComplete}
    onValueChange={onValueChange}
    style={styles.slider}
    trackStyle={styles.sliderTrack}
    thumbStyle={[
      styles.sliderThumb,
      {
        backgroundColor: color,
        borderColor: color,
      },
    ]}
    minimumTrackTintColor={color}
  />
)

export default StyledSlider

const styles = StyleSheet.create({
  slider: {
    width: Dimensions.get('window').width * 0.8,
    height: 44,
  },
  sliderTrack: {
    height: 5,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  sliderThumb: {
    width: 30,
    height: 30,
    borderWidth: 5,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  emoji: { fontSize: 64, backgroundColor: 'transparent' },
})
