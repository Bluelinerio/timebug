import React             from 'react'
import { Alert }         from 'react-native'
import Sound             from 'react-native-sound'
import MeditationContent from '../containers/MeditationContentWrapper'

export type Props = {
  onMeditationFinish: () => any,
  total: number,
  disableTimer: boolean,
}

class MeditationTimer extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
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

  _onTimerFinish = () => {
    const { onMeditationFinish } = this.props
    this.soundFile.play(success => {
      if (success) {
        // All good, do nothing
        return
      } else {
        // An error ocurred, figure out what to do, probably try to load the file again?
        return
      }
    })
    onMeditationFinish()
  }

  componentWillUnmount() {
    this.soundFile.release()
  }

  render() {
    const { total, disableTimer } = this.props
    return (
      <MeditationContent
        onTimerFinish={this._onTimerFinish}
        total={total}
        disableTimer={disableTimer}
      />
    )
  }
}

export default MeditationTimer
