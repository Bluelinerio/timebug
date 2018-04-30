import * as React from 'react'
import Sound from 'react-native-sound'

// freesuonds:
//https://freesound.org/people/reinsamba/sounds/46062/

export const PENDING = 'pending'
export const READY = 'ready'
export const FAIL = 'fail'
export const PLAYING = 'playing'
export const PAUSED = 'paused'
export const FINISHED = 'finished'

type SoundPlaybackStatus = PENDING | READY | FAIL | PLAYING | FINISHED

type Props = {
  shouldRender: SoundPlaybackStatus => boolean,
  url: any,
  children: boolean => React.Node | [React.Node]
}

type State = {
  status: SoundPlaybackStatus,
  loadedUrl?: any,
  error?: any,
  sound?: any
}

export default class SoundPlayback extends React.PureComponent<Props, State> {
  state = {
    status: PENDING
  }
  componentDidMount() {
    this.loadSound()
  }

  loadSound = () => {
    const { url } = this.props
    const { loadedUrl, sound: oldSound } = this.state

    if (url == loadedUrl) return

    if (oldSound) {
      oldSound.release()
    }

    const sound = new Sound(url, error => this.callback(url, error))
    this.setState({
      loadedUrl: null,
      sound,
      status: PENDING
    })
  }

  callback = (url, error) => {
    if (error) {
      const { sound } = this.state
      sound.release()
      this.setState({
        status: FAIL,
        error,
        sound: null
      })
    } else {
      this.setState({
        status: READY,
        loadedUrl: url
      })
    }
  }

  stop = () => {
    const { sound } = this.state
    if (sound && this.state.status === PLAYING) {
      this.setState(
        {
          status: FINISHED
        },
        () => sound.stop()
      )
      return
    }
  }
  pause = () => {
    const { sound } = this.state
    if (sound && this.state.status === PLAYING) {
      this.setState(
        {
          status: PAUSED
        },
        () => sound.pause()
      )
    }
  }

  play = () => {
    const { status, sound } = this.state
    if ((sound && status === READY) || status === FINISHED) {
      this.setState(
        {
          status: PLAYING
        },
        () =>
          sound.play(() => {
            // Success counts as getting to the end
            this.setState({
              status: FINISHED
            })
            // release it:
            sound.release()
            this.loadSound()
          })
      )
    } else if (sound && status === PAUSED) {
      this.setState(
        {
          status: PLAYING
        },
        () =>
          sound.play(() => {
            // Success counts as getting to the end
            this.setState({
              status: FINISHED
            })
            // release it:
            sound.release()
            this.loadSound()
          })
      )
    }
  }

  render = () =>
    this.props.shouldRender(this.state.status)
      ? this.props.children(this.state.status === PLAYING)
      : null
}
