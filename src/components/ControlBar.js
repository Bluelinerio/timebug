//@flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SeekBar from './SeekBar'

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
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
        paddingHorizontal: 8,
        maxHeight: 50,
        backgroundColor: 'white',
        borderRadius: 12
      }}
    >
      <TouchableOpacity
        onPress={props.onButtonPress}
        style={{
          flex: 1,
          borderColor: '#212121',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}
      >
        <Icon name={props.iconName} size={32} style={{ color: 'gray' }} />
      </TouchableOpacity>
      <View
        style={{
          flex: 6,
          alignItems: 'stretch',
          justifyContent: 'center'
        }}
      >
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
