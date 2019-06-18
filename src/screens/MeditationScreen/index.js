// Remove once file is used again
/* eslint-disable no-undef */

// @flow

import * as React from 'react';
import { compose, mapProps } from 'recompose';
import MeditationScreenComponent from './components/MeditationScreenComponent';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import styles from '../styles';
import HeaderCloseButton from '../../components/HeaderCloseButton';
import { withNavigationAndMeditation } from '../../HOC';

//const gongSoundFile = require('../../resources/sounds/gong.wav')

type Meditation = {
  id: string,
  name: string,
  step?: string,
  backgroundColor: string,
  lengthInSeconds: number,
  audioFile: string,
  gongFile: string,
};

const MeditationScreenContainer = compose(
  withNavigationAndMeditation,
  mapProps(
    ({
      navigation: { dispatch },
      meditation,
      rest,
    }: {
      meditation: Meditation,
    }) => ({
      ...rest,
      ...meditation,
      soundfile: meditation.audioFile ? meditation.audioFile : gongSoundFile,
      done: () => dispatch(NavigationActions.back()),
    })
  )
)(MeditationScreenComponent);

MeditationScreenContainer.navigationOptions = ({
  navigation: { dispatch },
}) => ({
  headerStyle: styles.navigationOptionHeaderStyle,
  headerRight: (
    <HeaderCloseButton
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  ),
});

const MeditationScreen = createStackNavigator(
  {
    Markdown: {
      screen: MeditationScreenContainer,
    },
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
  }
);

// TODO: determin if it is required to fixDebounce:
//fixDebounce(MeditationScreen)

export default MeditationScreen;
