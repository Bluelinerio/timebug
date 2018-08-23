import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Video from 'react-native-video'
import DefaultIndicator from './DefaultIndicator'

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
    paused: true
  }

  onLoad = () => {
    tron.log('video loaded')
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

  onProgress = () => {
    tron.log('Progress!')
  }

  play = () => {
    tron.log('play')
    if (this.state.status === FINISHED || this.state.status === READY) {
      tron.log('seek')
      this.player && this.player.seek(0)
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
            paddingVertical: 4
          }}
        >
          {this.state.status === PENDING ? (
            <DefaultIndicator />
          ) : (
            <TouchableOpacity
              onPress={() =>
                this.state.status === PLAYING ? this.pause() : this.play()
              }
            >
              <Icon
                name={this.state.status === PLAYING ? 'ios-pause' : 'ios-play'}
                size={40}
                style={{
                  color: 'gray'
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        {video}
      </React.Fragment>
    )
  }
}
