//@flow
import * as React                                    from 'react'
import { Text, Button, StatusBar }                   from 'react-native'
import Composer                                      from 'react-composer'
import { SafeAreaView }                              from 'react-navigation'
import styles                                        from '../styles'
import SoundPlayback, { PENDING, FAIL }              from './SoundPlayback'
import MeditationTimer, { PAUSED, STARTED, STOPPED } from './MeditationTimer'
import MeditationScreenBackground                    from './MeditationScreenBackground'
import PlayPauseButton                               from './PlayPauseButton'
// import Ticker, { Tick }                           from './Ticker'

type Props = {
  lengthInSeconds: number,
  name: string,
  playSoundOnEnd: boolean,
  done: () => void,
  soundfile: number | { uri: string}
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
    lengthInSeconds: 10,
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

  renderPlayButton = ([
    playingSound: boolean,
    {
      minutes,
      seconds,
      status,
      timeElapsed
    }: { minutes: number, seconds: number, status: STARTED | PAUSED | STOPPED }
  ]) => {
    return (
      <React.Fragment>
        <Text>{this.props.name}</Text>
        <PlayPauseButton
          style={styles.playButton}
          playing={status == STARTED}
          onPress={
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
          }
        />
        <Text>{`${minutes}:${seconds}`}</Text>
        {status === PAUSED &&
          timeElapsed && (
            <Button title={'Finish Early'} onPress={this.props.done} />
          )}
      </React.Fragment>
    )
  }

  render = () => (
    <MeditationScreenBackground>
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <Composer
          components={[
            <SoundPlayback
              key="SoundPlayback"
              url={this.props.soundFile}
              ref={c => (this.soundPlayback = c)}
              shouldRender={status => status !== PENDING && status !== FAIL}
            />,
            <MeditationTimer
              key="MeditationTimer"
              timeInSeconds={5}
              onTimeElapsed={this.onTimeElapsed}
              onTick={this.tick}
              ref={c => (this.timer = c)}
            />
          ]}
        >
          {this.renderPlayButton}
        </Composer>
      </SafeAreaView>
    </MeditationScreenBackground>
  )
}