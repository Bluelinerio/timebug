import * as React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const PlayPauseButton = ({
  onPress,
  playing,
  ...rest
}: {
  playing: boolean,
  onPress: () => void,
}) => (
  <Entypo.Button
    name={playing ? 'controller-paus' : 'controller-play'}
    backgroundColor={'transparent'}
    pressColor={'transparent'}
    color={'white'}
    size={88}
    onPress={onPress}
    {...rest}
  />
);

export default PlayPauseButton;
