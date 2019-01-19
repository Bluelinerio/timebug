import React from 'react'
import { View, Text, Platform, Alert } from 'react-native'
import Sound from 'react-native-sound'
import MeditationTimerIcon from './MeditationTimerIcon'
import { minutesAndSeconds } from '2020_utils/timerHelpers'
import styles from '../styles'

export type Props = {
  onMeditationFinish: () => any,
  total: number,
  style: any,
}

const PLAYING = 'PLAYING'
const PAUSED = 'PAUSED'
const FINISHED = 'FINISHED'

const TIMER_STATUS = {
  PLAYING,
  PAUSED,
  FINISHED,
}

const icons = {
  [TIMER_STATUS.PLAYING]: 'ios-pause',
  [TIMER_STATUS.PAUSED]: 'ios-play',
  [TIMER_STATUS.FINISHED]: 'ios-play',
}

const overrideStyles = {
  [TIMER_STATUS.PLAYING]: {
    ...Platform.select({
      android: {
        paddingLeft: 0,
      },
      ios: {},
    }),
  },
  [TIMER_STATUS.PAUSED]: {},
  [TIMER_STATUS.FINISHED]: {},
}

class MeditationTimer extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      totalLength: props.total || 1,
      currentPosition: 0,
      status: TIMER_STATUS.PAUSED,
      isFinished: false,
      error: null,
    }
    this.interval = null
    this.soundFile = null
  }

  componentDidMount() {
    this.soundFile = new Sound('bell.wav', Sound.MAIN_BUNDLE, error => {
      if (error) {
        Alert.alert('Error', 'An error ocurred while reading from storage')
        return
      }
    })
  }

  onTimerFinish = () => {
    const { onMeditationFinish } = this.props
    this.soundFile.play(success => {
      if (success) {
        // All good, do nothing
        return
      }
      else {
        // An error ocurred, figure out what to do, probably try to load the file again?
        return
      }
    })
    this.setState({ status: TIMER_STATUS.FINISHED, isFinished: true }, () => {
      clearInterval(this.interval)
      this.interval = null
      onMeditationFinish()
    })
  }

  componentDidUpdate() {
    if (
      !this.state.isFinished &&
      this.state.totalLength - this.state.currentPosition === 0
    ) {
      this.onTimerFinish()
    }
  }

  componentWillUnmount() {
    this.soundFile.release()
  }

  _toggleTimer = () => {
    const { status } = this.state
    if (status === TIMER_STATUS.FINISHED) return
    if (status === TIMER_STATUS.PAUSED) {
      this.setState({ status: TIMER_STATUS.PLAYING }, () => {
        this.interval = setInterval(
          () =>
            this.setState(prevState => ({
              currentPosition: prevState.currentPosition + 1,
            })),
          1000
        )
      })
    } else {
      this.setState({ status: TIMER_STATUS.PAUSED }, () => {
        clearInterval(this.interval)
        this.interval = null
      })
    }
  }

  render() {
    const { totalLength, currentPosition, status } = this.state
    const remaining = minutesAndSeconds(totalLength - currentPosition)

    return (
      <View style={[styles.container, styles.iconArea]}>
        <View style={[styles.container, styles.iconRow]}>
          <MeditationTimerIcon
            icon={icons[status]}
            onPress={this._toggleTimer}
            style={overrideStyles[status]}
          />
        </View>
        <View style={[styles.container, styles.trackLengthContainer]}>
          <Text style={[styles.text, styles.trackLength]}>{`${remaining[0]}:${
            remaining[1]
          }`}</Text>
        </View>
      </View>
    )
  }
}

export default MeditationTimer
