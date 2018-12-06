import { StyleSheet } from 'react-native';
import { systemWeights, material } from 'react-native-typography';
import { white2 } from '../../constants/colors';

export const white = white2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  playButton: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    ...material.titleObject,
    ...systemWeights.light,
    color: white2,
    textAlign: 'center',
  },
  countdownText: {
    ...material.titleObject,
    ...systemWeights.light,
    color: white2,
    textAlign: 'center',
  },
});

export default styles;
