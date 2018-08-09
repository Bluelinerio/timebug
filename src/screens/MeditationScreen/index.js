// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import selectors from '../../redux/selectors'
import MeditationScreenComponent from './components/MeditationScreenComponent'
import { StackNavigator, NavigationActions } from 'react-navigation'
import styles from '../styles'
import HeaderCloseButton from '../../components/HeaderCloseButton'
import { withNavigationAndMeditation } from '../../HOC'

//const goneSoundFile = require('../../resources/sounds/gong.wav')

const MeditationScreenContainer = compose(
  withNavigationAndMeditation,
  mapProps(({ navigation: { dispatch }, meditation, rest }) => ({
    ...rest,
    ...meditation,
    soundfile: meditation.audioFile ? meditation.audioFile : goneSoundFile,
    done: () => dispatch(NavigationActions.back())
  }))
)(MeditationScreenComponent)

MeditationScreenContainer.navigationOptions = ({
  navigation: { dispatch }
}) => ({
  headerStyle: styles.navigationOptionHeaderStyle,
  headerRight: (
    <HeaderCloseButton
      onPress={() => dispatch(NavigationActions.back())}
      pressColorAndroid={'white'}
      tintColor={'white'}
    />
  )
})

const MeditationScreen = StackNavigator(
  {
    Markdown: {
      screen: MeditationScreenContainer
    }
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
)

type Meditation = {
  id: string,
  name: string,
  step?: string,
  backgroundColor: string,
  lengthInSeconds: number,
  audioFile: string,
  gongFile: string
}

// TODO: determin if it is required to fixDebounce:
//fixDebounce(MeditationScreen)

export default MeditationScreen
