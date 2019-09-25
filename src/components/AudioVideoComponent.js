// @flow
import * as React       from 'react'
import { View }         from 'react-native'
import Video            from 'react-native-video'
import DefaultIndicator from './DefaultIndicator'
import ControlBar       from './ControlBar'
import styles           from '../styles/components/AudioVideoComponent'

export const PENDING = 'pending'
export const READY = 'ready'
export const FAIL = 'fail'
export const PLAYING = 'playing'
export const PAUSED = 'paused'
export const FINISHED = 'finished'

type AudioVideoComponentStatus = PENDING | READY | FAIL | PLAYING | FINISHED

type Props = {
  file: string,
}

type State = {
  status: AudioVideoComponentStatus,
  paused: boolean,
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

  setDuration = data => {
    this.setState({ totalLength: Math.floor(data.duration) })
  }

  setTime = data => {
    this.setState({ currentPosition: Math.floor(data.currentTime) })
  }

  seek = time => {
    time = Math.round(time)
    this.player && this.player.seek(time)
    this.setState({
      currentPosition: time,
    })
  }

  onLoad = data => {
    this.setDuration(data)
    this.setState({ status: READY })
  }

  onLoadStart = () => {}

  onEnd = () => {
    this.setState({
      paused: true,
      status: FINISHED,
      currentPosition: this.state.totalLength,
    })
  }

  pause = () => {
    this.setState({ paused: true, status: PAUSED })
  }

  onProgress = data => {
    this.setTime(data)
  }

  onSlideStart = () => this.pause()

  onSlideEnd = time => {
    this.seek(time)
    this.play()
  }

  play = () => {
    if (this.state.status === FINISHED || this.state.status === READY) {
      this.seek(0)
      this.setState({ paused: false, status: PLAYING })
    } else {
      this.setState({ paused: false, status: PLAYING })
    }
  }

  render = () => {
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
        progressUpdateInterval={200.0}
      />
    )
    return (
      <React.Fragment>
        <View style={styles.audioVideoContainer}>
          {this.state.status === PENDING ? (
            <DefaultIndicator />
          ) : (
            <ControlBar
              onButtonPress={() =>
                this.state.status === PLAYING ? this.pause() : this.play()
              }
              iconName={
                this.state.status === PLAYING ? 'ios-pause' : 'ios-play'
              }
              seek={this.onSlideEnd}
              trackLength={this.state.totalLength}
              onSlidingStart={this.onSlideStart}
              currentPosition={this.state.currentPosition}
            />
          )}
        </View>
        {video}
      </React.Fragment>
    )
  }
}
