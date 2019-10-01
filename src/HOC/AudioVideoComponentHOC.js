// @flow
import * as React       from 'react'
import Video            from 'react-native-video'
import { Alert }        from 'react-native'
import DefaultIndicator from '../components/DefaultIndicator'

export const PENDING = 'pending'
export const READY = 'ready'
export const FAIL = 'fail'
export const PLAYING = 'playing'
export const PAUSED = 'paused'
export const FINISHED = 'finished'

export const videoStatus = {
  PENDING,
  READY,
  FAIL,
  PLAYING,
  PAUSED,
  FINISHED,
}

type AudioVideoComponentContainerStatus =
  | PENDING
  | READY
  | FAIL
  | PLAYING
  | FINISHED

type Props = {
  file: string,
  showIndicator: boolean,
}

type State = {
  status: AudioVideoComponentContainerStatus,
  paused: boolean,
  totalLength: number,
  currentPosition: number,
  hasBeenReady: boolean,
}

const AudioVideoComponentHOC = (Component: React.ReactNode<any>) => {
  class AudioVideoComponentContainer extends React.Component<Props, State> {
    constructor(props) {
      super(props)

      const file = props.file

      this.state = {
        status: file ? PENDING : FAIL,
        paused: true,
        totalLength: 1,
        currentPosition: 0,
        hasBeenReady: false,
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.file !== prevProps.file) {
        if (!this.props.file) {
          this.setState({
            status: FAIL,
            hasBeenReady: false,
            paused: true,
            totalLength: 1,
            currentPosition: 0,
          })
        } else {
          this.setState({
            status: PENDING,
            paused: true,
            totalLength: 1,
            currentPosition: 0,
            hasBeenReady: false,
          })
        }
      }
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
      this.setState({ status: READY, hasBeenReady: true })
    }

    onLoadStart = () => {}

    onEnd = () => {
      this.setState({
        paused: true,
        status: FINISHED,
        currentPosition: this.state.totalLength,
      })
    }

    pause = cb => {
      this.setState({ paused: true, status: PAUSED }, cb)
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
        if (this.state.hasBeenReady)
          this.setState({ paused: false, status: PLAYING })
      }
    }

    toggle = () => {
      this.state.status === PLAYING ? this.pause() : this.play()
    }

    _errorWarning = () => {
      Alert.alert('An error has ocurred', 'Please try again later')
    }

    handle = () => {
      if (this.state.status === PENDING) return
      this.state.status === FAIL ? this.retry() : this.toggle()
    }

    onError = () => {
      this._errorWarning()
      this.setState({ status: FAIL })
    }

    retry = () => {
      if (this.props.file)
        this.setState({
          status: PENDING,
          paused: true,
          totalLength: 1,
          currentPosition: 0,
          hasBeenReady: false,
        })
    }

    render = () => {
      const { status, paused, totalLength, currentPosition } = this.state
      const { showIndicator = true } = this.props
      const video =
        status === FAIL ? null : (
          <Video
            ref={ref => {
              this.player = ref
            }}
            source={{ uri: this.props.file }}
            onLoadStart={this.onLoadStart}
            onLoad={this.onLoad}
            onEnd={this.onEnd}
            onProgress={this.onProgress}
            onError={this.onError}
            paused={this.state.paused}
            progressUpdateInterval={200.0}
          />
        )
      return (
        <React.Fragment>
          {video}
          {showIndicator && status === PENDING ? (
            <DefaultIndicator container={false} />
          ) : (
            <Component
              {...this.props}
              totalLength={totalLength}
              currentPosition={currentPosition}
              videoStatus={status}
              paused={paused}
              handle={this.handle}
            />
          )}
        </React.Fragment>
      )
    }
  }
  return AudioVideoComponentContainer
}

export default AudioVideoComponentHOC
