//@flow
import * as React                                    from 'react'
import { View, Text, StatusBar }                     from 'react-native'
import Composer                                      from 'react-composer'
import { SafeAreaView }                              from 'react-navigation'
import styles, { white }                             from '../styles'
import Button                                        from '../../../components/Button'
import SoundPlayback, { PENDING, FAIL }              from './SoundPlayback'
import MeditationTimer, { PAUSED, STARTED, STOPPED } from './MeditationTimer'
import MeditationScreenBackground                    from './MeditationScreenBackground'
import PlayPauseButton                               from './PlayPauseButton'

type Props = {
  lengthInSeconds: number,
  name: string,
  color: string,
  gradientBackgound: {
    startColor: string,
    endColor: string
  },
  playSoundOnEnd: boolean,
  done: () => void,
  soundfile: number | { uri: string }
}
type State = {
  lengthInSeconds: number
}
// class PlaybackControllerButton extends
export default class MeditationScreenComponent extends React.PureComponent<
  Props,
  State
> {
  static defaultProps = {
    lengthInSeconds: 60,
    name: 'Meditation',
    playSoundOnEnd: true
  }
  state = {
    lengthInSeconds: this.props.lengthInSeconds
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }
  componentWillUnmount() {
    StatusBar.setHidden(false)
  }

  tick = () => null

  onTimeElapsed = () => {
    this.props.playSoundOnEnd && this.soundPlayback.play()
  }

  renderLayout = ([
    playingSound: boolean,
    {
      minutes,
      seconds,
      status,
      timeElapsed
    }: { minutes: number, seconds: number, status: STARTED | PAUSED | STOPPED }
  ]) => {
    console.log({
      minutes,
      seconds,
      status,
      timeElapsed
    })
    const playButtoOnPress =
      status === STARTED
        ? playingSound
          ? () => {
              this.soundPlayback.pause()
              this.timer.pause()
            }
          : () => {
              this.timer.pause()
            }
        : status === PAUSED
          ? () => {
              this.timer.start()
            }
          : () => {
              this.soundPlayback.play()
              this.timer.start()
            }
    const finishEarlyButton = status === PAUSED &&
      !timeElapsed && (
        <Button
          textColor={this.props.color}
          backgroundColor={white}
          text={'Finish Early'}
          onPress={this.props.done}
        />
      )
    return (
      <View
        style={{
          flex:1,
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.countdownText}>{`${minutes}:${seconds}`}</Text>
        </View>
        <View>
          <PlayPauseButton
            style={styles.playButton}
            playing={status == STARTED}
            onPress={playButtoOnPress}
          />
          {finishEarlyButton}
        </View>
      </View>
    )
  }
  render() {
    return (
      <MeditationScreenBackground {...this.props.gradientBackgound}>
        <SafeAreaView
          forceInset={{ top: 'always', bottom: 'never' }}
          style={styles.container}
        >
          <Composer
            components={[
              <SoundPlayback
                key="SoundPlayback"
                url={this.props.soundfile}
                ref={c => (this.soundPlayback = c)}
                shouldRender={status => status !== PENDING && status !== FAIL}
              />,
              <MeditationTimer
                key="MeditationTimer"
                lengthInSeconds={this.state.lengthInSeconds}
                onTimeElapsed={this.onTimeElapsed}
                onTick={this.tick}
                ref={c => (this.timer = c)}
              />
            ]}
          >
            {this.renderLayout}
          </Composer>
        </SafeAreaView>
      </MeditationScreenBackground>
    )
  }
}
