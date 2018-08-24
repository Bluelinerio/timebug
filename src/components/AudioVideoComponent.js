import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Video from 'react-native-video'
import DefaultIndicator from './DefaultIndicator'
import SeekBar from './SeekBar'

import tron from 'reactotron-react-native'

export const PENDING = 'pending'
export const READY = 'ready'
export const FAIL = 'fail'
export const PLAYING = 'playing'
export const PAUSED = 'paused'
export const FINISHED = 'finished'

type AudioVideoComponentStatus = PENDING | READY | FAIL | PLAYING | FINISHED

type Props = {
  file: string
}

type State = {
  status: AudioVideoComponentStatus,
  paused: boolean
}

export default class AudioVideoComponent extends React.PureComponent<
  Props,
  State
> {
  state = {
    status: PENDING,
    paused: true,
    totalLength: 1,
    currentPosition: 0,
  }

  setDuration = (data) => {
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime = (data) => {
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek = (time) => {
    time = Math.round(time);
    this.player && this.player.seek(time)
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onLoad = (data) => {
    tron.log('video loaded')
    this.setDuration(data)
    this.setState({ status: READY })
  }

  onLoadStart = () => {
    tron.log('Started Loading video')
  }

  onEnd = () => {
    tron.log('video ended')
    this.setState({ paused: true, status: FINISHED })
  }

  pause = () => {
    this.setState({ paused: true, status: PAUSED })
  }

  onProgress = (data) => {
    tron.log('Progress!')
    this.setTime(data)
  }

  play = () => {
    tron.log('play')
    if (this.state.status === FINISHED || this.state.status === READY) {
      tron.log('seek')
      this.seek(0)
      this.setState({ paused: false, status: PLAYING })
    } else {
      tron.log('just play')
      this.setState({ paused: false, status: PLAYING })
    }
  }

  render = () => {
    tron.log(this.state)
    const video = (
      <Video
        ref={ref => {
          this.player = ref
        }}
        source={{ uri: this.props.file }}
        onLoadStart={this.onLoadStart}
        onLoad={this.onLoad}
        onEnd={this.onEnd}
        onProgress={this.onProgress}
        paused={this.state.paused}
      />
    )
    return (
      <React.Fragment>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingVertical: 4,
            paddingHorizontal: 8
          }}
        >
          {this.state.status === PENDING ? (
            <DefaultIndicator />
          ) : (
            <View style={{flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() =>
                  this.state.status === PLAYING ? this.pause() : this.play()
                }
              >
                <Icon
                  name={
                    this.state.status === PLAYING ? 'ios-pause' : 'ios-play'
                  }
                  size={40}
                  style={{
                    color: 'gray'
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          
          <SeekBar
              onSeek={this.seek}
              trackLength={this.state.totalLength}
              onSlidingStart={() => this.setState({paused: true})}
              currentPosition={this.state.currentPosition} />
        </View>
        {video}
      </React.Fragment>
    )
  }
}
