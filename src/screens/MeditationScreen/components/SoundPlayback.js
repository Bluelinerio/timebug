import * as React from 'react';
import Sound from 'react-native-sound';
import { View } from 'react-native';

const PENDING = 'pending';
const READY = 'ready';
const FAIL = 'fail';
const PLAYING = 'playing';
const FINISHED = 'finished';

type Props = {
  renderOnReady: (() => void) => React.Element<any>, // not useing this
  renderOnNotReady: () => React.Element<any>, // not using this.
  onReady: () => void,
  onPlaying: () => void
};
type State = {
  url: any,
  status: FINISHED | FAIL | PLAYING | FINISHED
};
export default class SoundPlayback extends React.PureComponent<Props, State> {
  componentWillMount() {
    this.loadSound();
  }

  loadSound = () => {
    const { url } = this.props;
    const sound = new Sound(url, error => this.callback(error, sound));
    this.setState({
      url,
      sound,
      status: PENDING
    });
  };

  callback = (error, sound) => {
    if (error) {
      // Alert.alert('error', error.message);
      this.setState({
        status: FAIL,
        error
      });
      return;
    }
    this.setState({
      status: READY
    });
    this.props.onReady && this.props.onReady();
    // Run optional pre-play callback
    // testInfo.onPrepared && testInfo.onPrepared(sound, component);
  };

  play = () => {
    const { status, sound } = this.state;
    if (sound && status === READY) {
      this.setState({
        status: PLAYING
      });
      this.props.onPlaying && this.props.onPlaying();
      sound.play(() => {
        // Success counts as getting to the end
        this.setState({
          status: FINISHED
        });
        // release it:
        sound.release();
        this.loadSound();
      });
    }
  };

  render() {
    const { status } = this.state;
    switch (this.state) {
      case FINISHED:
      case READY:
        return (
          (this.props.renderOnReady && this.props.renderOnReady(this.play)) || (
            <View />
          )
        );
      case FAIL:
      case PLAYING:
      default:
        return (
          (this.props.renderOnNotReady && this.props.renderOnNotReady()) || (
            <View />
          )
        );
    }
  }
}
